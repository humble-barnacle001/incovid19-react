(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[24],{114:function(t,e,n){"use strict";var a=n(47),i=n(2),c={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};e.a=function(t){var e=Object(i.useState)(!1),n=Object(a.a)(e,2),r=n[0],l=n[1];return Object(i.useEffect)((function(){t.current&&new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(l(!0),n.unobserve(t.current))}))}),c).observe(t.current)}),[t]),r}},145:function(t,e,n){"use strict";var a=n(2);e.a=function(t,e){var n=function(){var t=Object(a.useRef)(!0);return t.current?(t.current=!1,!0):t.current}();Object(a.useEffect)((function(){if(!n)return t()}),e)}},155:function(t,e,n){"use strict";var a=n(104),i=n(47),c=n(106),r=n(116),l=n(19);e.a=function(){var t=Object(r.a)(),e=Object(i.a)(t,2),n=e[0],o=e[1].width,s=window.innerWidth;o=o||(s>=769?528:s),s<769&&(o-=30);return Object(l.jsx)("div",{ref:n,className:"TableLoader",children:Object(l.jsx)(c.a,{viewBox:"0 0 ".concat(o," ").concat(900),height:900,width:o,speed:2,animate:!1,children:Object(a.a)(Array(20).keys()).map((function(t){return Object(l.jsx)("rect",{x:"0",y:45*t,rx:"3",ry:"3",width:o,height:40},t)}))})})}},198:function(t,e,n){"use strict";var a=n(2),i=n(93);e.a=function(t,e,n){if(!i.a)return[e,i.b,i.b];if(!t)throw new Error("useLocalStorage key may not be falsy");var c=n?n.raw?function(t){return t}:n.deserializer:JSON.parse,r=Object(a.useRef)((function(t){try{var a=n?n.raw?String:n.serializer:JSON.stringify,i=localStorage.getItem(t);return null!==i?c(i):(e&&localStorage.setItem(t,a(e)),e)}catch(l){return e}})),l=Object(a.useState)((function(){return r.current(t)})),o=l[0],s=l[1];Object(a.useLayoutEffect)((function(){return s(r.current(t))}),[t]);var d=Object(a.useCallback)((function(e){try{var a="function"===typeof e?e(o):e;if("undefined"===typeof a)return;var i=void 0;i=n?n.raw?"string"===typeof a?a:JSON.stringify(a):n.serializer?n.serializer(a):JSON.stringify(a):JSON.stringify(a),localStorage.setItem(t,i),s(c(i))}catch(l){}}),[t,s]),u=Object(a.useCallback)((function(){try{localStorage.removeItem(t),s(void 0)}catch(l){}}),[t,s]);return[o,d,u]}},285:function(t,e,n){"use strict";n.r(e);var a=n(47),i=n(155),c=n(10),r=n(2),l=n(19),o=function(t){var e=t.data,n=function(t,e){var n,a,i,r=60,l=35,o=35,s=50,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",n=new Date(t),a=n.toLocaleString("default",{month:"long"}),i=n.getDate();return"".concat(i<10?"0".concat(i):"".concat(i)).concat(e).concat(a)}(null!==(n=null===(a=t[0])||void 0===a?void 0:a.Date)&&void 0!==n?n:null===(i=t[1])||void 0===i?void 0:i.Date);d3.selectAll(e).selectAll("svg").remove(),d3.selectAll(e).selectAll("#date").remove(),d3.select(e).append("div").attr("id","date").attr("class","graphtext").html("".concat(d));var u=d3.select(e).append("svg").attr("viewBox","0 0 ".concat(800," ").concat(400)),b=800-l-s-3,v=400-r-o,j=d3.scale.linear().range([v,0]),O=d3.scale.linear().range([0,b]),h=d3.svg.axis().scale(O).ticks(6).tickFormat((function(t){var e=d3.formatPrefix(t);return e.scale(t)+e.symbol})).orient("bottom"),f=d3.svg.axis().scale(j).orient("right").ticks(6).tickFormat((function(t){var e=d3.formatPrefix(t);return e.scale(t)+e.symbol}));u.append("rect").attr("width",b+l+s).attr("height",v+r+o).attr("x",0).attr("y",0).attr("fill","none").attr("rx",4).attr("fill-opacity",1),u=u.append("g").attr("transform","translate("+l+","+r+")");var p=d3.select(e).append("div").attr("class","tooltip");var g=t;if(!g)throw new Error("d3.json error");O.domain([0,100]),j.domain([0,100]),u.append("g").attr("class","x axis").attr("transform","translate(0,"+v+")").call(h).append("text").style("fill","red").attr("transform","translate("+b/2+", 30)").attr("text-anchor","middle").text("Vaccine Dose 1 %"),u.append("g").attr("class","y axis").attr("transform","translate("+b+", 0)").call(f).append("text").attr("transform","rotate(-90)").attr("y",40).attr("x",0-v/2).attr("text-anchor","middle").style("fill","red").text("Vaccine Dose 2 %"),u.selectAll(".vac-sc-plot").data(g).enter().append("g").attr("class","vac-sc-plot").attr("x",(function(t){return O(t.Vaccine1)})).attr("y",(function(t){return j(t.Vaccine2)})).append("circle").attr("cx",(function(t){return O(t.Vaccine1)})).attr("cy",(function(t){return j(t.Vaccine2)})).attr("r",5).attr("class","circlegraph").attr("fill",(function(t){var e={AN:"rgb(128,0,0)",AP:"rgb(165,42,42)",AR:"rgb(220,20,60)",AS:"rgb(255,0,0)",BR:"rgb(134,134,20)",CH:"rgb(255,140,0)",CT:"rgb(255,165,0)",DL:"rgb(255,215,0)",DN:"rgb(184,134,11)",GA:"rgb(218,165,32)",GJ:"rgb(189,183,107)",HP:"rgb(240,230,140)",HR:"rgb(154,205,50)",JH:"rgb(85,107,47)",JK:"rgb(124,252,0)",KA:"rgb(152,251,152)",KL:"rgb(143,188,143)",LA:"rgb(47,79,79)",LD:"rgb(0,139,139)",MH:"rgb(0,255,255)",ML:"rgb(70,130,180)",MN:"rgb(0,191,255)",MP:"rgb(30,144,255)",MZ:"rgb(135,206,250)",NL:"rgb(25,25,112)",OR:"rgb(0,0,205)",PB:"rgb(138,43,226)",PY:"rgb(139,0,139)",RJ:"rgb(186,85,211)",SK:"rgba(238,130,238)",TG:"rgb(199,21,133)",TN:"rgb(139,69,19)",TR:"rgb(210,105,30)",TT:"rgb(255,228,181)",UP:"rgb(218,112,214)",UT:"rgb(128,128,128)",WB:"rgb(255,218,185)"}[t.state];return t.color=e,e})).on("mouseover",(function(t,n){p.style({display:"block","min-height":"100px",width:"200px",padding:"5px",opacity:1,"background-color":t.color});var a=parseInt(p.style("width")),i=parseInt(p.style("height"));".sc-plot-state"===e?p.style({top:d3.event.pageY-i-5+"px",left:d3.event.pageX-a+100+"px"}).html("<span><b>State: "+c.y[t.state]+"<br/>Vaccine Dose 1: "+t.Vaccine1+"% <br/>Vaccine Dose 2: "+t.Vaccine2+"%<br/>Total Vaccinations: "+t.Total):".sc-plot-total"===e&&p.style({top:d3.event.pageY-i-5+"px",left:d3.event.pageX-a+100+"px"}).html("<span><b>District: "+t.district+"<br/>State: "+c.y[t.state]+"<br/>Vaccine Dose 1: "+t.Vaccine1+"% <br/>Vaccine Dose 2: "+t.Vaccine2+"%<br/>Total Vaccinations: "+t.Total)})).on("mouseout",(function(t,e){p.style({display:"none"})}))};return Object(r.useEffect)((function(){var t=[],a=[];e&&(Object.keys(e).forEach((function(n){if(n){var i,c,r,l,o,s,d,u,b,v,j,O,h,f,p,g,m,x,y,T={};if((null===(i=e[n])||void 0===i||null===(c=i.meta)||void 0===c?void 0:c.population)&&(null===(r=e[n])||void 0===r||null===(l=r.total)||void 0===l?void 0:l.vaccinated1)&&(null===(o=e[n])||void 0===o||null===(s=o.total)||void 0===s?void 0:s.vaccinated2))T.state=n,T.district="",T.Vaccine1=((null===(d=e[n])||void 0===d||null===(u=d.total)||void 0===u?void 0:u.vaccinated1)/(null===(b=e[n])||void 0===b?void 0:b.meta.population)*100).toFixed(2),T.Vaccine2=((null===(v=e[n])||void 0===v||null===(j=v.total)||void 0===j?void 0:j.vaccinated2)/(null===(O=e[n])||void 0===O?void 0:O.meta.population)*100).toFixed(2),T.Total=(null===(h=e[n])||void 0===h||null===(f=h.total)||void 0===f?void 0:f.vaccinated1)+(null===(p=e[n])||void 0===p||null===(g=p.total)||void 0===g?void 0:g.vaccinated2),T.Date=null!==(m=null===(x=e[n])||void 0===x||null===(y=x.meta)||void 0===y?void 0:y.date)&&void 0!==m?m:"",T.Vaccine1>100&&(T.Vaccine1=100),T.Vaccine2>100&&(T.Vaccine2=100),T.Vaccine1&&T.Vaccine2&&T.Vaccine1<=100&&T.Vaccine2<=100&&a.push(T)}Object.keys(e[n].districts).forEach((function(a){var i,c,r,l,o,s,d,u,b,v,j,O,h,f,p,g,m,x,y,T,V,S,D,k,w,N,H,C,P,A,z,I,M,R,E,J,L={};(null===(i=e[n])||void 0===i||null===(c=i.districts)||void 0===c||null===(r=c[a])||void 0===r?void 0:r.meta.population)&&(null===(l=e[n])||void 0===l||null===(o=l.districts)||void 0===o||null===(s=o[a])||void 0===s||null===(d=s.total)||void 0===d?void 0:d.vaccinated1)&&(null===(u=e[n])||void 0===u||null===(b=u.districts)||void 0===b||null===(v=b[a])||void 0===v||null===(j=v.total)||void 0===j?void 0:j.vaccinated2)&&(L.state=n,L.district=a,L.Vaccine1=((null===(O=e[n])||void 0===O||null===(h=O.districts)||void 0===h||null===(f=h[a])||void 0===f||null===(p=f.total)||void 0===p?void 0:p.vaccinated1)/(null===(g=e[n])||void 0===g||null===(m=g.districts)||void 0===m||null===(x=m[a])||void 0===x?void 0:x.meta.population)*100).toFixed(2),L.Vaccine2=((null===(y=e[n])||void 0===y||null===(T=y.districts)||void 0===T||null===(V=T[a])||void 0===V||null===(S=V.total)||void 0===S?void 0:S.vaccinated2)/(null===(D=e[n])||void 0===D||null===(k=D.districts)||void 0===k||null===(w=k[a])||void 0===w?void 0:w.meta.population)*100).toFixed(2),L.Total=(null===(N=e[n])||void 0===N||null===(H=N.districts)||void 0===H||null===(C=H[a])||void 0===C||null===(P=C.total)||void 0===P?void 0:P.vaccinated1)+(null===(A=e[n])||void 0===A||null===(z=A.districts)||void 0===z||null===(I=z[a])||void 0===I||null===(M=I.total)||void 0===M?void 0:M.vaccinated2),L.Date=null!==(R=null===(E=e[n])||void 0===E||null===(J=E.meta)||void 0===J?void 0:J.date)&&void 0!==R?R:"",L.Vaccine1>100&&(L.Vaccine1=100),L.Vaccine2>100&&(L.Vaccine2=100),L.Vaccine1&&L.Vaccine2&&L.Vaccine1<=100&&L.Vaccine2<=100&&t.push(L))}))})),n(a,".sc-plot-state"),n(t,".sc-plot-total"))}),[e]),Object(l.jsxs)("div",{className:"Home homegraph",children:[Object(l.jsx)("div",{className:"home-left home-left--graphmargin",children:Object(l.jsxs)("div",{className:"scatterplot",children:[Object(l.jsx)("h1",{className:"text-center ",children:"Vaccination Coverage (States)"}),Object(l.jsx)("div",{className:"sc-plot sc-plot-state"})]})}),Object(l.jsx)("div",{className:"home-right home-right--graphmargin",children:Object(l.jsxs)("div",{className:"scatterplot",children:[Object(l.jsx)("h1",{className:"text-center ",children:"Vaccination Coverage (Districts)"}),Object(l.jsx)("div",{className:"sc-plot sc-plot-total"})]})})]})},s=n(114),d=n(99);function u(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var b=n(107),v=n(145),j=n(130),O=["data","isValidating","error"];var h=function(t,e,n){for(var i=Object(r.useState)(n),c=Object(a.a)(i,2),l=c[0],o=c[1],s=arguments.length,h=new Array(s>3?s-3:0),f=3;f<s;f++)h[f-3]=arguments[f];var p=j.a.apply(void 0,[t,e,l].concat(h)),g=p.data,m=p.isValidating,x=p.error,y=u(p,O);return Object(v.a)((function(){o(Object(b.a)(l,(function(t){t.initialData=g})))}),[g]),Object(d.a)(Object(d.a)({},y),{},{isValidating:m,error:x,data:g})},f=n(24),p=n(92),g=n.n(p),m=n(68),x=n(57),y=n(250),T=n(111),V=n(5),S=n(198),D=n(249),k=n(288),w=Object(r.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(3),n.e(29)]).then(n.bind(null,294))}))})),N=Object(r.lazy)((function(){return Object(f.l)((function(){return n.e(8).then(n.bind(null,101))}))})),H=Object(r.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(34)]).then(n.bind(null,157))}))})),C=Object(r.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(40)]).then(n.bind(null,158))}))})),P=Object(r.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(3),n.e(5)]).then(n.bind(null,228))}))})),A=Object(r.lazy)((function(){return Object(f.l)((function(){return n.e(44).then(n.bind(null,159))}))})),z=Object(r.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(1),n.e(4),n.e(32)]).then(n.bind(null,160))}))})),I=Object(r.lazy)((function(){return Object(f.l)((function(){return n.e(37).then(n.bind(null,284))}))})),M=Object(r.lazy)((function(){return Object(f.l)((function(){return n.e(9).then(n.bind(null,230))}))})),R=Object(r.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(3),n.e(15)]).then(n.bind(null,295))}))})),E=Object(r.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,175))}))}));e.default=function(){var t,e,n=Object(r.useState)({stateCode:"TT",districtName:null}),d=Object(a.a)(n,2),u=d[0],b=d[1],v=Object(S.a)("anchor",null),j=Object(a.a)(v,2),O=j[0],p=j[1],J=Object(S.a)("expandTable",!1),L=Object(a.a)(J,2),F=L[0],B=L[1],K=Object(D.a)("mapStatistic","active"),G=Object(a.a)(K,2),U=G[0],Y=G[1],W=Object(S.a)("mapView",c.r.DISTRICTS),X=Object(a.a)(W,2),Z=X[0],_=X[1],q=Object(r.useState)(""),Q=Object(a.a)(q,2),$=Q[0],tt=Q[1],et=Object(V.h)(),nt=h("".concat(c.e,"/timeseries.min.json"),f.b,{revalidateOnMount:!0,refreshInterval:c.b}).data,at=h("".concat(c.e,"/data").concat($?"-".concat($):"",".min.json"),f.b,{revalidateOnMount:!0,refreshInterval:c.b}).data,it=Object(r.useRef)(),ct=Object(s.a)(it),rt=Object(k.a)().width,lt=""!==$&&$<c.f,ot=""===$||$>Object(m.a)(Object(x.a)(Object(f.k)(c.h),c.C),{representation:"date"}),st=0===Object(f.i)(null===at||void 0===at?void 0:at.TT,"total","vaccinated"),dt=Object(r.useMemo)((function(){var t,e,n,a,i,c,r,l,o=[null===at||void 0===at||null===(t=at.TT)||void 0===t||null===(e=t.meta)||void 0===e?void 0:e.date,null===at||void 0===at||null===(n=at.TT)||void 0===n||null===(a=n.meta)||void 0===a||null===(i=a.tested)||void 0===i?void 0:i.date,null===at||void 0===at||null===(c=at.TT)||void 0===c||null===(r=c.meta)||void 0===r||null===(l=r.vaccinated)||void 0===l?void 0:l.date].filter((function(t){return t}));return o.length>0?Object(m.a)(Object(y.a)(o.map((function(t){return Object(f.k)(t)}))),{representation:"date"}):null}),[at]),ut=Object(r.useMemo)((function(){var t=Object.keys(at||{}).map((function(t){var e,n;return null===at||void 0===at||null===(e=at[t])||void 0===e||null===(n=e.meta)||void 0===n?void 0:n.last_updated})).filter((function(t){return t}));return t.length>0?Object(f.d)(Object(y.a)(t.map((function(t){return Object(f.k)(t)})))):null}),[at]),bt=Object(r.useMemo)((function(){return Object.entries(at||{}).reduce((function(t,e){var n,i=Object(a.a)(e,2),r=i[0],l=i[1];return t[r]=!!((null===l||void 0===l?void 0:l.districts)&&(null===(n=l.districts)||void 0===n?void 0:n[c.H])&&c.u.every((function(t){return Object(f.i)(l,"total",t)===Object(f.i)(l.districts[c.H],"total",t)}))),t}),{})}),[at]),vt=(null===u||void 0===u?void 0:u.stateCode)&&(null===u||void 0===u?void 0:u.districtName)&&u.districtName!==c.H&&bt[u.stateCode];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(T.a,{children:[Object(l.jsx)("title",{children:"Coronavirus Outbreak in India - incovid19.org"}),Object(l.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(l.jsxs)("div",{className:"Home",children:[Object(l.jsxs)("div",{className:g()("home-left",{expanded:F}),children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(I,{})}),!at&&!nt&&Object(l.jsx)("div",{style:{height:"60rem"}}),Object(l.jsxs)(l.Fragment,{children:[!nt&&Object(l.jsx)("div",{style:{minHeight:"61px"}}),nt&&Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)("div",{style:{minHeight:"61px"}}),children:Object(l.jsx)(w,{date:$,setDate:tt,dates:Object.keys(null===(t=nt.TT)||void 0===t?void 0:t.dates),lastUpdatedDate:ut})})]})]}),Object(l.jsxs)("div",{style:{position:"relative",marginTop:"1rem"},children:[at&&Object(l.jsxs)(r.Suspense,{fallback:Object(l.jsx)("div",{style:{height:"50rem"}}),children:[rt>=769&&!F&&Object(l.jsx)(A,{mapStatistic:U,setMapStatistic:Y}),Object(l.jsx)(H,{data:at.TT})]}),Object(l.jsxs)(l.Fragment,{children:[!nt&&Object(l.jsx)("div",{style:{height:"123px"}}),nt&&Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)("div",{style:{height:"123px"}}),children:Object(l.jsx)(z,{timeseries:null===(e=nt.TT)||void 0===e?void 0:e.dates,date:$})})]})]}),!st&&Object(l.jsx)(C,{data:at.TT}),at&&Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)(i.a,{}),children:Object(l.jsx)(R,{data:at,regionHighlighted:u,setRegionHighlighted:b,expandTable:F,setExpandTable:B,hideDistrictData:lt,hideDistrictTestData:ot,hideVaccinated:st,lastDataDate:dt,noDistrictDataStates:bt})})]}),Object(l.jsx)("div",{className:g()("home-right",{expanded:F}),ref:it,style:{minHeight:"4rem"},children:(ct||et.hash)&&Object(l.jsxs)(l.Fragment,{children:[at&&Object(l.jsx)("div",{className:g()("map-container",{expanded:F,stickied:"mapexplorer"===O||F&&rt>=769}),children:Object(l.jsxs)(r.Suspense,{fallback:Object(l.jsx)("div",{style:{height:"50rem"}}),children:[Object(l.jsx)(M,{data:at.TT,stateCode:"TT"}),Object(l.jsx)(P,{stateCode:"TT",data:at,mapStatistic:U,setMapStatistic:Y,mapView:Z,setMapView:_,regionHighlighted:u,setRegionHighlighted:b,anchor:O,setAnchor:p,expandTable:F,lastDataDate:dt,hideDistrictData:lt,hideDistrictTestData:ot,hideVaccinated:st,noRegionHighlightedDistrictData:vt})]})}),nt&&Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)("div",{style:{height:"50rem"}}),children:Object(l.jsx)(E,{stateCode:"TT",timeseries:nt,date:$,regionHighlighted:u,setRegionHighlighted:b,anchor:O,setAnchor:p,expandTable:F,hideVaccinated:st,noRegionHighlightedDistrictData:vt})})]})})]}),!st&&at.TT.districts&&Object(l.jsx)(o,{data:at}),ct&&Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(N,{})})]})}}}]);
//# sourceMappingURL=24.48e4e08d.chunk.js.map