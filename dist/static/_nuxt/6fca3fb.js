(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{538:function(t,e,n){var content=n(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1c7aece9",content,!0,{sourceMap:!1})},603:function(t,e,n){"use strict";n(538)},604:function(t,e,n){var r=n(19)(!1);r.push([t.i,".items[data-v-746711aa]{-moz-column-count:3;column-count:3;grid-column-gap:10px;-moz-column-gap:10px;column-gap:10px;padding:0}.item[data-v-746711aa]{display:inline-block;width:100%;margin:5px 0}@media only screen and (max-width:1200px){.items[data-v-746711aa]{-moz-column-count:3;column-count:3}}@media only screen and (max-width:500px){.items[data-v-746711aa]{-moz-column-count:1;column-count:1}}",""]),t.exports=r},605:function(t,e,n){"use strict";n(14),n(4),n(13),n(83),n(32),n(305),n(504),n(84),n(86);var r=n(1);var c,o=n(101);e.a=(c="container",r.a.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var l=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),c)}})},631:function(t,e,n){"use strict";n.r(e);var r=n(26),c=(n(99),{name:"IndexPage",data:function(){return{canCreateClass:!1,creatingClass:!1,alertCantCreateClass:!1}},head:function(){return{title:"Home"}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/data/canCreateClass",{timeout:1e3});case 2:return t.canCreateClass=e.sent,e.t0=t.$store,e.next=6,t.$axios.$get("/data/readUser");case 6:e.t1=e.sent,e.t0.commit.call(e.t0,"setUser",e.t1);case 8:case"end":return e.stop()}}),e)})))()},methods:{createClass:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.creatingClass=!0,e.next=3,t.$axios.$get("data/createClass");case 3:n=e.sent,t.$router.push({path:"/class/".concat(encodeURIComponent(n),"#settings")}),t.creatingClass=!1;case 6:case"end":return e.stop()}}),e)})))()}}}),o=(n(603),n(108)),l=n(143),d=n.n(l),v=n(224),m=n(209),C=n(98),f=n(618),h=n(605),_=n(487),x=n(619),y=n(206),w=n(294),k=n(624),V=n(493),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",[t.canCreateClass||this.$store.state.user.memberships.length>=1?n("div",{staticClass:"title",staticStyle:{padding:"10px"}},[t._v("\n          My Classes\n        ")]):n("div",{staticClass:"subtitle",staticStyle:{padding:"10px"}},[t._v("\n          Looks like you aren't a part of any classes on this isntance yet.\n          Ask your instructors for an invite link.\n        ")]),t._v(" "),n("div",{staticClass:"items"},[t._l(this.$store.state.user.memberships,(function(e){return n("v-card",{key:e.class_id,staticClass:"item",attrs:{elevation:"2",to:"/class/"+e.class_id,nuxt:""}},[n("v-img",{attrs:{src:e.meta&&e.meta.logo?e.meta.logo:"https://repository-images.githubusercontent.com/453979926/ab6bf9d7-a4bc-4a47-97b7-c8bc8bb4654d",height:"200px"}}),t._v(" "),n("v-card-title",[t._v(t._s(e.class_name))]),t._v(" "),n("v-card-subtitle",["student"==e.role?n("span",[t._v("You're a student here")]):"teacher"==e.role?n("span",[t._v("You teach this class")]):t._e()]),t._v(" "),n("v-card-text",{domProps:{innerHTML:t._s(e.meta&&e.meta.description?e.meta.description:"No description")}}),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-arrow-right-bold")])],1)],1)],1)})),t._v(" "),n("v-card",{directives:[{name:"show",rawName:"v-show",value:t.canCreateClass,expression:"canCreateClass"}],staticClass:"item",attrs:{color:"primary",elevation:"2",disabled:t.creatingClass},on:{click:function(e){t.canCreateClass?t.createClass():t.alertCantCreateClass=!0}}},[n("v-card-title",[t._v("Create a class")]),t._v(" "),n("v-card-subtitle",[t._v("Start teaching now")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",loading:t.creatingClass,disabled:t.creatingClass}},[n("v-icon",[t._v("mdi-plus")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.alertCantCreateClass,callback:function(e){t.alertCantCreateClass=e},expression:"alertCantCreateClass"}},[n("v-card",[n("v-card-title",[t._v(" Sorry ")]),t._v(" "),n("v-card-text",[t._v("\n                It looks like you're not allowed to create new classes on your\n                current instance. Switch to a new instance and try again.\n              ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.alertCantCreateClass=!1}}},[t._v("\n                  OK\n                ")])],1)],1)],1)],2)])],1)],1)],1)}),[],!1,null,"746711aa",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:C.a,VCardSubtitle:C.b,VCardText:C.c,VCardTitle:C.d,VCol:f.a,VContainer:h.a,VDialog:_.a,VDivider:x.a,VIcon:y.a,VImg:w.a,VRow:k.a,VSpacer:V.a})}}]);