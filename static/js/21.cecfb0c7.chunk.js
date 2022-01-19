/*! For license information please see 21.cecfb0c7.chunk.js.LICENSE.txt */
(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[21,8],{101:function(e,t,r){"use strict";r.r(t);var n=r(10),a=r(2),o=r.n(a),i=r(118),c=r(23),s=r.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=Object(a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=u(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),o.a.createElement("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),o.a.createElement("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}))}));p.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},p.displayName="Database";var f=p;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=Object(a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=d(e,["color","size"]);return o.a.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));m.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},m.displayName="Mail";var h=m,g=r(19);function O(){return Object(g.jsxs)("footer",{children:[Object(g.jsx)("div",{className:"link",children:Object(g.jsx)("a",{href:"https://github.com/incovid19",target:"_blank",rel:"noopener noreferrer",children:"incovid19"})}),Object(g.jsxs)("div",{className:"links",children:[Object(g.jsx)("a",{href:"https://github.com/incovid19",className:"github",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)(i.a,{})}),Object(g.jsx)("a",{className:"api",href:n.a,target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)(f,{})}),Object(g.jsx)("a",{href:"mailto:contact@incovid19.org",className:"mail",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)(h,{})})]})]})}t.default=Object(a.memo)(O)},106:function(e,t,r){"use strict";var n=r(2),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var o=function(e){var t=e.animate,r=e.backgroundColor,o=e.backgroundOpacity,i=e.baseUrl,c=e.children,s=e.foregroundColor,l=e.foregroundOpacity,u=e.gradientRatio,p=e.uniqueKey,f=e.interval,b=e.rtl,d=e.speed,m=e.style,h=e.title,g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),O=p||Math.random().toString(36).substring(6),j=O+"-diff",y=O+"-animated-diff",v=O+"-aria",x=b?{transform:"scaleX(-1)"}:null,w="0; "+f+"; 1",k=d+"s";return Object(n.createElement)("svg",a({"aria-labelledby":v,role:"img",style:a(a({},m),x)},g),h?Object(n.createElement)("title",{id:v},h):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+i+"#"+j+")",style:{fill:"url("+i+"#"+y+")"}}),Object(n.createElement)("defs",null,Object(n.createElement)("clipPath",{id:j},c),Object(n.createElement)("linearGradient",{id:y},Object(n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:o},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:w,dur:k,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:l},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:w,dur:k,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:o},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:w,dur:k,repeatCount:"indefinite"})))))};o.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var i=function(e){return e.children?Object(n.createElement)(o,a({},e)):Object(n.createElement)(c,a({},e))},c=function(e){return Object(n.createElement)(i,a({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=i},118:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(23),i=r.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,l=s(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="GitHub",t.a=l},199:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(23),i=r.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,l=s(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),a.a.createElement("polyline",{points:"15 3 21 3 21 9"}),a.a.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="ExternalLink",t.a=l},287:function(e,t,r){"use strict";r.r(t);var n=r(99),a=r(47),o=r(101),i=r(117),c=r(92),s=r.n(c),l=r(2),u=r.n(l),p=r(106),f=r(118),b=r(23),d=r.n(b);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=Object(l.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,i=h(e,["color","size"]);return u.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),u.a.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),u.a.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),u.a.createElement("circle",{cx:"4",cy:"4",r:"2"}))}));g.propTypes={color:d.a.string,size:d.a.oneOfType([d.a.string,d.a.number])},g.displayName="Linkedin";var O=g;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var v=Object(l.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,i=y(e,["color","size"]);return u.a.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),u.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));v.propTypes={color:d.a.string,size:d.a.oneOfType([d.a.string,d.a.number])},v.displayName="Twitter";var x=v;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var E=Object(l.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,i=k(e,["color","size"]);return u.a.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),u.a.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),u.a.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),u.a.createElement("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}))}));E.propTypes={color:d.a.string,size:d.a.oneOfType([d.a.string,d.a.number])},E.displayName="Instagram";var S=E,N=r(199),z=r(111),C=r(19);function P(e){var t=e.className,r=e.style,n=e.name,o=e.bio,c=e.link,u=e.image,b=e.image2,d=e.socials,m=void 0===d?{}:d,h=Object(l.useState)(!1),g=Object(a.a)(h,2),j=g[0],y=g[1],v=Object(l.useMemo)((function(){return{github:Object(C.jsx)(f.a,{size:16}),linkedin:Object(C.jsx)(O,{size:16}),twitter:Object(C.jsx)(x,{size:16}),instagram:Object(C.jsx)(S,{size:16})}}),[]);return Object(C.jsxs)(i.animated.div,{className:s()("Member",t),style:r,children:[c&&Object(C.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer"}),!j&&Object(C.jsx)("div",{className:"image",children:Object(C.jsx)(p.a,{backgroundColor:"#888",foregroundColor:"#888",backgroundOpacity:.2,foregroundOpacity:.4,children:Object(C.jsx)("rect",{x:"0",y:"0",width:"256",height:"256"})})}),Object(C.jsx)("img",{className:"image",src:"".concat(u),alt:n,onLoad:y.bind(this,!0),style:{display:j?"block":"none"}}),b&&Object(C.jsx)("img",{className:"image",src:"https://raw.githubusercontent.com/akshayks3/images/main/cropped-Twitter-version-4-scaled-1-2048x2048.jpg",alt:n,onLoad:y.bind(this,!0),style:{display:j?"block":"none"}}),Object(C.jsxs)("div",{className:"details",children:[Object(C.jsx)("h2",{className:"name",children:n}),Object(C.jsx)("p",{className:"bio",children:o}),Object(C.jsx)("div",{className:"socials",children:Object.entries(v).map((function(e){var t=Object(a.a)(e,2),r=t[0],n=t[1];return m[r]&&Object(C.jsx)("a",{className:s()("icon",r),href:m[r],target:"_blank",rel:"noopener noreferrer",children:n},r)}))})]}),c&&Object(C.jsx)("div",{className:"link-external",children:Object(C.jsx)(N.a,{size:16})})]})}function I(){var e=[{bio:"Indian Institute of Technology Madras",image:"https://raw.githubusercontent.com/akshayks3/images/main/1200px-IIT_Madras_Logo.svg.png",name:"V Kamakoti"},{bio:"Indian Institute of Science",image:"https://raw.githubusercontent.com/akshayks3/images/main/IISc_Master_Seal_Black.jpg",image2:"https://raw.githubusercontent.com/akshayks3/images/main/cropped-Twitter-version-4-scaled-1-2048x2048.jpg",name:"Rajesh Sundaresan"},{bio:"Indian Statistical Institute, Bangalore Centre",image:"https://raw.githubusercontent.com/akshayks3/images/main/1200px-Indianstatisticalinstitutelogo.svg.png",name:"Siva Athreya"},{bio:"Indian Statistical Institute, Delhi Centre",image:"https://raw.githubusercontent.com/akshayks3/images/main/1200px-Indianstatisticalinstitutelogo.svg.png",name:"Deepayan Sarkar"},{bio:"Semantic Web India",image:"https://raw.githubusercontent.com/akshayks3/images/main/semantic_logo-removebg-preview.png",name:"Asha Subramanian and team"},{bio:"Chennai Mathematical Institute, MSc. Data Science Program",image:"https://raw.githubusercontent.com/akshayks3/images/main/cmi-header.png",name:"Student Volunteers"}],t=Object(i.useTransition)(e,{keys:function(e){return(null===e||void 0===e?void 0:e.name)||"last"},delay:200,trail:200/e.length,from:{opacity:0,scale:.8},enter:{opacity:1,scale:1},leave:{opacity:0,scale:0}});return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(z.a,{children:[Object(C.jsx)("title",{children:"Collaborators - incovid19.org"}),Object(C.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(C.jsxs)("div",{className:"Volunteers",children:[Object(C.jsx)("div",{className:"wrapper",children:Object(C.jsx)("div",{className:s()("collaborators","fadeInUp"),style:{animationDelay:"0.1s",fontSize:"2rem"},children:"Collaborators"})}),Object(C.jsx)("div",{className:"members",children:t((function(e,t){return t&&(Object.keys(t).length>0?Object(C.jsx)(P,Object(n.a)(Object(n.a)({},t),{},{style:e})):Object(C.jsxs)(i.animated.div,{className:"last",style:e,children:[Object(C.jsx)(P,{className:"first"}),Object(C.jsx)(P,{className:"second"}),Object(C.jsx)(P,{className:"third",bio:"And many more..."})]}))}))})]}),Object(C.jsx)(o.default,{})]})}t.default=Object(l.memo)(I)},92:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=21.cecfb0c7.chunk.js.map