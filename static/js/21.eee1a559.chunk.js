(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[21,7],{105:function(e,t,r){"use strict";var n=r(2),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};var o=function(e){var t=e.animate,r=e.backgroundColor,o=e.backgroundOpacity,i=e.baseUrl,c=e.children,l=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,f=e.uniqueKey,d=e.interval,p=e.rtl,b=e.speed,O=e.style,j=e.title,h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),m=f||Math.random().toString(36).substring(6),v=m+"-diff",y=m+"-animated-diff",g=m+"-aria",x=p?{transform:"scaleX(-1)"}:null,w="0; "+d+"; 1",k=b+"s";return Object(n.createElement)("svg",a({"aria-labelledby":g,role:"img",style:a(a({},O),x)},h),j?Object(n.createElement)("title",{id:g},j):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+i+"#"+v+")",style:{fill:"url("+i+"#"+y+")"}}),Object(n.createElement)("defs",null,Object(n.createElement)("clipPath",{id:v},c),Object(n.createElement)("linearGradient",{id:y},Object(n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:o},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:w,dur:k,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:s},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:w,dur:k,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:o},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:w,dur:k,repeatCount:"indefinite"})))))};o.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var i=function(e){return e.children?Object(n.createElement)(o,a({},e)):Object(n.createElement)(c,a({},e))},c=function(e){return Object(n.createElement)(i,a({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=i},115:function(e,t,r){"use strict";r.r(t);var n=r(10),a=r(2),o=r.n(a),i=r(155),c=r(23),l=r.n(c);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=Object(a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=u(e,["color","size"]);return o.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),o.a.createElement("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),o.a.createElement("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}))}));f.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},f.displayName="Database";var d=f;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var O=Object(a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=b(e,["color","size"]);return o.a.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),o.a.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));O.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},O.displayName="Send";var j=O,h=r(156),m=r(157);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=Object(a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=y(e,["color","size"]);return o.a.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));g.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},g.displayName="Mail";var x=g,w=r(288),k=r(19);function E(){var e=Object(w.a)().t;return Object(k.jsxs)("footer",{children:[Object(k.jsx)("div",{className:"link",children:Object(k.jsx)("a",{href:"https://github.com/covid19india",target:"_blank",rel:"noopener noreferrer",children:"covid19india"})}),Object(k.jsx)("h5",{children:e("We stand with everyone fighting on the frontlines")}),Object(k.jsxs)("div",{className:"links",children:[Object(k.jsx)("a",{href:"https://github.com/covid19india/covid19india-react",className:"github",target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)(i.a,{})}),Object(k.jsx)("a",{className:"api",href:n.a,target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)(d,{})}),Object(k.jsx)("a",{href:"https://t.me/covid19indiaorg",className:"telegram",target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)(j,{})}),Object(k.jsx)("a",{href:"https://twitter.com/covid19indiaorg",target:"_blank",rel:"noopener noreferrer",className:"twitter",children:Object(k.jsx)(h.a,{})}),Object(k.jsx)("a",{href:"https://instagram.com/covid19indiaorg",target:"_blank",rel:"noopener noreferrer",className:"instagram",children:Object(k.jsx)(m.a,{})}),Object(k.jsx)("a",{href:"mailto:hello@covid19india.org",className:"mail",target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)(x,{})})]})]})}t.default=Object(a.memo)(E)},155:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(23),i=r.n(o);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,s=l(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="GitHub",t.a=s},156:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(23),i=r.n(o);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,s=l(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Twitter",t.a=s},157:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(23),i=r.n(o);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,s=l(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),a.a.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),a.a.createElement("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Instagram",t.a=s},285:function(e,t,r){"use strict";r.r(t);var n=r(98),a=r(101),o=r(47),i=r(115),c=r(24),l=r(133),s=r(93),u=r.n(s),f=r(2),d=r.n(f),p=r(105),b=r(155),O=r(23),j=r.n(O);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var v=Object(f.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,i=m(e,["color","size"]);return d.a.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),d.a.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),d.a.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),d.a.createElement("circle",{cx:"4",cy:"4",r:"2"}))}));v.propTypes={color:j.a.string,size:j.a.oneOfType([j.a.string,j.a.number])},v.displayName="Linkedin";var y=v,g=r(156),x=r(157);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var E=Object(f.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,i=k(e,["color","size"]);return d.a.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),d.a.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),d.a.createElement("polyline",{points:"15 3 21 3 21 9"}),d.a.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))}));E.propTypes={color:j.a.string,size:j.a.oneOfType([j.a.string,j.a.number])},E.displayName="ExternalLink";var N=E,z=r(117),P=r(114),C=r(19),S="https://volunteers.covid19india.org";function T(e){var t=e.className,r=e.style,n=e.name,a=e.bio,i=e.link,c=e.image,s=e.socials,d=void 0===s?{}:s,O=Object(f.useState)(!1),j=Object(o.a)(O,2),h=j[0],m=j[1],v=Object(f.useMemo)((function(){return{github:Object(C.jsx)(b.a,{size:16}),linkedin:Object(C.jsx)(y,{size:16}),twitter:Object(C.jsx)(g.a,{size:16}),instagram:Object(C.jsx)(x.a,{size:16})}}),[]);return Object(C.jsxs)(l.animated.div,{className:u()("Member",t),style:r,children:[i&&Object(C.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer"}),!h&&Object(C.jsx)("div",{className:"image",children:Object(C.jsx)(p.a,{backgroundColor:"#888",foregroundColor:"#888",backgroundOpacity:.2,foregroundOpacity:.4,children:Object(C.jsx)("rect",{x:"0",y:"0",width:"256",height:"256"})})}),Object(C.jsx)("img",{className:"image",src:"".concat(S,"/images/").concat(c||"placeholder.jpg"),alt:n,onLoad:m.bind(this,!0),style:{display:h?"block":"none"}}),Object(C.jsxs)("div",{className:"details",children:[Object(C.jsx)("h2",{className:"name",children:n}),Object(C.jsx)("p",{className:"bio",children:a}),Object(C.jsx)("div",{className:"socials",children:Object.entries(v).map((function(e){var t=Object(o.a)(e,2),r=t[0],n=t[1];return d[r]&&Object(C.jsx)("a",{className:u()("icon",r),href:d[r],target:"_blank",rel:"noopener noreferrer",children:n},r)}))})]}),i&&Object(C.jsx)("div",{className:"link-external",children:Object(C.jsx)(N,{size:16})})]})}function L(){var e=Object(P.a)("".concat(S,"/data.json"),c.b,{suspense:!0,revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}).data,t=Object(f.useMemo)((function(){return[].concat(Object(a.a)(e||[]),[{}])}),[e]),r=Object(l.useTransition)(t,{keys:function(e){return(null===e||void 0===e?void 0:e.name)||"last"},sort:function(e,t){return 0===Object.keys(e).length?1:0===Object.keys(t).length?-1:Math.random()>.5?1:-1},delay:200,trail:200/t.length,from:{opacity:0,scale:.8},enter:{opacity:1,scale:1},leave:{opacity:0,scale:0}});return Object(f.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(z.a,{children:[Object(C.jsx)("title",{children:"Volunteers - covid19india.org"}),Object(C.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(C.jsxs)("div",{className:"Volunteers",children:[Object(C.jsx)("div",{className:"wrapper",children:Object(C.jsx)("div",{className:u()("description","fadeInUp"),style:{animationDelay:"0.1s"},children:"We would like to thank the hundreds of volunteers who, for the last 18 months, extended their time and effort towards collating and publishing COVID-19 data for India."})}),Object(C.jsx)("div",{className:"members",children:r((function(e,t){return t&&(Object.keys(t).length>0?Object(C.jsx)(T,Object(n.a)(Object(n.a)({},t),{},{style:e})):Object(C.jsxs)(l.animated.div,{className:"last",style:e,children:[Object(C.jsx)(T,{className:"first"}),Object(C.jsx)(T,{className:"second"}),Object(C.jsx)(T,{className:"third",bio:"And many more..."})]}))}))})]}),Object(C.jsx)(i.default,{})]})}t.default=Object(f.memo)(L)}}]);
//# sourceMappingURL=21.eee1a559.chunk.js.map