(function(){"use strict";var e={78975:function(e,n,t){var o=t(32747),a=t.n(o),u=t(77349),r=t.n(u),i=t(1799),l=t.n(i),f=t(24863),c=t.n(f),d=t(58985),s=t.n(d),m=t(6668),p=t.n(m),h=t(14412),v=t.n(h),g=t(12711),b=t.n(g),y=t(97227),k=t.n(y),w=t(15263),B=t.n(w),C=t(2319),L=t.n(C),O=t(47677),T=t.n(O),E=t(35950),j=t.n(E),S=t(58782),x=t.n(S),A=t(28807),P=t.n(A),_=t(69595),D=t.n(_),Z=t(63711),N=t.n(Z),M=t(95040),R=t.n(M),$=t(27839),F=t.n($),I=t(701),H=t.n(I),q=t(7790),K=t.n(q),U=t(19294),z=t.n(U),G=t(75035),J=t.n(G),Q=t(7694),V=t.n(Q),W=t(18012),X=t.n(W),Y=t(28538),ee=t.n(Y),ne=t(53388),te=t.n(ne),oe=t(65571),ae=t.n(oe),ue=t(29221),re=t.n(ue),ie=t(81031),le=t.n(ie),fe=t(61192),ce=t.n(fe),de=(t(66992),t(88674),t(19601),t(17727),t(68309),t(28935)),se=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},me=[],pe={name:"App",components:{}},he=pe,ve=t(1001),ge=(0,ve.Z)(he,se,me,!1,null,null,null),be=ge.exports,ye=(t(41539),t(78783),t(33948),t(12809));de["default"].use(ye.Z);var ke=[{path:"/",name:"main",component:function(){return t.e(804).then(t.bind(t,65804))},children:[{path:"/home",name:"home",component:function(){return t.e(398).then(t.bind(t,44398))}},{path:"/user",name:"user",component:function(){return t.e(383).then(t.bind(t,58383))}},{path:"/mall",name:"mall",component:function(){return t.e(318).then(t.bind(t,76318))}},{path:"/page1",name:"page1",component:function(){return t.e(44).then(t.bind(t,16044))}},{path:"/page2",name:"page2",component:function(){return t.e(643).then(t.bind(t,7643))}}]},{path:"/login",name:"login",component:function(){return t.e(969).then(t.bind(t,6969))}}],we=new ye.Z({mode:"history",routes:ke}),Be=we,Ce=t(34665),Le=(t(34553),t(40561),t(61079),{state:{isCollapse:!1,tabsList:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home/home"}],headerList:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home/home"}],currentMenu:null,editdata:null,editindex:null},mutations:{collapsemenu:function(e){e.isCollapse=!e.isCollapse},selectmenu:function(e,n){if("home"!==n.name){e.currentMenu=n;var t=e.tabsList.findIndex((function(e){return e.name===n.name}));-1==t&&e.tabsList.push(n)}else e.currentMenu=null},headermenu:function(e,n){var t=e.headerList.findIndex((function(e){return e.name===n.name})),o=e.headerList.length-1-t;-1==t?e.headerList.push(n):t!==e.headerList.length-1&&e.headerList.splice(t+1,o)},updateclose:function(e,n){var t=e.headerList.findIndex((function(e){return e.name===n.name}));e.headerList.splice(t,1)}}}),Oe=t(60329),Te={state:{token:""},mutations:{setToken:function(e,n){e.token=n,Oe.Z.set("token",n)},clearToken:function(e){e.token="",Oe.Z.remove("token")},getToken:function(e){e.token=e.token||Oe.Z.get("token")}}};de["default"].use(Ce.ZP);var Ee=new Ce.ZP.Store({modules:{tab:Le,user:Te}}),je=t(26166),Se=t.n(je),xe=t(83025),Ae=t.n(xe),Pe=[],_e={getStatisticalData:function(){for(var e=0;e<7;e++)Pe.push(Ae().mock({"苹果":Ae().Random.float(100,8e3,0,0),vivo:Ae().Random.float(100,8e3,0,0),oppo:Ae().Random.float(100,8e3,0,0),"魅族":Ae().Random.float(100,8e3,0,0),"三星":Ae().Random.float(100,8e3,0,0),"小米":Ae().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:2600}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:Pe},tableData:[{name:"苹果",todayBuy:100,monthBuy:300,totalBuy:800},{name:"小米",todayBuy:100,monthBuy:300,totalBuy:800},{name:"魅族",todayBuy:100,monthBuy:300,totalBuy:800},{name:"华为",todayBuy:100,monthBuy:300,totalBuy:800},{name:"红米",todayBuy:100,monthBuy:300,totalBuy:800}]}}}};Ae().mock("/home/getData",_e.getStatisticalData),de["default"].config.productionTip=!1,de["default"].use(ce()),de["default"].use(le()),de["default"].use(re()),de["default"].use(ae()),de["default"].use(te()),de["default"].use(ee()),de["default"].use(X()),de["default"].use(V()),de["default"].use(J()),de["default"].use(z()),de["default"].use(K()),de["default"].use(H()),de["default"].use(F()),de["default"].use(R()),de["default"].use(N()),de["default"].use(D()),de["default"].use(P()),de["default"].use(x()),de["default"].use(j()),de["default"].use(T()),de["default"].use(L()),de["default"].use(B()),de["default"].use(k()),de["default"].use(b()),de["default"].use(v()),de["default"].use(p()),de["default"].use(s()),de["default"].use(c()),de["default"].use(l()),de["default"].prototype.$http=Se(),de["default"].prototype.$message=r(),de["default"].prototype.$confirm=a().confirm,Be.beforeEach((function(e,n,t){Ee.commit("getToken");var o=Ee.state.user.token;o||"login"===e.name?t():t({name:"login"})})),new de["default"]({store:Ee,router:Be,render:function(e){return e(be)}}).$mount("#app")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var u=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}t.m=e,function(){var e=[];t.O=function(n,o,a,u){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],u=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&u||r>=u)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(i=!1,u<r&&(r=u));if(i){e.splice(c--,1);var f=a();void 0!==f&&(n=f)}}return n}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[o,a,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{44:"4681de6d",318:"7c8a9950",383:"344f18f3",398:"bbebc6ed",643:"d5e2aed0",804:"7b9b9980",969:"18e6f0b9"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{44:"cf396c63",318:"cf396c63",383:"95249039",398:"0db79220",643:"cf396c63",804:"c16e8c1c",969:"ed81ac3b"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="management:";t.l=function(o,a,u,r){if(e[o])e[o].push(a);else{var i,l;if(void 0!==u)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var d=f[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+u){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+u),i.src=o),e[o]=[a];var s=function(n,t){i.onerror=i.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var u=function(u){if(a.onerror=a.onload=null,"load"===u.type)t();else{var r=u&&("load"===u.type?"missing":u.type),i=u&&u.target&&u.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=u,a.href=n,document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=t[o],u=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(u===e||u===n))return a}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){a=r[o],u=a.getAttribute("data-href");if(u===e||u===n)return a}},o=function(o){return new Promise((function(a,u){var r=t.miniCssF(o),i=t.p+r;if(n(r,i))return a();e(o,i,a,u)}))},a={143:0};t.f.miniCss=function(e,n){var t={44:1,318:1,383:1,398:1,643:1,804:1,969:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=o(e).then((function(){a[e]=0}),(function(n){throw delete a[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)o.push(a[2]);else{var u=new Promise((function(t,o){a=e[n]=[t,o]}));o.push(a[2]=u);var r=t.p+t.u(n),i=new Error,l=function(o){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var u=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+u+": "+r+")",i.name="ChunkLoadError",i.type=u,i.request=r,a[1](i)}};t.l(r,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,u,r=o[0],i=o[1],l=o[2],f=0;if(r.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(l)var c=l(t)}for(n&&n(o);f<r.length;f++)u=r[f],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(c)},o=self["webpackChunkmanagement"]=self["webpackChunkmanagement"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(78975)}));o=t.O(o)})();
//# sourceMappingURL=app-legacy.0d89b517.js.map