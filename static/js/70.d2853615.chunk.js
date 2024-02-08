/*! For license information please see 70.d2853615.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkblockexplorer=self.webpackChunkblockexplorer||[]).push([[70],{8070:function(e,r,n){n.r(r),n.d(r,{isWeb3Injected:function(){return Xe},packageInfo:function(){return We},unwrapBytes:function(){return Qe},web3Accounts:function(){return fr},web3AccountsSubscribe:function(){return dr},web3Enable:function(){return ir},web3EnablePromise:function(){return $e},web3FromAddress:function(){return br},web3FromSource:function(){return hr},web3ListRpcProviders:function(){return vr},web3UseRpcProvider:function(){return gr},wrapBytes:function(){return Ye}});var t=n(3433),a=n(4165),o=n(5861),c=n(9439),i=n(7762);function f(e){return"function"===typeof e}function u(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(e){return function(e){return!!e&&"object"===typeof e}(e)&&r.every((function(r){return f(e[r])}))}}for(var d=u("catch","then"),s="0123456789abcdef",h=new Uint8Array(256),l=new Uint8Array(65536),b=0;b<16;b++)h[0|s[b].charCodeAt(0)]=0|b,b>9&&(h[0|s[b].toUpperCase().charCodeAt(0)]=0|b);for(var p=0;p<256;p++)for(var v=p<<8,w=0;w<256;w++)l[v|w]=h[p]<<4|h[w];var g="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this");function y(e,r){return"undefined"===typeof g[e]?r:g[e]}function x(){return Number.NaN}var m=y("BigInt",x),E="function"===typeof m&&"function"===typeof m.asIntN,k="function"===typeof g.Buffer&&"function"===typeof g.Buffer.isBuffer;g.process;var A=/^0x[\da-fA-F]+$/;function L(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2?arguments[2]:void 0;return"string"===typeof e&&("0x"===e||A.test(e))&&(-1===r?n||e.length%2===0:e.length===2+Math.ceil(r/4))}function Z(e){return(e&&e.constructor)===Uint8Array||e instanceof Uint8Array}var U=n(5671),B=n(3144),j=function(){function e(){(0,U.Z)(this,e)}return(0,B.Z)(e,[{key:"encode",value:function(e){for(var r=e.length,n=new Uint8Array(r),t=0;t<r;t++)n[t]=e.charCodeAt(t);return n}}]),e}(),I=new(y("TextEncoder",j));function D(e){return e?I.encode(e.toString()):new Uint8Array}function S(e){return Z(e)?function(e){return k&&!!e&&f(e.readDoubleLE)&&g.Buffer.isBuffer(e)}(e)?new Uint8Array(e):e:L(e)?function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if(!e)return new Uint8Array;for(var n=e.startsWith("0x")?2:0,t=Math.ceil((e.length-n)/2),a=Math.ceil(-1===r?t:r/8),o=new Uint8Array(a),c=a>t?a-t:0;c<a;c++,n+=2)o[c]=l[e.charCodeAt(n)<<8|e.charCodeAt(n+1)];return o}(e):Array.isArray(e)?new Uint8Array(e):D(e)}function H(e,r){var n=S(e),t=S(r);if(n.length===t.length){for(var a=new DataView(n.buffer,n.byteOffset),o=new DataView(t.buffer,t.byteOffset),c=n.length%4|0,i=n.length-c|0,f=0;f<i;f+=4)if(a.getUint32(f)!==o.getUint32(f))return!1;for(var u=i,d=n.length;u<d;u++)if(n[u]!==t[u])return!1;return!0}return!1}function M(){for(var e=arguments.length,r=new Array(e),n=0,t=0;t<e;t++)r[t]=S(t<0||arguments.length<=t?void 0:arguments[t]),n+=r[t].length;return N(r,n)}function N(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.length,t=0;if(!r)for(var a=0;a<n;a++)r+=e[a].length;for(var o=new Uint8Array(r),c=0;c<n;c++)o.set(e[c],t),t+=e[c].length;return o}function R(e){if(!Number.isSafeInteger(e))throw new Error("Wrong integer: ".concat(e))}function P(e){return e instanceof Uint8Array||null!=e&&"object"===typeof e&&"Uint8Array"===e.constructor.name}function F(){for(var e=function(e){return e},r=function(e,r){return function(n){return e(r(n))}},n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return{encode:t.map((function(e){return e.encode})).reduceRight(r,e),decode:t.map((function(e){return e.decode})).reduce(r,e)}}function C(e){return{encode:function(r){if(!Array.isArray(r)||r.length&&"number"!==typeof r[0])throw new Error("alphabet.encode input should be an array of numbers");return r.map((function(r){if(R(r),r<0||r>=e.length)throw new Error("Digit index outside alphabet: ".concat(r," (alphabet: ").concat(e.length,")"));return e[r]}))},decode:function(r){if(!Array.isArray(r)||r.length&&"string"!==typeof r[0])throw new Error("alphabet.decode input should be array of strings");return r.map((function(r){if("string"!==typeof r)throw new Error("alphabet.decode: not string element=".concat(r));var n=e.indexOf(r);if(-1===n)throw new Error('Unknown letter: "'.concat(r,'". Allowed: ').concat(e));return n}))}}}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof e)throw new Error("join separator should be string");return{encode:function(r){if(!Array.isArray(r)||r.length&&"string"!==typeof r[0])throw new Error("join.encode input should be array of strings");var n,t=(0,i.Z)(r);try{for(t.s();!(n=t.n()).done;){var a=n.value;if("string"!==typeof a)throw new Error("join.encode: non-string input=".concat(a))}}catch(o){t.e(o)}finally{t.f()}return r.join(e)},decode:function(r){if("string"!==typeof r)throw new Error("join.decode input should be string");return r.split(e)}}}function T(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"=";if(R(e),"string"!==typeof r)throw new Error("padding chr should be string");return{encode:function(n){if(!Array.isArray(n)||n.length&&"string"!==typeof n[0])throw new Error("padding.encode input should be array of strings");var t,a=(0,i.Z)(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;if("string"!==typeof o)throw new Error("padding.encode: non-string input=".concat(o))}}catch(c){a.e(c)}finally{a.f()}for(;n.length*e%8;)n.push(r);return n},decode:function(n){if(!Array.isArray(n)||n.length&&"string"!==typeof n[0])throw new Error("padding.encode input should be array of strings");var t,a=(0,i.Z)(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;if("string"!==typeof o)throw new Error("padding.decode: non-string input=".concat(o))}}catch(f){a.e(f)}finally{a.f()}var c=n.length;if(c*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;c>0&&n[c-1]===r;c--)if(!((c-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,c)}}}function O(e){if("function"!==typeof e)throw new Error("normalize fn should be function");return{encode:function(e){return e},decode:function(r){return e(r)}}}function W(e,r,n){if(r<2)throw new Error("convertRadix: wrong from=".concat(r,", base cannot be less than 2"));if(n<2)throw new Error("convertRadix: wrong to=".concat(n,", base cannot be less than 2"));if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];var t=0,a=[],o=Array.from(e);for(o.forEach((function(e){if(R(e),e<0||e>=r)throw new Error("Wrong integer: ".concat(e))}));;){for(var c=0,i=!0,f=t;f<o.length;f++){var u=o[f],d=r*c+u;if(!Number.isSafeInteger(d)||r*c/r!==c||d-u!==r*c)throw new Error("convertRadix: carry overflow");c=d%n;var s=Math.floor(d/n);if(o[f]=s,!Number.isSafeInteger(s)||s*n+c!==d)throw new Error("convertRadix: carry overflow");i&&(s?i=!1:t=f)}if(a.push(c),i)break}for(var h=0;h<e.length-1&&0===e[h];h++)a.push(0);return a.reverse()}var q=function e(r,n){return n?e(n,r%n):r},V=function(e,r){return e+(r-q(e,r))};function K(e,r,n,t){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(r<=0||r>32)throw new Error("convertRadix2: wrong from=".concat(r));if(n<=0||n>32)throw new Error("convertRadix2: wrong to=".concat(n));if(V(r,n)>32)throw new Error("convertRadix2: carry overflow from=".concat(r," to=").concat(n," carryBits=").concat(V(r,n)));var a,o=0,c=0,f=Math.pow(2,n)-1,u=[],d=(0,i.Z)(e);try{for(d.s();!(a=d.n()).done;){var s=a.value;if(R(s),s>=Math.pow(2,r))throw new Error("convertRadix2: invalid data word=".concat(s," from=").concat(r));if(o=o<<r|s,c+r>32)throw new Error("convertRadix2: carry overflow pos=".concat(c," from=").concat(r));for(c+=r;c>=n;c-=n)u.push((o>>c-n&f)>>>0);o&=Math.pow(2,c)-1}}catch(h){d.e(h)}finally{d.f()}if(o=o<<n-c&f,!t&&c>=r)throw new Error("Excess padding");if(!t&&o)throw new Error("Non-zero padding: ".concat(o));return t&&c>0&&u.push(o>>>0),u}function G(e){return R(e),{encode:function(r){if(!P(r))throw new Error("radix.encode input should be Uint8Array");return W(Array.from(r),Math.pow(2,8),e)},decode:function(r){if(!Array.isArray(r)||r.length&&"number"!==typeof r[0])throw new Error("radix.decode input should be array of numbers");return Uint8Array.from(W(r,e,Math.pow(2,8)))}}}function J(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(R(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(V(8,e)>32||V(e,8)>32)throw new Error("radix2: carry overflow");return{encode:function(n){if(!P(n))throw new Error("radix2.encode input should be Uint8Array");return K(Array.from(n),8,e,!r)},decode:function(n){if(!Array.isArray(n)||n.length&&"number"!==typeof n[0])throw new Error("radix2.decode input should be array of numbers");return Uint8Array.from(K(n,e,8,r))}}}J(4),C("0123456789ABCDEF"),z(""),J(5),C("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),T(5),z(""),J(5),C("0123456789ABCDEFGHIJKLMNOPQRSTUV"),T(5),z(""),J(5),C("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),z(""),O((function(e){return e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")})),J(6),C("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),T(6),z(""),J(6),C("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),T(6),z(""),J(6),C("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),z("");var Q=function(e){return F(G(58),C(e),z(""))},Y=Q("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");C("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),z("");J(4),C("0123456789abcdef"),z(""),O((function(e){if("string"!==typeof e||e.length%2)throw new TypeError("hex.decode: expected string, got ".concat(typeof e," with length ").concat(e.length));return e.toLowerCase()}));function _(e,r){var n=e.coder,t=e.ipfs;return function(e,a){return r(e,a),n.decode(t&&a?e.substring(1):e)}}function X(e){var r=e.coder,n=e.ipfs;return function(e,t){var a=r.encode(S(e));return n&&t?"".concat(n).concat(a):a}}function $(e){var r=e.chars,n=e.ipfs,t=e.type,a=e.withPadding;return function(e,o){if("string"!==typeof e)throw new Error("Expected ".concat(t," string input"));if(n&&o&&!e.startsWith(n))throw new Error("Expected ipfs-compatible ".concat(t," to start with '").concat(n,"'"));for(var c=o?1:0,i=e.length;c<i;c++)if(r.includes(e[c]));else{if(!a||"="!==e[c])throw new Error("Invalid ".concat(t,' character "').concat(e[c],'" (0x').concat(e.charCodeAt(c).toString(16),") at index ").concat(c));if(c===i-1);else if("="!==e[c+1])throw new Error("Invalid ".concat(t,' padding sequence "').concat(e[c]).concat(e[c+1],'" at index ').concat(c))}return!0}}var ee={chars:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",coder:Y,ipfs:"z",type:"base58"},re=$(ee),ne=_(ee,re),te=X(ee),ae=n(136),oe=n(9388);function ce(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("Wrong positive integer: ".concat(e))}function ie(e){if(!((r=e)instanceof Uint8Array||null!=r&&"object"===typeof r&&"Uint8Array"===r.constructor.name))throw new Error("Expected Uint8Array");for(var r,n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];if(t.length>0&&!t.includes(e.length))throw new Error("Expected Uint8Array of length ".concat(t,", not of length=").concat(e.length))}function fe(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.destroyed)throw new Error("Hash instance has been destroyed");if(r&&e.finished)throw new Error("Hash#digest() has already been called")}function ue(e,r){ie(e);var n=r.outputLen;if(e.length<n)throw new Error("digestInto() expects output buffer of length at least ".concat(n))}var de=function(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))};function se(e){return e instanceof Uint8Array||null!=e&&"object"===typeof e&&"Uint8Array"===e.constructor.name}if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function he(e){if("string"===typeof e&&(e=function(e){if("string"!==typeof e)throw new Error("utf8ToBytes expected string, got ".concat(typeof e));return new Uint8Array((new TextEncoder).encode(e))}(e)),!se(e))throw new Error("expected Uint8Array, got ".concat(typeof e));return e}var le=function(){function e(){(0,U.Z)(this,e)}return(0,B.Z)(e,[{key:"clone",value:function(){return this._cloneInto()}}]),e}();function be(e){var r=function(r,n){return e(n).update(he(r)).digest()},n=e({});return r.outputLen=n.outputLen,r.blockLen=n.blockLen,r.create=function(r){return e(r)},r}var pe=new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3]),ve=function(e){(0,ae.Z)(n,e);var r=(0,oe.Z)(n);function n(e,t){var a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,f=arguments.length>5?arguments[5]:void 0;if((0,U.Z)(this,n),(a=r.call(this)).blockLen=e,a.outputLen=t,a.length=0,a.pos=0,a.finished=!1,a.destroyed=!1,ce(e),ce(t),ce(c),t<0||t>c)throw new Error("outputLen bigger than keyLen");if(void 0!==o.key&&(o.key.length<1||o.key.length>c))throw new Error("key must be up 1..".concat(c," byte long or undefined"));if(void 0!==o.salt&&o.salt.length!==i)throw new Error("salt must be ".concat(i," byte long or undefined"));if(void 0!==o.personalization&&o.personalization.length!==f)throw new Error("personalization must be ".concat(f," byte long or undefined"));return a.buffer32=de(a.buffer=new Uint8Array(e)),a}return(0,B.Z)(n,[{key:"update",value:function(e){fe(this);for(var r=this.blockLen,n=this.buffer,t=this.buffer32,a=(e=he(e)).length,o=e.byteOffset,c=e.buffer,i=0;i<a;){this.pos===r&&(this.compress(t,0,!1),this.pos=0);var f=Math.min(r-this.pos,a-i),u=o+i;if(f!==r||u%4||!(i+f<a))n.set(e.subarray(i,i+f),this.pos),this.pos+=f,this.length+=f,i+=f;else for(var d=new Uint32Array(c,u,Math.floor((a-i)/4)),s=0;i+r<a;s+=t.length,i+=r)this.length+=r,this.compress(d,s,!1)}return this}},{key:"digestInto",value:function(e){fe(this),ue(e,this);var r=this.pos,n=this.buffer32;this.finished=!0,this.buffer.subarray(r).fill(0),this.compress(n,0,!0);var t=de(e);this.get().forEach((function(e,r){return t[r]=e}))}},{key:"digest",value:function(){var e=this.buffer,r=this.outputLen;this.digestInto(e);var n=e.slice(0,r);return this.destroy(),n}},{key:"_cloneInto",value:function(e){var r,n=this.buffer,a=this.length,o=this.finished,c=this.destroyed,i=this.outputLen,f=this.pos;return e||(e=new this.constructor({dkLen:i})),(r=e).set.apply(r,(0,t.Z)(this.get())),e.length=a,e.finished=o,e.destroyed=c,e.outputLen=i,e.buffer.set(n),e.pos=f,e}}]),n}(le),we=BigInt(Math.pow(2,32)-1),ge=BigInt(32);function ye(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?{h:Number(e&we),l:Number(e>>ge&we)}:{h:0|Number(e>>ge&we),l:0|Number(e&we)}}var xe={fromBig:ye,split:function(e){for(var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Uint32Array(e.length),t=new Uint32Array(e.length),a=0;a<e.length;a++){var o=ye(e[a],r),c=[o.h,o.l];n[a]=c[0],t[a]=c[1]}return[n,t]},toBig:function(e,r){return BigInt(e>>>0)<<ge|BigInt(r>>>0)},shrSH:function(e,r,n){return e>>>n},shrSL:function(e,r,n){return e<<32-n|r>>>n},rotrSH:function(e,r,n){return e>>>n|r<<32-n},rotrSL:function(e,r,n){return e<<32-n|r>>>n},rotrBH:function(e,r,n){return e<<64-n|r>>>n-32},rotrBL:function(e,r,n){return e>>>n-32|r<<64-n},rotr32H:function(e,r){return r},rotr32L:function(e,r){return e},rotlSH:function(e,r,n){return e<<n|r>>>32-n},rotlSL:function(e,r,n){return r<<n|e>>>32-n},rotlBH:function(e,r,n){return r<<n-32|e>>>64-n},rotlBL:function(e,r,n){return e<<n-32|r>>>64-n},add:function(e,r,n,t){var a=(r>>>0)+(t>>>0);return{h:e+n+(a/Math.pow(2,32)|0)|0,l:0|a}},add3L:function(e,r,n){return(e>>>0)+(r>>>0)+(n>>>0)},add3H:function(e,r,n,t){return r+n+t+(e/Math.pow(2,32)|0)|0},add4L:function(e,r,n,t){return(e>>>0)+(r>>>0)+(n>>>0)+(t>>>0)},add4H:function(e,r,n,t,a){return r+n+t+a+(e/Math.pow(2,32)|0)|0},add5H:function(e,r,n,t,a,o){return r+n+t+a+o+(e/Math.pow(2,32)|0)|0},add5L:function(e,r,n,t,a){return(e>>>0)+(r>>>0)+(n>>>0)+(t>>>0)+(a>>>0)}},me=xe,Ee=new Uint32Array([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),ke=new Uint32Array(32);function Ae(e,r,n,t,a,o){var c=a[o],i=a[o+1],f=ke[2*e],u=ke[2*e+1],d=ke[2*r],s=ke[2*r+1],h=ke[2*n],l=ke[2*n+1],b=ke[2*t],p=ke[2*t+1],v=me.add3L(f,d,c),w={Dh:p^(u=me.add3H(v,u,s,i)),Dl:b^(f=0|v)};p=w.Dh,b=w.Dl;var g={Dh:me.rotr32H(p,b),Dl:me.rotr32L(p,b)};p=g.Dh,b=g.Dl;var y=me.add(l,h,p,b),x={Bh:s^(l=y.h),Bl:d^(h=y.l)};s=x.Bh,d=x.Bl;var m={Bh:me.rotrSH(s,d,24),Bl:me.rotrSL(s,d,24)};s=m.Bh,d=m.Bl,ke[2*e]=f,ke[2*e+1]=u,ke[2*r]=d,ke[2*r+1]=s,ke[2*n]=h,ke[2*n+1]=l,ke[2*t]=b,ke[2*t+1]=p}function Le(e,r,n,t,a,o){var c=a[o],i=a[o+1],f=ke[2*e],u=ke[2*e+1],d=ke[2*r],s=ke[2*r+1],h=ke[2*n],l=ke[2*n+1],b=ke[2*t],p=ke[2*t+1],v=me.add3L(f,d,c),w={Dh:p^(u=me.add3H(v,u,s,i)),Dl:b^(f=0|v)};p=w.Dh,b=w.Dl;var g={Dh:me.rotrSH(p,b,16),Dl:me.rotrSL(p,b,16)};p=g.Dh,b=g.Dl;var y=me.add(l,h,p,b),x={Bh:s^(l=y.h),Bl:d^(h=y.l)};s=x.Bh,d=x.Bl;var m={Bh:me.rotrBH(s,d,63),Bl:me.rotrBL(s,d,63)};s=m.Bh,d=m.Bl,ke[2*e]=f,ke[2*e+1]=u,ke[2*r]=d,ke[2*r+1]=s,ke[2*n]=h,ke[2*n+1]=l,ke[2*t]=b,ke[2*t+1]=p}var Ze=function(e){(0,ae.Z)(n,e);var r=(0,oe.Z)(n);function n(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,U.Z)(this,n),(e=r.call(this,128,void 0===t.dkLen?64:t.dkLen,t,64,16,16)).v0l=0|Ee[0],e.v0h=0|Ee[1],e.v1l=0|Ee[2],e.v1h=0|Ee[3],e.v2l=0|Ee[4],e.v2h=0|Ee[5],e.v3l=0|Ee[6],e.v3h=0|Ee[7],e.v4l=0|Ee[8],e.v4h=0|Ee[9],e.v5l=0|Ee[10],e.v5h=0|Ee[11],e.v6l=0|Ee[12],e.v6h=0|Ee[13],e.v7l=0|Ee[14],e.v7h=0|Ee[15];var a=t.key?t.key.length:0;if(e.v0l^=e.outputLen|a<<8|65536|1<<24,t.salt){var o=de(he(t.salt));e.v4l^=o[0],e.v4h^=o[1],e.v5l^=o[2],e.v5h^=o[3]}if(t.personalization){var c=de(he(t.personalization));e.v6l^=c[0],e.v6h^=c[1],e.v7l^=c[2],e.v7h^=c[3]}if(t.key){var i=new Uint8Array(e.blockLen);i.set(he(t.key)),e.update(i)}return e}return(0,B.Z)(n,[{key:"get",value:function(){return[this.v0l,this.v0h,this.v1l,this.v1h,this.v2l,this.v2h,this.v3l,this.v3h,this.v4l,this.v4h,this.v5l,this.v5h,this.v6l,this.v6h,this.v7l,this.v7h]}},{key:"set",value:function(e,r,n,t,a,o,c,i,f,u,d,s,h,l,b,p){this.v0l=0|e,this.v0h=0|r,this.v1l=0|n,this.v1h=0|t,this.v2l=0|a,this.v2h=0|o,this.v3l=0|c,this.v3h=0|i,this.v4l=0|f,this.v4h=0|u,this.v5l=0|d,this.v5h=0|s,this.v6l=0|h,this.v6h=0|l,this.v7l=0|b,this.v7h=0|p}},{key:"compress",value:function(e,r,n){this.get().forEach((function(e,r){return ke[r]=e})),ke.set(Ee,16);var t=me.fromBig(BigInt(this.length)),a=t.h,o=t.l;ke[24]=Ee[8]^o,ke[25]=Ee[9]^a,n&&(ke[28]=~ke[28],ke[29]=~ke[29]);for(var c=0,i=pe,f=0;f<12;f++)Ae(0,4,8,12,e,r+2*i[c++]),Le(0,4,8,12,e,r+2*i[c++]),Ae(1,5,9,13,e,r+2*i[c++]),Le(1,5,9,13,e,r+2*i[c++]),Ae(2,6,10,14,e,r+2*i[c++]),Le(2,6,10,14,e,r+2*i[c++]),Ae(3,7,11,15,e,r+2*i[c++]),Le(3,7,11,15,e,r+2*i[c++]),Ae(0,5,10,15,e,r+2*i[c++]),Le(0,5,10,15,e,r+2*i[c++]),Ae(1,6,11,12,e,r+2*i[c++]),Le(1,6,11,12,e,r+2*i[c++]),Ae(2,7,8,13,e,r+2*i[c++]),Le(2,7,8,13,e,r+2*i[c++]),Ae(3,4,9,14,e,r+2*i[c++]),Le(3,4,9,14,e,r+2*i[c++]);this.v0l^=ke[0]^ke[16],this.v0h^=ke[1]^ke[17],this.v1l^=ke[2]^ke[18],this.v1h^=ke[3]^ke[19],this.v2l^=ke[4]^ke[20],this.v2h^=ke[5]^ke[21],this.v3l^=ke[6]^ke[22],this.v3h^=ke[7]^ke[23],this.v4l^=ke[8]^ke[24],this.v4h^=ke[9]^ke[25],this.v5l^=ke[10]^ke[26],this.v5h^=ke[11]^ke[27],this.v6l^=ke[12]^ke[28],this.v6h^=ke[13]^ke[29],this.v7l^=ke[14]^ke[30],this.v7h^=ke[15]^ke[31],ke.fill(0)}},{key:"destroy",value:function(){this.destroyed=!0,this.buffer32.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}]),n}(ve),Ue=be((function(e){return new Ze(e)})),Be=n(5768);function je(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,n=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,a=Math.ceil(r/8),o=S(e);return!E||!t&&(0,Be.DK)()?(0,Be.Rg)(o,S(n),a):Ue(o,n?{dkLen:a,key:n}:{dkLen:a})}var Ie=D("SS58PRE");function De(e){return je(M(Ie,e),512)}var Se=n(2925),He={acala:787,ajuna:354,"aleph-node":643,astar:810,bifrost:788,"bifrost-kusama":788,centrifuge:747,composable:354,darwinia:354,"dock-mainnet":594,edgeware:523,enjin:1155,equilibrium:99999997,genshiro:99999996,hydradx:354,"interlay-parachain":354,karura:686,khala:434,kusama:434,matrixchain:1155,nodle:1003,origintrail:354,parallel:354,pendulum:354,phala:354,picasso:434,polkadex:799,polkadot:354,polymesh:595,quartz:631,sora:617,stafi:907,statemine:434,statemint:354,ternoa:995,unique:661,vtb:694,xxnetwork:1955,zeitgeist:354},Me={acala:["0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c"],ajuna:["0xe358eb1d11b31255a286c12e44fe6780b7edb171d657905a97e39f71d9c6c3ee"],"aleph-node":["0x70255b4d28de0fc4e1a193d7e175ad1ccef431598211c55538f1018651a0344e"],astar:["0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6"],basilisk:["0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755"],bifrost:["0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b"],"bifrost-kusama":["0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed"],bittensor:["0x2f0555cc76fc2840a25a6ea3b9637146806f1f44b090c175ffde2a7e5ab36c03"],centrifuge:["0xb3db41421702df9a7fcac62b53ffeac85f7853cc4e689e0b93aeb3db18c09d82","0x67dddf2673b69e5f875f6f25277495834398eafd67f492e09f3f3345e003d1b5"],cere:["0x81443836a9a24caaa23f1241897d1235717535711d1d3fe24eae4fdc942c092c"],composable:["0xdaab8df776eb52ec604a5df5d388bb62a050a0aaec4556a64265b9d42755552d"],darwinia:["0xe71578b37a7c799b0ab4ee87ffa6f059a6b98f71f06fb8c84a8d88013a548ad6"],"dock-mainnet":["0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae","0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9"],edgeware:["0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b"],enjin:["0xd8761d3c88f26dc12875c00d3165f7d67243d56fc85b4cf19937601a7916e5a9"],equilibrium:["0x6f1a800de3daff7f5e037ddf66ab22ce03ab91874debeddb1086f5f7dbd48925"],genshiro:["0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243"],hydradx:["0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d","0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc","0x10af6e84234477d84dc572bac0789813b254aa490767ed06fb9591191d1073f9","0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047","0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2"],"interlay-parachain":["0xbf88efe70e9e0e916416e8bed61f2b45717f517d7f3523e33c7b001e5ffcbc72"],karura:["0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b"],khala:["0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d"],kulupu:["0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba"],kusama:["0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe","0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636","0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf"],matrixchain:["0x3af4ff48ec76d2efc8476730f423ac07e25ad48f5f4c9dc39c778b164d808615"],nodle:["0x97da7ede98d7bad4e36b4d734b6055425a3be036da2a332ea5a7037656427a21"],origintrail:["0xe7e0962324a3b86c83404dbea483f25fb5dab4c224791c81b756cfc948006174"],p3d:["0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66"],parallel:["0xe61a41c53f5dcd0beb09df93b34402aada44cb05117b71059cce40a2723a4e97"],pendulum:["0x5d3c298622d5634ed019bf61ea4b71655030015bde9beb0d6a24743714462c86"],phala:["0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736"],picasso:["0x6811a339673c9daa897944dcdac99c6e2939cc88245ed21951a0a3c9a2be75bc","0xe8e7f0f4c4f5a00720b4821dbfddefea7490bcf0b19009961cc46957984e2c1c"],polkadex:["0x3920bcb4960a1eef5580cd5367ff3f430eef052774f78468852f7b9cb39f8a3c"],polkadot:["0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3"],polymesh:["0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063"],quartz:["0xcd4d732201ebe5d6b014edda071c4203e16867305332301dc8d092044b28e554"],rococo:["0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e","0xaaf2cd1b74b5f726895921259421b534124726263982522174147046b8827897","0x037f5f3c8e67b314062025fc886fcd6238ea25a4a9b45dce8d246815c9ebe770","0xc196f81260cf1686172b47a79cf002120735d7cb0eb1474e8adce56618456fff","0xf6e9983c37baf68846fedafe21e56718790e39fb1c582abc408b81bc7b208f9a","0x5fce687da39305dfe682b117f0820b319348e8bb37eb16cf34acbf6a202de9d9","0xe7c3d5edde7db964317cd9b51a3a059d7cd99f81bdbce14990047354334c9779","0x1611e1dbf0405379b861e2e27daa90f480b2e6d3682414a80835a52e8cb8a215","0x343442f12fa715489a8714e79a7b264ea88c0d5b8c66b684a7788a516032f6b9","0x78bcd530c6b3a068bc17473cf5d2aff9c287102bed9af3ae3c41c33b9d6c6147","0x47381ee0697153d64404fc578392c8fd5cba9073391908f46c888498415647bd","0x19c0e4fa8ab75f5ac7865e0b8f74ff91eb9a100d336f423cd013a8befba40299"],sora:["0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5"],stafi:["0x290a4149f09ea0e402c74c1c7e96ae4239588577fe78932f94f5404c68243d80"],statemine:["0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a"],statemint:["0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f"],subsocial:["0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8"],ternoa:["0x6859c81ca95ef624c9dfe4dc6e3381c33e5d6509e35e147092bfbc780f777c4e"],unique:["0x84322d9cddbf35088f1e54e9a85c967a41a56a4f43445768125e61af166c7d31"],vtb:["0x286bc8414c7000ce1d6ee6a834e29a54c1784814b76243eb77ed0b2c5573c60f","0x7483b89572fb2bd687c7b9a93b242d0b237f9aba463aba07ec24503931038aaa"],westend:["0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e"],xxnetwork:["0x50dd5d206917bf10502c68fb4d18a59fc8aa31586f4e8856b493e43544aa82aa"],zeitgeist:["0x1bf2a2ecb4a868de66ea8610f2ce7c8c43706561b6476031315f6640fe38e060"]},Ne={centrifuge:"polkadot",kusama:"polkadot",polkadot:"polkadot",sora:"polkadot",statemine:"polkadot",statemint:"polkadot",westmint:"polkadot"},Re={"":!0,"cess-testnet":!0,"dock-testnet":!0,jupiter:!0,"mathchain-testnet":!0,p3dt:!0,subspace_testnet:!0,"zero-alphaville":!0},Pe=[0,2,42],Fe=["testnet"];var Ce=Se.Z.map((function(e){var r,n,t=e.network||"",a=t.replace(/_/g,"-").split("-"),o=e;return o.slip44=He[t],o.hasLedgerSupport=!!o.slip44,o.genesisHash=Me[t]||[],o.icon=Ne[t]||"substrate",o.isTestnet=!!Re[t]||Fe.includes(a[a.length-1]),o.isIgnored=o.isTestnet||!(e.standardAccount&&null!==(r=e.decimals)&&void 0!==r&&r.length&&null!==(n=e.symbols)&&void 0!==n&&n.length)&&42!==e.prefix,o})).filter((function(e){return!e.isIgnored&&!!e.network})).sort((function(e,r){var n=Pe.includes(e.prefix);return n===Pe.includes(r.prefix)?n?0:e.displayName.localeCompare(r.displayName):n?-1:1})),ze=(Ce.filter((function(e){var r=e.genesisHash,n=e.prefix;return!!r.length||42===n})),{allowedDecodedLengths:[1,2,4,8,32,33],allowedEncodedLengths:[3,4,6,10,35,36,37,38],allowedPrefix:Ce.map((function(e){return e.prefix})),prefix:42});function Te(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;if(!e)throw new Error("Invalid empty address passed");if(Z(e)||L(e))return S(e);try{var t=ne(e);if(!ze.allowedEncodedLengths.includes(t.length))throw new Error("Invalid decoded address length");var a=function(e){var r=64&e[0]?2:1,n=1===r?e[0]:(63&e[0])<<2|e[1]>>6|(63&e[1])<<8,t=[34+r,35+r].includes(e.length),a=e.length-(t?2:1),o=De(e.subarray(0,a));return[0===(128&e[0])&&![46,47].includes(e[0])&&(t?e[e.length-2]===o[0]&&e[e.length-1]===o[1]:e[e.length-1]===o[0]),a,r,n]}(t),o=(0,c.Z)(a,4),i=o[0],f=o[1],u=o[2],d=o[3];if(!i&&!r)throw new Error("Invalid decoded address checksum");if(-1!==n&&n!==d)throw new Error("Expected ss58Format ".concat(n,", received ").concat(d));return t.slice(u,f)}catch(s){throw new Error("Decoding ".concat(e,": ").concat(s.message))}}function Oe(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ze.prefix,n=Te(e);if(r<0||r>16383||[46,47].includes(r))throw new Error("Out of range ss58Format specified");if(!ze.allowedDecodedLengths.includes(n.length))throw new Error("Expected a valid key to convert, with length ".concat(ze.allowedDecodedLengths.join(", ")));var t=M(r<64?[r]:[(252&r)>>2|64,r>>8|(3&r)<<6],n);return te(M(t,De(t).subarray(0,[32,33].includes(n.length)?2:1)))}var We={name:"@polkadot/extension-dapp",path:new URL("file:///home/runner/work/astral/astral/client/node_modules/@polkadot/extension-dapp/packageInfo.js").pathname.substring(0,new URL("file:///home/runner/work/astral/astral/client/node_modules/@polkadot/extension-dapp/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"0.46.6"},qe=S("\x19Ethereum Signed Message:\n"),Ve=S("<Bytes>"),Ke=S("</Bytes>"),Ge=Ve.length+Ke.length;function Je(e,r){return e.length>=Ge&&H(e.subarray(0,Ve.length),Ve)&&H(e.slice(-Ke.length),Ke)||r&&e.length>=qe.length&&H(e.subarray(0,qe.length),qe)}var Qe=function(e){var r=S(e);return Je(r,!1)?r.subarray(Ve.length,r.length-Ke.length):r},Ye=function(e){var r=S(e);return Je(r,!0)?r:N([Ve,r,Ke])},_e=window;_e.injectedWeb3=_e.injectedWeb3||{};var Xe=er(),$e=null;function er(){return 0!==Object.values(_e.injectedWeb3).filter((function(e){var r=e.connect,n=e.enable;return!(!r&&!n)})).length}function rr(e){throw new Error("".concat(e,": web3Enable(originName) needs to be called before ").concat(e))}function nr(e,r,n){return r.map((function(r){var t=r.address,a=r.genesisHash,o=r.name,c=r.type;return{address:42===t.length?t:Oe(Te(t),n),meta:{genesisHash:a,name:o,source:e},type:c}}))}function tr(e,r,n){return e.filter((function(e){return(!e.type||!n||n.includes(e.type))&&(!e.genesisHash||!r||e.genesisHash===r)}))}function ar(e){return Promise.all(Object.entries(_e.injectedWeb3).map((function(r){var n=(0,c.Z)(r,2),t=n[0],a=n[1],o=a.connect,f=a.enable,u=a.version;return Promise.resolve().then((function(){return o?o(e):f?f(e).then((function(e){return function(e){for(var r=0,n=arguments.length<=1?0:arguments.length-1;r<n;r++){var t=r+1<1||arguments.length<=r+1?void 0:arguments[r+1];if(t)if("function"===typeof t.entries){var a,o=(0,i.Z)(t.entries());try{for(o.s();!(a=o.n()).done;){var f=(0,c.Z)(a.value,2),u=f[0],d=f[1];e[u]=d}}catch(s){o.e(s)}finally{o.f()}}else Object.assign(e,t)}return e}({name:t,version:u||"unknown"},e)})):Promise.reject(new Error("No connect(..) or enable(...) hook found"))})).catch((function(e){var r=e.message;console.error("Error initializing ".concat(t,": ").concat(r))}))}))).then((function(e){return e.filter((function(e){return!!e}))}))}function or(e,r){return cr.apply(this,arguments)}function cr(){return(cr=(0,o.Z)((0,a.Z)().mark((function e(r,n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($e){e.next=2;break}return e.abrupt("return",rr(r));case 2:return e.next=4,$e;case 4:return t=e.sent,e.abrupt("return",t.filter((function(e){var r=e.name;return!n||n.includes(r)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ir(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e)throw new Error("You must pass a name for your app to the web3Enable function");var n,t=r.length?Promise.all(r.map((function(e){return e().catch((function(){return!1}))}))):Promise.resolve([!0]);return n=function(){return t.then((function(){return ar(e).then((function(e){return e.map((function(e){return e.accounts.subscribe||(e.accounts.subscribe=function(r){return e.accounts.get().then(r).catch(console.error),function(){}}),e}))})).catch((function(){return[]})).then((function(e){var r=e.map((function(e){var r=e.name,n=e.version;return"".concat(r,"/").concat(n)}));return Xe=er(),console.info("web3Enable: Enabled ".concat(e.length," extension").concat(1!==e.length?"s":"",": ").concat(r.join(", "))),e}))}))},$e=new Promise((function(e){"complete"===document.readyState?e(n()):window.addEventListener("load",(function(){return e(n())}))}))}function fr(){return ur.apply(this,arguments)}function ur(){return ur=(0,o.Z)((0,a.Z)().mark((function e(){var r,n,c,i,f,u,d,s=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(r=s.length>0&&void 0!==s[0]?s[0]:{}).accountType,c=r.extensions,i=r.genesisHash,f=r.ss58Format,u=[],e.next=4,or("web3Accounts",c);case 4:return d=e.sent,e.next=7,Promise.all(d.map(function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r){var t,o,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.accounts,o=r.name,e.prev=1,e.next=4,t.get();case 4:return c=e.sent,e.abrupt("return",nr(o,tr(c,i,n),f));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()));case 7:return e.sent.forEach((function(e){u.push.apply(u,(0,t.Z)(e))})),console.info("web3Accounts: Found ".concat(u.length," address").concat(1!==u.length?"es":"")),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)}))),ur.apply(this,arguments)}function dr(e){return sr.apply(this,arguments)}function sr(){return sr=(0,o.Z)((0,a.Z)().mark((function e(r){var n,o,i,f,u,s,h,l,b,p=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(n=p.length>1&&void 0!==p[1]?p[1]:{}).accountType,i=n.extensions,f=n.genesisHash,u=n.ss58Format,e.next=3,or("web3AccountsSubscribe",i);case 3:return s=e.sent,h={},l=function(){return r(Object.entries(h).reduce((function(e,r){var n=(0,c.Z)(r,2),a=n[0],i=n[1];return e.push.apply(e,(0,t.Z)(nr(a,tr(i,f,o),u))),e}),[]))},b=s.map((function(e){var r=e.accounts.subscribe,n=e.name;return r((function(e){h[n]=e;try{var r=l();r&&d(r)&&r.catch(console.error)}catch(t){console.error(t)}}))})),e.abrupt("return",(function(){b.forEach((function(e){e()}))}));case 8:case"end":return e.stop()}}),e)}))),sr.apply(this,arguments)}function hr(e){return lr.apply(this,arguments)}function lr(){return(lr=(0,o.Z)((0,a.Z)().mark((function e(r){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($e){e.next=2;break}return e.abrupt("return",rr("web3FromSource"));case 2:return e.next=4,$e;case 4:if(n=e.sent,t=r&&n.find((function(e){return e.name===r}))){e.next=8;break}throw new Error("web3FromSource: Unable to find an injected ".concat(r));case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function br(e){return pr.apply(this,arguments)}function pr(){return(pr=(0,o.Z)((0,a.Z)().mark((function e(r){var n,t,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($e){e.next=2;break}return e.abrupt("return",rr("web3FromAddress"));case 2:return e.next=4,fr();case 4:if(n=e.sent,r&&(o=Te(r),t=n.find((function(e){return H(Te(e.address),o)}))),t){e.next=8;break}throw new Error("web3FromAddress: Unable to find injected ".concat(r));case 8:return e.abrupt("return",hr(t.meta.source));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function vr(e){return wr.apply(this,arguments)}function wr(){return(wr=(0,o.Z)((0,a.Z)().mark((function e(r){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,hr(r);case 2:if(n=e.sent,t=n.provider){e.next=7;break}return console.warn("Extension ".concat(r," does not expose any provider")),e.abrupt("return",null);case 7:return e.abrupt("return",t.listProviders());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function gr(e,r){return yr.apply(this,arguments)}function yr(){return(yr=(0,o.Z)((0,a.Z)().mark((function e(r,n){var t,o,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,hr(r);case 2:if(t=e.sent,o=t.provider){e.next=6;break}throw new Error("Extension ".concat(r," does not expose any provider"));case 6:return e.next=8,o.startProvider(n);case 8:return c=e.sent,e.abrupt("return",{meta:c,provider:o});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=70.d2853615.chunk.js.map