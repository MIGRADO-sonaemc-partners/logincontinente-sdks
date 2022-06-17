/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

function dec2hex(dec) {
  return ("0" + dec.toString(16)).substr(-2);
}

function generateRandomString() {
  var array = new Uint32Array(56 / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join("");
}

function sha256(plain) {
  // returns promise ArrayBuffer
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data);
}

function base64urlencode(a) {
  var str = "";
  var bytes = new Uint8Array(a);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function challenge_from_verifier(v) {
  return sha256(v)
    .then((hashed) => {
      const base64encoded = base64urlencode(hashed);
      debugger;
      return base64encoded;
    })
    .catch((e) => {
      debugger;
      console.warn(e);
      return null;
    });
}

(function () {
  // special patch to correctly work on Ripple emulator (CB-9760)
  if (window.parent && !!window.parent.ripple) {
    // https://gist.github.com/triceam/4658021
    module.exports = window.open.bind(window); // fallback to default window.open behaviour
    return;
  }

  var exec = require("cordova/exec");
  var channel = require("cordova/channel");
  var modulemapper = require("cordova/modulemapper");
  var urlutil = require("cordova/urlutil");

  function InAppBrowser() {
    this.channels = {
      beforeload: channel.create("beforeload"),
      loadstart: channel.create("loadstart"),
      loadstop: channel.create("loadstop"),
      loaderror: channel.create("loaderror"),
      exit: channel.create("exit"),
      customscheme: channel.create("customscheme"),
      message: channel.create("message"),
    };
  }

  InAppBrowser.prototype = {
    _eventHandler: function (event) {
      if (event && event.type in this.channels) {
        if (event.type === "beforeload") {
          this.channels[event.type].fire(event, this._loadAfterBeforeload);
        } else {
          this.channels[event.type].fire(event);
        }
      }
    },
    // _loadAfterBeforeload: function (strUrl) {
    //     strUrl = urlutil.makeAbsolute(strUrl);
    //     exec(null, null, 'InAppBrowser', 'loadAfterBeforeload', [strUrl]);
    // },
    close: function (eventname) {
      exec(null, null, "InAppBrowser", "close", []);
    },
    show: function (eventname) {
      exec(null, null, "InAppBrowser", "show", []);
    },
    hide: function (eventname) {
      exec(null, null, "InAppBrowser", "hide", []);
    },
    // addEventListener: function (eventname, f) {
    //     if (eventname in this.channels) {
    //         this.channels[eventname].subscribe(f);
    //     }
    // },
    // removeEventListener: function (eventname, f) {
    //     if (eventname in this.channels) {
    //         this.channels[eventname].unsubscribe(f);
    //     }
    // },
    // executeScript: function (injectDetails, cb) {
    //     if (injectDetails.code) {
    //         exec(cb, null, 'InAppBrowser', 'injectScriptCode', [injectDetails.code, !!cb]);
    //     } else if (injectDetails.file) {
    //         exec(cb, null, 'InAppBrowser', 'injectScriptFile', [injectDetails.file, !!cb]);
    //     } else {
    //         throw new Error('executeScript requires exactly one of code or file to be specified');
    //     }
    // }
  };

  module.exports = function (
    strUrl,
    clientId,
    onSuccessCallback,
    onErrorCallback
  ) {
    // Don't catch calls that write to existing frames (e.g. named iframes).
    var strWindowName = "_blank";
    var strWindowFeatures = "location=no,hidden=no,zoom=no";
    if (window.frames && window.frames[strWindowName]) {
      var origOpenFunc = modulemapper.getOriginalSymbol(window, "open");
      return origOpenFunc.apply(window, arguments);
    }

    var iab = new InAppBrowser();

    var codeVerifier = generateRandomString();

    challenge_from_verifier(codeVerifier)
      .then((challenge) => {
        var url = new URL(strUrl);
        url.searchParams.append("clientId", clientId);
        // url.searchParams.append('code_verifier', clientId);
        url.searchParams.append("code_challenge", challenge);
        url.searchParams.append("code_challenge_method", "S256");

        function onSuccessWrapper(params) {
          if (params?.data) {
            let result = {
              authorization_code: params?.data?.authorization_code ?? "",
              code_verifier: codeVerifier,
            };
            iab.close();
            onSuccessCallback(result);
          } else {
            let error = {
              code: "500001",
              message: "Error Obtaining object from POST MESSAGE",
            };
            iab.close();
            onErrorCallback(error);
          }
        }

        function onErrorWrapper(params) {
          let error = {
            code: "500000",
            message: "Error Opening WebView",
          };
          iab.close();
          onErrorCallback(error);
        }

        // Event Listeners on Messeage and Exit
        iab.channels.message.subscribe(onSuccessWrapper);
        iab.channels.loaderror.subscribe(onErrorWrapper);

        var cb = function (eventname) {
          iab._eventHandler(eventname);
        };

        strWindowFeatures = strWindowFeatures || "";

        exec(cb, cb, "InAppBrowser", "open", [
          url.toString(),
          strWindowName,
          strWindowFeatures,
          clientId,
        ]);
        return iab;
      })
      .catch(() => {
        let error = {
          code: "500001",
          message: "Error Creating Challenge",
        };
        onErrorCallback(error);
        return null;
      });
  };
})();
