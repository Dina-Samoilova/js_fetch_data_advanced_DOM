parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=t(n))){var e=0,r=function(){};return{s:r,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c,u=!0,a=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return u=n.done,n},e:function(n){a=!0,c=n},f:function(){try{u||null==o.return||o.return()}finally{if(a)throw c}}}}function t(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var r="https://mate-academy.github.io/phone-catalogue-static/api",o=document.body;function c(n){o.insertAdjacentHTML("beforeend",'\n    <div class="first-received">\n      <h2>\n        First Received\n      </h2>\n      <ul>\n        <li>\n          Phone ID: '.concat(n[0],"\n        <br>\n          Phone Name: ").concat(n[1],"\n        </li>\n      </ul>\n    </div>\n  "))}function u(t){var e,r="",o=n(t);try{for(o.s();!(e=o.n()).done;){var c=e.value;r+="\n      <li>\n        Phone ID: ".concat(c.id.toUpperCase(),"\n        <br>\n        Phone Name: ").concat(c.name,"\n      </li>\n    ")}}catch(u){o.e(u)}finally{o.f()}return r}function a(n){o.insertAdjacentHTML("beforeend",'\n    <div class="all-successful">\n      <h2>\n        All Successful\n      </h2>\n      <ol>\n        '.concat(n,"\n      </ol>\n    </div>\n  "))}function i(n){o.insertAdjacentHTML("beforeend",'\n    <div class="three-fatest">\n      <h2>\n        Three Fastest\n      </h2>\n      <ol>\n        '.concat(n,"\n      </ol>\n    </div>\n  "))}function f(n){o.insertAdjacentHTML("beforeend",'\n    <div class="notification">\n      '.concat(n,"\n    </div>\n  "))}var s=function(n){return fetch("".concat(n)).then(function(n){return n.ok?n.json():Promise.reject(new Error("".concat(n.status," - ").concat(n.statusText)))})},l=function(){return s("".concat(r,"/phones.json"))},h=function(n){return s("".concat(n))},d=function(n){var t,e,o=[],c=n.map(function(n){return"".concat(r,"/phones/").concat(n,".json")});return new Promise(function(n,r){Promise.race(c.map(function(n){return fetch(n)})).then(function(n){return n.json()}).then(function(r){t=r.id,e=r.name,o.push(t),o.push(e),n(o)})})},m=function(n){var t=[],e=n.map(function(n){return"".concat(r,"/phones/").concat(n,".json")});return new Promise(function(n,r){Promise.allSettled(e.map(function(n){return fetch(n)})).then(function(n){return n.map(function(n){return n.value.url})}).then(function(e){Promise.allSettled(e.map(function(n){return h(n)})).then(function(e){e.forEach(function(n){t.push({id:n.value.id,name:n.value.name})}),n(t)})})})},v=function(n){var t=n,e=[],o=3,c=t.map(function(n){return"".concat(r,"/phones/").concat(n,".json")});return new Promise(function(n,u){!function u(){o>0&&(o--,Promise.race(c.map(function(n){return fetch(n)})).then(function(n){return n.json()}).then(function(a){e.push({id:a.id,name:a.name}),t=t.filter(function(n){return n!==a.id}),c=t.map(function(n){return"".concat(r,"/phones/").concat(n,".json")}),0===o&&n(e),u()}))}()})};l().then(function(t){var e,r=[],o=n(t);try{for(o.s();!(e=o.n()).done;){var c=e.value;r.push(c.id)}}catch(u){o.e(u)}finally{o.f()}return r}).then(function(n){return d(n)}).then(c).catch(f),l().then(function(t){var e,r=[],o=n(t);try{for(o.s();!(e=o.n()).done;){var c=e.value;r.push(c.id)}}catch(u){o.e(u)}finally{o.f()}return r}).then(function(n){return m(n)}).then(function(n){a(u(n))}).catch(f),l().then(function(t){var e,r=[],o=n(t);try{for(o.s();!(e=o.n()).done;){var c=e.value;r.push(c.id)}}catch(u){o.e(u)}finally{o.f()}return r}).then(function(n){return v(n)}).then(function(n){return i(u(n))}).catch(f);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.64a7e1f0.js.map