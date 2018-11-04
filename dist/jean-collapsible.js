/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

!function(e,t){"function"==typeof define&&define.amd?define([],t):(e.Collapsible=e.Collapsible||{},e.Collapsible=t())}(this,function(){var e,t;return function(n){function r(e){for(var t=0,n=[];t<e.length;t++){var r=s.resolved[e[t]];r&&n.push(r)}return n}function i(){for(var e in s.unresolved){var t=s.unresolved[e],n=r(t.dependencies);o(e,t.factory,t.dependencies,n,!1)}}function o(e,t,n,r,i){if(r.length===n.length){var o=t.apply(t,r);s.resolved[e]=o||{}}else i&&(s.unresolved[e]={dependencies:n,factory:t})}var s={resolved:{},unresolved:{}};t=function(e,t,n){return s.resolved[e]?void console.warn("There is already a module with id <"+e+"> defined. Therefore this module will be ignored"):"string"==typeof e&&Array.isArray(t)&&"function"==typeof n?(0===t.length?o(e,n,t,[],!1):o(e,n,t,r(t),!0),void i()):void console.warn("Passed arguments for module are invalid")},t.amd={},e=function(e,t){e=Array.isArray(e)?e:[e];var n=r(e);if(1===n.length&&!t)return n[0];if(n.length!==e.length||!t)throw new Error("Not all modules are resolved");t.apply(t,n)}}(),t("node_modules/jean-amd/dist/jean-amd",function(){}),t("TypeCheck",[],function(){return{isString:function(e){return"string"==typeof e},isBoolean:function(e){return"boolean"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:function(e){return!this.isArray(e)&&null!==e&&"object"==typeof e},isEmptyObject:function(e){var t=!1;return this.isObject(e)&&0===Object.keys(e).length&&(t=!0),t},isFunction:function(e){return"function"==typeof e},isDefined:function(e){return void 0!==e&&null!=e},isArray:function(e){return Array.isArray(e)},isEmptyArray:function(e){return this.isArray(e)&&0===e.length},isArrayTypeOf:function(e,t){var n=!0;if(!this.isString(t))throw new TypeError("options.type is not a string");if(!Array.isArray(e))throw new TypeError("options.array is not an array");0===e.length&&(n=!1);for(var r=0,i=e.length;r<i;r++){if(typeof e[r]!==t){n=!1;break}}return n},areObjectsInstanceOf:function(e,t){if(!this.isArray(e))throw new TypeError("array is not an array");if(!this.isFunction(t))throw new TypeError("fn is not a function");var n,r,i=e.length,o=!0;for(n=0;n<i;n++)if(r=e[n],!this.isObject(r)||!this.isInstanceOf(r,t)){o=!1;break}return o},areObjectsInstancesOf:function(e,t){var n,r,i,o,s=e.length,a=t.length,l=!0;if(!this.isArray(e))throw new TypeError("objects is not an array");if(!this.isArray(t))throw new TypeError("constructors is not an array");if(!this.isArrayTypeOf(t,"function"))throw new TypeError("constructors is not an array of constructor functions");for(n=0;n<s;n++){for(i=e[n],o=!0,r=0;r<a&&this.isObject(i);r++)if(this.isInstanceOf(i,t[r])){o=!1;break}if(!0===o){l=!1;break}}return l},isInstanceOf:function(e,t){if(!this.isObject(e))throw new TypeError("child is not an object");if(!this.isFunction(t))throw new TypeError("parent is not a function");return e instanceof t},isEnumValue:function(e,t){if(!this.isDefined(e))return!1;if(!this.isString(e)&&!this.isNumber(e))throw new TypeError("value must be a String or a Number");if(!this.isObject(t))throw new TypeError("o is not an object");var n,r=Object.keys(t),i=r.length,o=!1;for(n=0;n<i;n++)if(t[r[n]]===e){o=!0;break}return o}}}),t("Failure",[],function(){return{throwError:function(e){throw new Error(e)},throwTypeError:function(e){throw new TypeError(e)}}}),t("DomUtil",["TypeCheck","Failure"],function(e,t){return{createElementFromMarkup:function(n){e.isString(n)||t.throwTypeError("html is not a string");var r=document.createElement("div");return r.innerHTML=n.trim(),r.firstChild},isInViewPort:function(n){e.isInstanceOf(n,HTMLElement)||t.throwTypeError("element is not an instance of HTMLElement");var r=n.getBoundingClientRect();return r.top+r.height>0&&r.top<window.innerHeight},getChildById:function(n,r){e.isInstanceOf(n,HTMLElement)||t.throwTypeError("element is no instance of HTMLElement"),e.isString(r)||t.throwTypeError("id is not a string");var i,o,s=n.children,a=s.length,l=null;for(i=0;i<a;i++)if(o=s[i],o.id===r)return o;for(i=0;i<a;i++)if(l=this.getChildById(s[i],r),e.isDefined(l))return l;return null},getChildByClass:function(n,r){e.isInstanceOf(n,HTMLElement)||t.throwTypeError("element is no instance of HTMLElement"),e.isString(r)||t.throwTypeError("className is not a string");var i,o,s=n.children,a=s.length,l=null;for(i=0;i<a;i++)if(o=s[i],o.classList.contains(r))return o;for(i=0;i<a;i++)if(l=this.getChildByClass(s[i],r),e.isDefined(l))return l;return null},getAncestorById:function(n,r){return e.isInstanceOf(n,HTMLElement)||t.throwTypeError("element is no instance of HTMLElement"),e.isString(r)||t.throwTypeError("id is not a string"),e.isDefined(n.parentElement)?n.parentElement.id===r?n.parentElement:this.getAncestorById(n.parentElement,r):null},getAncestorByClass:function(n,r){return e.isInstanceOf(n,HTMLElement)||t.throwTypeError("element is no instance of HTMLElement"),e.isString(r)||t.throwTypeError("className is not a string"),e.isDefined(n.parentElement)?n.parentElement.classList.contains(r)?n.parentElement:this.getAncestorByClass(n.parentElement,r):null}}}),t("DomElement",["TypeCheck","Failure","DomUtil"],function(e,t,n){var r=function(r){this.options=e.isDefined(r)?r:t.throwTypeError("options is undefined"),this.element=e.isString(r.html)?n.createElementFromMarkup(r.html):t.throwTypeError("options.html is not a string")};return r.prototype.attachToDom=function(){return this.element.style.display="block",!0},r.prototype.detachFromDom=function(){return this.element.style.display="none",!0},r}),t("Inheritance",["TypeCheck"],function(e){return{inheritConstructor:function(t,n,r){var i=!1,r=r||{};return e.isFunction(t)&&e.isObject(n)&&(Array.isArray(r)?t.apply(n,r):t.apply(n,[r]),i=!0),i},inheritPrototype:function(t,n){var r=!1;return e.isFunction(t)&&e.isFunction(n)&&(t.prototype=Object.create(n.prototype),t.prototype.constructor=t,r=!0),r}}}),t("Merge",["TypeCheck","Failure"],function(e,t){return function(n,r){e.isObject(n)&&e.isObject(r)||t.throwTypeError("defaultOptions or options is not an object");var i,o,s={},a=Object.keys(r),l=a.length,c=Object.keys(n),u=c.length;for(i=0;i<u;i++)o=c[i],s[o]=n[o];for(i=0;i<l;i++)o=a[i],s[o]=r[o];return s}}),t("text",["module"],function(t){"use strict";function n(e,t){return void 0===e||""===e?t:e}function r(e,t,r,i){if(t===i)return!0;if(e===r){if("http"===e)return n(t,"80")===n(i,"80");if("https"===e)return n(t,"443")===n(i,"443")}return!1}var i,o,s,a,l,c=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,p=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f="undefined"!=typeof location&&location.href,d=f&&location.protocol&&location.protocol.replace(/\:/,""),h=f&&location.hostname,y=f&&(location.port||void 0),m={},g=t.config&&t.config()||{};return i={version:"2.0.15",strip:function(e){if(e){e=e.replace(u,"");var t=e.match(p);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:g.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;t<3;t+=1){n=c[t];try{e=new ActiveXObject(n)}catch(e){}if(e){c=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,o=e.lastIndexOf("."),s=0===e.indexOf("./")||0===e.indexOf("../");return-1!==o&&(!s||o>1)?(t=e.substring(0,o),n=e.substring(o+1)):t=e,r=n||t,o=r.indexOf("!"),-1!==o&&(i="strip"===r.substring(o+1),r=r.substring(0,o),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,n,o){var s,a,l,c=i.xdRegExp.exec(e);return!c||(s=c[2],a=c[3],a=a.split(":"),l=a[1],a=a[0],(!s||s===t)&&(!a||a.toLowerCase()===n.toLowerCase())&&(!l&&!a||r(s,l,t,o)))},finishLoad:function(e,t,n,r){n=t?i.strip(n):n,g.isBuild&&(m[e]=n),r(n)},load:function(e,t,n,r){if(r&&r.isBuild&&!r.inlineText)return void n();g.isBuild=r&&r.isBuild;var o=i.parseName(e),s=o.moduleName+(o.ext?"."+o.ext:""),a=t.toUrl(s),l=g.useXhr||i.useXhr;if(0===a.indexOf("empty:"))return void n();!f||l(a,d,h,y)?i.get(a,function(t){i.finishLoad(e,o.strip,t,n)},function(e){n.error&&n.error(e)}):t([s],function(e){i.finishLoad(o.moduleName+"."+o.ext,o.strip,e,n)})},write:function(e,t,n,r){if(m.hasOwnProperty(t)){var o=i.jsEscape(m[t]);n.asModule(e+"!"+t,"define(function () { return '"+o+"';});\n")}},writeFile:function(e,t,n,r,o){var s=i.parseName(t),a=s.ext?"."+s.ext:"",l=s.moduleName+a,c=n.toUrl(s.moduleName+a)+".js";i.load(l,n,function(t){var n=function(e){return r(c,e)};n.asModule=function(e,t){return r.asModule(e,c,t)},i.write(e,l,n,o)},o)}},"node"===g.env||!g.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]?(o=e.nodeRequire("fs"),i.get=function(e,t,n){try{var r=o.readFileSync(e,"utf8");"\ufeff"===r[0]&&(r=r.substring(1)),t(r)}catch(e){n&&n(e)}}):"xhr"===g.env||!g.env&&i.createXhr()?i.get=function(e,t,n,r){var o,s=i.createXhr();if(s.open("GET",e,!0),r)for(o in r)r.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),r[o]);g.onXhr&&g.onXhr(s,e),s.onreadystatechange=function(r){var i,o;4===s.readyState&&(i=s.status||0,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,n&&n(o)):t(s.responseText),g.onXhrComplete&&g.onXhrComplete(s,e))},s.send(null)}:"rhino"===g.env||!g.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?i.get=function(e,t){var n,r,i=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i),"utf-8")),a="";try{for(n=new java.lang.StringBuffer,r=s.readLine(),r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),null!==r&&n.append(r);null!==(r=s.readLine());)n.append(o),n.append(r);a=String(n.toString())}finally{s.close()}t(a)}:("xpconnect"===g.env||!g.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(s=Components.classes,a=Components.interfaces,Components.utils.import("resource://gre/modules/FileUtils.jsm"),l="@mozilla.org/windows-registry-key;1"in s,i.get=function(e,t){var n,r,i,o={};l&&(e=e.replace(/\//g,"\\")),i=new FileUtils.File(e);try{n=s["@mozilla.org/network/file-input-stream;1"].createInstance(a.nsIFileInputStream),n.init(i,1,0,!1),r=s["@mozilla.org/intl/converter-input-stream;1"].createInstance(a.nsIConverterInputStream),r.init(n,"utf-8",n.available(),a.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),r.readString(n.available(),o),r.close(),n.close(),t(o.value)}catch(e){throw new Error((i&&i.path||"")+": "+e)}}),i}),t("text!collapsible-html",[],function(){return'<div class="jean-collapsible">\r\n    <div class="collapsible-header"></div>\r\n    <div class="collapsible-body"></div>\r\n    <div class="collapsible-toogle"></div>\r\n</div>'}),t("normalize",[],function(){function e(e,r,i){if(e.match(a)||e.match(s))return e;e=o(e);var l=i.match(s),c=r.match(s);return!c||l&&l[1]==c[1]&&l[2]==c[2]?n(t(e,r),i):t(e,r)}function t(e,t){if("./"==e.substr(0,2)&&(e=e.substr(2)),e.match(a)||e.match(s))return e;var n=t.split("/"),r=e.split("/");for(n.pop();curPart=r.shift();)".."==curPart?n.pop():n.push(curPart);return n.join("/")}function n(e,t){var n=t.split("/");for(n.pop(),t=n.join("/")+"/",i=0;t.substr(i,1)==e.substr(i,1);)i++;for(;"/"!=t.substr(i,1);)i--;t=t.substr(i+1),e=e.substr(i+1),n=t.split("/");var r=e.split("/");for(out="";n.shift();)out+="../";for(;curPart=r.shift();)out+=curPart+"/";return out.substr(0,out.length-1)}var r=/([^:])\/+/g,o=function(e){return e.replace(r,"$1/")},s=/[^\:\/]*:\/\/([^\/])*/,a=/^(\/|data:)/,l=function(t,n,r){n=o(n),r=o(r);for(var i,s,t,a=/@import\s*("([^"]*)"|'([^']*)')|url\s*\((?!#)\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/gi;i=a.exec(t);){s=i[3]||i[2]||i[5]||i[6]||i[4];var l;l=e(s,n,r);var c=i[5]||i[6]?1:0;t=t.substr(0,a.lastIndex-s.length-c-1)+l+t.substr(a.lastIndex-c-1),a.lastIndex=a.lastIndex+(l.length-s.length)}return t};return l.convertURIBase=e,l.absoluteURI=t,l.relativeURI=n,l}),t("css",[],function(){if("undefined"==typeof window)return{load:function(e,t,n){n()}};var e=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0,n=!1,r=!0;t[1]||t[7]?n=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]||t[8]||"WebkitAppearance"in document.documentElement.style?r=!1:t[4]&&(n=parseInt(t[4])<18);var i={};i.pluginBuilder="./css-builder";var o,s,a,l=function(){o=document.createElement("style"),e.appendChild(o),s=o.styleSheet||o.sheet},c=0,u=[],p=function(e){s.addImport(e),o.onload=function(){f()},31==++c&&(l(),c=0)},f=function(){a();var e=u.shift();if(!e)return void(a=null);a=e[1],p(e[0])},d=function(e,t){if(s&&s.addImport||l(),s&&s.addImport)a?u.push([e,t]):(p(e),a=t);else{o.textContent='@import "'+e+'";';var n=setInterval(function(){try{o.sheet.cssRules,clearInterval(n),t()}catch(e){}},10)}},h=function(t,n){var i=document.createElement("link");if(i.type="text/css",i.rel="stylesheet",r)i.onload=function(){i.onload=function(){},setTimeout(n,7)};else var o=setInterval(function(){for(var e=0;e<document.styleSheets.length;e++){if(document.styleSheets[e].href==i.href)return clearInterval(o),n()}},10);i.href=t,e.appendChild(i)};return i.normalize=function(e,t){return".css"==e.substr(e.length-4,4)&&(e=e.substr(0,e.length-4)),t(e)},i.load=function(e,t,r,i){(n?d:h)(t.toUrl(e+".css"),r)},i}),t("css!collapsible-css",[],function(){}),t("src/Collapsible",["DomElement","DomUtil","Inheritance","TypeCheck","Failure","Merge","text!collapsible-html","css!collapsible-css"],function(e,t,n,r,i,o,s){var a=function(i){n.inheritConstructor(e,this,o({collapsedArrow:"&#8744;",expandedArrow:"&#8743;",html:s,heading:r.isString(i.heading)?i.heading:"Collapsible",isCollapsed:!r.isBoolean(i.isCollapsed)||i.isCollapsed},r.isDefined(i)?i:{})),this.body=t.getChildByClass(this.element,"collapsible-body"),this.header=t.getChildByClass(this.element,"collapsible-header"),this.btn=t.getChildByClass(this.element,"collapsible-toogle"),this.element.addEventListener("click",this._onBtnClick.bind(this)),this._setState(),this.setHeading(this.options.heading)};return n.inheritPrototype(a,e),a.prototype.add=function(e,t){return r.isString(e)||i.throwTypeError("id is not a string"),t.setAttribute("data-jean-collapsible-id",e),this.body.appendChild(t),!0},a.prototype.remove=function(e){var n=t.getChildById(this.body,e),i=!1;return r.isDefined(n)&&(i=!0,n.remove()),i},a.prototype.setHeading=function(e){this.header.innerHTML=r.isString(e)?e:this.options.heading},a.prototype._setState=function(){var e=this.body,t=this.btn,n=this.options;n.isCollapsed?(e.style.display="none",t.innerHTML=n.collapsedArrow,e.classList.remove("border-top")):(e.style.display="block",t.innerHTML=n.expandedArrow,e.classList.add("border-top"))},a.prototype._onBtnClick=function(e){this.options.isCollapsed=!this.options.isCollapsed,this._setState(),event.stopPropagation(),event.preventDefault()},a}),function(e){var t=document,n="appendChild",r="styleSheet",i=t.createElement("style");i.type="text/css",t.getElementsByTagName("head")[0][n](i),i[r]?i[r].cssText=e:i[n](t.createTextNode(e))}(".jean-collapsible {\n  width: 100%;\n  background: #4A4949;\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.jean-collapsible .collapsible-header {\n  color: white;\n  text-align: left;\n  font-weight: bold;\n}\n.jean-collapsible .collapsible-body {\n  color: white;\n  transition: height 0.3s;\n}\n.jean-collapsible .border-top {\n  border-top: 1px solid white;\n}\n.jean-collapsible .collapsible-toogle {\n  font-size: 1em;\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  top: 5px;\n  right: 15px;\n}\n.jean-collapsible .collapsible-toogle:hover {\n  color: lightgreen;\n  cursor: pointer;\n}\n"),e("src/Collapsible")});