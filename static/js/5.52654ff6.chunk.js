/*! For license information please see 5.52654ff6.chunk.js.LICENSE.txt */
(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[5],{114:function(e,t,n){"use strict";var r=n(2),i=Object.prototype.hasOwnProperty;var o=new WeakMap,u=0;var c=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):o.has(e[n])?r=o.get(e[n]):(r=u,o.set(e[n],u++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),a=!0,f={isOnline:function(){return a},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){a=!0,e()}),!1),window.addEventListener("offline",(function(){return a=!1}),!1))}},s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},l=new c;var d="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),v=s({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,o;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((o=t.length)===n.length)for(;o--&&e(t[o],n[o]););return-1===o}if(!r||"object"===typeof t){for(r in o=0,t){if(i.call(t,r)&&++o&&!i.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===o}}return t!==t&&n!==n},isPaused:function(){return!1}},f),p=v,h="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),y=h?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},g=h?r.useEffect:r.useLayoutEffect,b=Object(r.createContext)({});b.displayName="SWRConfigContext";var w=b,m=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(t){o(t)}}function c(e){try{a(r.throw(e))}catch(t){o(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}a((r=r.apply(e,t||[])).next())}))},O=function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},j={},R={},E={},S={},T={},V={},x={},P=function(){var e=0;return function(){return++e}}();if(!h){var k=function(e){if(p.isDocumentVisible()&&p.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof p.registerOnFocus&&p.registerOnFocus((function(){return k(E)})),"function"===typeof p.registerOnReconnect&&p.registerOnReconnect((function(){return k(S)}))}var C=function(e,t){void 0===t&&(t=!0);var n=l.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var u=T[r];if(r&&u){for(var c=l.get(r),a=l.get(i),f=l.get(o),s=[],d=0;d<u.length;++d)s.push(u[d](t,c,a,f,d>0));return Promise.all(s).then((function(){return l.get(r)}))}return Promise.resolve(l.get(r))},D=function(e,t,n,r){var i=T[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},I=function(e,t,n){return void 0===n&&(n=!0),m(void 0,void 0,void 0,(function(){var r,i,o,u,c,a,f,s,d,v,p,h,y;return O(this,(function(g){switch(g.label){case 0:if(r=l.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,C(e,n)];if(V[i]=P()-1,x[i]=0,u=V[i],c=R[i],s=!1,t&&"function"===typeof t)try{t=t(l.get(i))}catch(b){t=void 0,f=b}if(!t||"function"!==typeof t.then)return[3,5];s=!0,g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t];case 2:return a=g.sent(),[3,4];case 3:return d=g.sent(),f=d,[3,4];case 4:return[3,6];case 5:a=t,g.label=6;case 6:if((v=function(){if(u!==V[i]||c!==R[i]){if(f)throw f;return!0}})())return[2,a];if("undefined"!==typeof a&&l.set(i,a),l.set(o,f),x[i]=P()-1,!s&&v())return[2,a];if(p=T[i]){for(h=[],y=0;y<p.length;++y)h.push(p[y](!!n,a,f,void 0,y>0));return[2,Promise.all(h).then((function(){if(f)throw f;return l.get(i)}))]}if(f)throw f;return[2,a]}}))}))};Object.defineProperty(w.Provider,"default",{value:p});w.Provider;var L=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=t[0],o=Object.assign({},p,Object(r.useContext)(w),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:o.fetcher,c=l.serializeKey(i),a=c[0],f=c[1],s=c[2],d=c[3],v=Object(r.useRef)(o);g((function(){v.current=o}));var b=function(){return o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount},k=function(){var e=l.get(a);return"undefined"===typeof e?o.initialData:e},C=function(){return!!l.get(d)||a&&b()},L=k(),z=l.get(s),A=C(),K=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),W=Object(r.useRef)({data:L,error:z,isValidating:A});Object(r.useDebugValue)(W.current.data);var F,M,H=Object(r.useState)({})[1],q=Object(r.useCallback)((function(e){var t=!1;for(var n in e)W.current[n]!==e[n]&&(W.current[n]=e[n],K.current[n]&&(t=!0));if(t){if(J.current||!N.current)return;H({})}}),[]),J=Object(r.useRef)(!1),G=Object(r.useRef)(a),N=Object(r.useRef)(!1),B=Object(r.useCallback)((function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];J.current||N.current&&a===G.current&&(t=v.current)[e].apply(t,n)}),[a]),Q=Object(r.useCallback)((function(e,t){return I(G.current,e,t)}),[]),U=function(e,t){return e[a]?e[a].push(t):e[a]=[t],function(){var n=e[a],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},X=Object(r.useCallback)((function(t){return void 0===t&&(t={}),m(e,void 0,void 0,(function(){var e,n,r,i,c,p,h,y,g,b;return O(this,(function(w){switch(w.label){case 0:if(!a||!u)return[2,!1];if(J.current)return[2,!1];if(v.current.isPaused())return[2,!1];e=t.retryCount,n=void 0===e?0:e,r=t.dedupe,i=void 0!==r&&r,c=!0,p="undefined"!==typeof j[a]&&i,w.label=1;case 1:return w.trys.push([1,6,,7]),q({isValidating:!0}),l.set(d,!0),p||D(a,W.current.data,W.current.error,!0),h=void 0,y=void 0,p?(y=R[a],[4,j[a]]):[3,3];case 2:return h=w.sent(),[3,5];case 3:return o.loadingTimeout&&!l.get(a)&&setTimeout((function(){c&&B("onLoadingSlow",a,o)}),o.loadingTimeout),j[a]=null!==f?u.apply(void 0,f):u(a),R[a]=y=P(),[4,j[a]];case 4:h=w.sent(),setTimeout((function(){delete j[a],delete R[a]}),o.dedupingInterval),B("onSuccess",h,a,o),w.label=5;case 5:return R[a]>y?[2,!1]:V[a]&&(y<=V[a]||y<=x[a]||0===x[a])?(q({isValidating:!1}),[2,!1]):(l.set(s,void 0),l.set(d,!1),g={isValidating:!1},"undefined"!==typeof W.current.error&&(g.error=void 0),o.compare(W.current.data,h)||(g.data=h),o.compare(l.get(a),h)||l.set(a,h),q(g),p||D(a,h,g.error,!1),[3,7]);case 6:return b=w.sent(),delete j[a],delete R[a],v.current.isPaused()?(q({isValidating:!1}),[2,!1]):(l.set(s,b),W.current.error!==b&&(q({isValidating:!1,error:b}),p||D(a,void 0,b,!1)),B("onError",b,a,o),o.shouldRetryOnError&&B("onErrorRetry",b,a,o,X,{retryCount:n+1,dedupe:!0}),[3,7]);case 7:return c=!1,[2,!0]}}))}))}),[a]);if(g((function(){if(a){J.current=!1;var e=N.current;N.current=!0;var t=W.current.data,n=k();G.current=a,o.compare(t,n)||q({data:n});var r=function(){return X({dedupe:!0})};(e||b())&&("undefined"===typeof n||h?r():y(r));var i=!1,u=U(E,(function(){!i&&v.current.revalidateOnFocus&&(i=!0,r(),setTimeout((function(){return i=!1}),v.current.focusThrottleInterval))})),c=U(S,(function(){v.current.revalidateOnReconnect&&r()})),f=U(T,(function(e,t,n,i,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var c={},a=!1;return"undefined"===typeof t||o.compare(W.current.data,t)||(c.data=t,a=!0),W.current.error!==n&&(c.error=n,a=!0),"undefined"!==typeof i&&W.current.isValidating!==i&&(c.isValidating=i,a=!0),a&&q(c),!!e&&(u?r():X())}));return function(){q=function(){return null},J.current=!0,u(),c(),f()}}}),[a,X]),g((function(){var t=null;return v.current.refreshInterval&&(t=setTimeout((function n(){return m(e,void 0,void 0,(function(){return O(this,(function(e){switch(e.label){case 0:return W.current.error||!v.current.refreshWhenHidden&&!v.current.isDocumentVisible()||!v.current.refreshWhenOffline&&!v.current.isOnline()?[3,2]:[4,X({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return v.current.refreshInterval&&t&&(t=setTimeout(n,v.current.refreshInterval)),[2]}}))}))}),v.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,X]),o.suspense){if(F=l.get(a),M=l.get(s),"undefined"===typeof F&&(F=L),"undefined"===typeof M&&(M=z),"undefined"===typeof F&&"undefined"===typeof M){if(j[a]||X(),j[a]&&"function"===typeof j[a].then)throw j[a];F=j[a]}if("undefined"===typeof F&&M)throw M}var Y=Object(r.useMemo)((function(){var e={revalidate:X,mutate:Q};return Object.defineProperties(e,{error:{get:function(){return K.current.error=!0,o.suspense?M:G.current===a?W.current.error:z},enumerable:!0},data:{get:function(){return K.current.data=!0,o.suspense?F:G.current===a?W.current.data:L},enumerable:!0},isValidating:{get:function(){return K.current.isValidating=!0,!!a&&W.current.isValidating},enumerable:!0}}),e}),[X,L,z,Q,a,o.suspense,M,F]);return Y};t.a=L},93:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var u=i.apply(null,r);u&&e.push(u)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=5.52654ff6.chunk.js.map