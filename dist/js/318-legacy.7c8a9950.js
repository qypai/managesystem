"use strict";(self["webpackChunkmanagement"]=self["webpackChunkmanagement"]||[]).push([[318],{15805:function(t,e,n){n.d(e,{Z:function(){return o}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.tags,(function(e,a){return n("el-tag",{key:e.path,attrs:{closable:"","disable-transitions":!1,size:"mini",effect:t.light(e)},on:{close:function(n){return t.handleClose(e,a)},click:function(n){return t.change(e,a)}}},[t._v(" "+t._s(e.label)+" ")])})),1)},s=[],r=(n(40561),n(68309),{name:"tags",data:function(){return{}},computed:{tags:function(){return this.$store.state.tab.tabsList}},methods:{handleClose:function(t,e){var n=this.$store.state.tab.tabsList;if(0==e)this.$message.error("不可移除");else{n.splice(e,1);var a=n.length-1;this.$router.push({name:n[a].name}),this.$store.commit("updateclose",t)}},light:function(t){return this.$route.name===t.name?"dark":"plain"},change:function(t,e){var n=this.$store.state.tab.tabsList,a=n[e].name;this.$router.push({name:a}),this.$store.commit("headermenu",t)}}}),i=r,l=n(1001),u=(0,l.Z)(i,a,s,!1,null,null,null),o=u.exports},76318:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("tags"),t._v(" 我是mall ")],1)},s=[],r=n(15805),i={name:"mall",components:{tags:r.Z}},l=i,u=n(1001),o=(0,u.Z)(l,a,s,!1,null,null,null),c=o.exports}}]);
//# sourceMappingURL=318-legacy.7c8a9950.js.map