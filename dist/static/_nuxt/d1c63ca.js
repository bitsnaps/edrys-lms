(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6,7,8,9],{497:function(t,e,r){var content=r(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("55999bfa",content,!0,{sourceMap:!1})},499:function(t,e,r){"use strict";r.r(e);var n=r(143);r(4),r(53),r(64),r(501),r(299),r(13),r(12),r(14),r(15),r(11),r(16);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"Module",props:["role","username","liveClassProxy","scrapedModule"],data:function(){return{}},computed:{iframeOrigin:function(){return new URL(this.scrapedModule.url).origin}},watch:{liveClassProxy:function(){this.updateIframe()},"$store.state.lastRecievedMessage":function(t){null!=t&&this.$refs.iframe.contentWindow.postMessage(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({event:"message"},t),this.iframeOrigin)}},methods:{updateIframe:function(){this.$refs.iframe.contentWindow.postMessage({event:"update",origin:window.origin,role:this.role,username:this.username,liveClass:JSON.parse(JSON.stringify(this.liveClassProxy)),module:this.scrapedModule,class_id:this.$store.state.class_.id},this.iframeOrigin)}}},c=l,d=r(107),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{key:t.scrapedModule.url,staticStyle:{height:"100%",width:"100%"}},[r("iframe",{key:t.liveClassProxy.users[t.username].room,ref:"iframe",staticStyle:{height:"100%",width:"100%"},attrs:{src:t.scrapedModule.url.startsWith("data:")?null:t.scrapedModule.url,srcdoc:t.scrapedModule.url.startsWith("data:")?t.scrapedModule.url:null,allow:"camera; microphone; fullscreen; display-capture;",scrolling:"",frameborder:"0"},on:{load:t.updateIframe}})])}),[],!1,null,"4cf42962",null);e.default=component.exports},500:function(t,e,r){"use strict";r.r(e);var n=r(85),o=(r(217),r(98),r(14),r(4),r(37),r(54),r(32),{name:"Modules",props:["role","username","liveClassProxy"],data:function(){return{}},computed:{roomName:function(){var t;return(null===(t=this.liveClassProxy.users[this.username])||void 0===t?void 0:t.room)||"Station "+this.username},modulesType:function(){return this.roomName.startsWith("Station ")?"station":"chat"},scrapedModules:function(){var t=this;return this.$store.state.scrapedModules.filter((function(e){return e.shownIn.includes(t.modulesType)||"*"==e.shownIn}))}},created:function(){window.addEventListener("message",this.messageHandler)},beforeDestroy:function(){window.removeEventListener("message",this.messageHandler)},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{messageHandler:function(t){switch(t.data.event){case"message":this.sendMessage(t.data.subject,t.data.body,t.data.module);break;case"update":this.setToValue(this.liveClassProxy,t.data.path,t.data.value);break;case"echo":console.log("ECHO:",t.data)}},sendMessage:function(t,body,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.$axios.$get("/data/sendMessage/".concat(r.$store.state.class_.id,"?message=").concat(encodeURIComponent(JSON.stringify({from:r.username,subject:t,body:body,module:e}))));case 2:case"end":return n.stop()}}),n)})))()}}}),l=(r(502),r(107)),c=r(142),d=r.n(c),v=r(209),h=r(97),m=r(609),f=r(610),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{key:t.role},[t._l(t.scrapedModules,(function(e,i){return r("v-row",{key:i,style:{display:t.scrapedModules[i-1]&&"half"==t.scrapedModules[i-1].width&&"half"==t.scrapedModules[i].width||t.scrapedModules[i-1]&&"third"==t.scrapedModules[i-1].width&&"third"==t.scrapedModules[i].width||t.scrapedModules[i-2]&&"third"==t.scrapedModules[i-2].width&&"third"==t.scrapedModules[i-1].width&&"third"==t.scrapedModules[i].width?"none":"",height:"tall"==e.height?"700px":"short"==e.height?"300px":"500px"}},[["full","half","third"].includes(t.scrapedModules[i].width)?r("v-col",[r("Module",{attrs:{username:t.username,"live-class-proxy":t.liveClassProxy,scrapedModule:t.scrapedModules[i],role:t.role}})],1):t._e(),t._v(" "),t.scrapedModules[i+1]&&t.scrapedModules[i+1].width==t.scrapedModules[i].width&&["half","third"].includes(t.scrapedModules[i].width)?r("v-col",[r("Module",{attrs:{username:t.username,"live-class-proxy":t.liveClassProxy,scrapedModule:t.scrapedModules[i+1],role:t.role}})],1):["half","third"].includes(t.scrapedModules[i].width)?r("v-col"):t._e(),t._v(" "),t.scrapedModules[i+2]&&t.scrapedModules[i+1].width==t.scrapedModules[i].width&&t.scrapedModules[i+2].width==t.scrapedModules[i].width&&["third"].includes(t.scrapedModules[i+2].width)?r("v-col",[r("Module",{attrs:{role:t.role,username:t.username,"live-class-proxy":t.liveClassProxy,scrapedModule:t.scrapedModules[i+2]}})],1):["third"].includes(t.scrapedModules[i].width)?r("v-col"):t._e()],1)})),t._v(" "),t.scrapedModules.length?t._e():r("v-card",["teacher"==t.role||"station"==t.role?r("v-card-text",[t._v("\n      Sorry, looks like you have not loaded up any "+t._s(t.modulesType)+" modules.\n      Add some in the class settings to get started.\n    ")]):t._e(),t._v(" "),"student"==t.role?r("v-card-text",[t._v("\n      Sorry, it looks like the class creators have not added any modules yet.\n    ")]):t._e()],1)],2)}),[],!1,null,"3ab09a4e",null);e.default=component.exports;d()(component,{Module:r(499).default}),d()(component,{VCard:v.a,VCardText:h.c,VCol:m.a,VRow:f.a})},502:function(t,e,r){"use strict";r(497)},503:function(t,e,r){var n=r(19)(!1);n.push([t.i,".row[data-v-3ab09a4e]{margin:0!important;height:100%}.col[data-v-3ab09a4e],.row[data-v-3ab09a4e]{padding:0}",""]),t.exports=n},518:function(t,e,r){var content=r(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("c82bbd6a",content,!0,{sourceMap:!1})},519:function(t,e,r){var n=r(19)(!1);n.push([t.i,".theme--light.v-navigation-drawer{background-color:#fff}.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:rgba(0,0,0,.12)}.theme--light.v-navigation-drawer .v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-navigation-drawer{background-color:#363636}.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:hsla(0,0%,100%,.12)}.theme--dark.v-navigation-drawer .v-divider{border-color:hsla(0,0%,100%,.12)}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;left:0;max-width:100%;overflow:hidden;pointer-events:auto;top:0;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform,visibility,width}.v-navigation-drawer:not([data-booted=true]){transition:none!important}.v-navigation-drawer.v-navigation-drawer--right:after{left:0;right:auto}.v-navigation-drawer .v-list:not(.v-select-list){background:inherit}.v-navigation-drawer__border{position:absolute;right:0;top:0;height:100%;width:1px}.v-navigation-drawer__content{height:100%;overflow-y:auto;overflow-x:hidden}.v-navigation-drawer__image{border-radius:inherit;height:100%;position:absolute;top:0;bottom:0;z-index:-1;contain:strict;width:100%}.v-navigation-drawer__image .v-image{border-radius:inherit}.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile{max-height:50%;top:auto;bottom:0;min-width:100%}.v-navigation-drawer--right{left:auto;right:0}.v-navigation-drawer--right>.v-navigation-drawer__border{right:auto;left:0}.v-navigation-drawer--absolute{z-index:1}.v-navigation-drawer--fixed{z-index:6}.v-navigation-drawer--absolute{position:absolute}.v-navigation-drawer--clipped:not(.v-navigation-drawer--temporary):not(.v-navigation-drawer--is-mobile){z-index:4}.v-navigation-drawer--fixed{position:fixed}.v-navigation-drawer--floating:after{display:none}.v-navigation-drawer--mini-variant{overflow:hidden}.v-navigation-drawer--mini-variant .v-list-item>:first-child{margin-left:0;margin-right:0}.v-navigation-drawer--mini-variant .v-list-item>:not(:first-child){position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap;display:inline;display:initial}.v-navigation-drawer--mini-variant .v-list-group--no-action .v-list-group__items,.v-navigation-drawer--mini-variant .v-list-group--sub-group{display:none}.v-navigation-drawer--mini-variant.v-navigation-drawer--custom-mini-variant .v-list-item{justify-content:center}.v-navigation-drawer--temporary{z-index:7}.v-navigation-drawer--mobile{z-index:6}.v-navigation-drawer--close{visibility:hidden}.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),.v-navigation-drawer--temporary:not(.v-navigation-drawer--close){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}",""]),t.exports=n},520:function(t,e,r){"use strict";r.r(e);r(26),r(37),r(42),r(54),r(71),r(60),r(14),r(4),r(13),r(98),r(22),r(303),r(146);var n=r(511),o=r.n(n),l=r(499),c=r(500),d={name:"Teacher",props:["liveClassProxy","isStation","stationName"],data:function(){return{settingspendingEdits:!1,ready:!1,liveTeacherCount:0,liveStudentCount:0,lists:{},myUrl:"",showSettings:!1,stationNameInput:"",stationNameRules:[function(t){return!!t||"Name required"},function(t){return/^([A-Za-z0-9 ]{1,50})$/.test(t)||"Up to 50 letters and numbers only"}]}},computed:{username:function(){return this.isStation?this.stationName:this.$store.state.user.email},currentRoomName:function(){return this.liveClassProxy.users[this.username].room}},watch:{"$store.state.user.displayName":function(){this.$store.state.class_&&(this.liveClassProxy.users[this.username].displayName=this.$store.state.user.displayName)},currentRoomName:function(){["md","sm","xs"].includes(this.$vuetify.breakpoint.name)&&this.$store.commit("toggleDrawer",!1)},liveClassProxy:function(){this.updateDisplay()}},mounted:function(){this.stationNameInput=this.stationName,this.updateDisplay(),this.$route.hash.includes("#settings")&&(this.showSettings=!0,window.location.hash=window.location.hash.replace("#settings",""))},methods:{addRoom:function(){var t=Object.keys(this.liveClassProxy.rooms).filter((function(t){return t.startsWith("Room ")})).map((function(t){return Number(t.replace("Room ",""))}));t.push(0),t.sort((function(a,b){return a-b})).reverse(),t=t[0]+1,this.liveClassProxy.rooms["Room "+t]={}},removeRoom:function(t){this.currentRoomName==t&&this.setCurrentRoom("Lobby"),this.liveClassProxy.rooms[t]=null},setStationName:function(){localStorage.stationName=this.stationNameInput,window.location.reload()},exitStationMode:function(){window.location.hash=window.location.hash.replace("#station",""),window.location.reload()},updateDisplay:function(){this.liveTeacherCount=Object.values(this.liveClassProxy.users).filter((function(u){return"teacher"==u.role})).length,this.liveStudentCount=Object.values(this.liveClassProxy.users).filter((function(u){return"student"==u.role})).length,this.liveClassProxy&&!this.ready&&(this.ready=!0)},setCurrentRoom:function(t){this.liveClassProxy.users[this.username].room=t},enableAutoAssign:function(){this.liveClassProxy.autoAssign=this.username},userRoomChange:function(t){if("end"==t.type){var e=t.to.id.replace("$ROOM:",""),r=t.item.id.replace("$EMAIL:","");r==this.username?this.setCurrentRoom(e):this.liveClassProxy.users[r].room=e}}},components:{Settings:r(507).default,Module:l.default,draggable:o.a,Modules:c.default}},v=r(107),h=r(142),m=r.n(h),f=r(229),y=r(209),w=r(97),x=r(609),_=r(522),O=r(488),C=r(561),M=r(490),S=r(220),$=r(61),j=r(6),P=r(8),k=Object(j.a)(S.a,$.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(P.c)("v-hover should only contain a single element",this),element)):(Object(P.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),R=r(205),A=r(539),N=r(515),V=r(496),E=r(541),T=r(516),L=(r(12),r(15),r(11),r(16),r(2)),I=(r(145),r(32),r(518),r(233)),D=r(170),B=r(38),W=r(221),z=r(517),H=r(206),U=r(114),J=r(24),X=r(223),F=r(219),Y=r(506),Z=r(0);function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var K=Object(j.a)(Object(D.a)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),B.a,W.a,z.a,H.a,U.a,J.a).extend({name:"v-navigation-drawer",directives:{ClickOutside:X.a,Resize:F.a,Touch:Y.a},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(e){Object(L.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&z.a.options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(Z.g)(this.height),top:this.isBottom?"auto":Object(Z.g)(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(Z.g)(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(Z.g)(this.computedTransform,"%"),")"),width:Object(Z.g)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},image=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(I.a,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[image])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={mouseenter:function(){return t.isMouseover=!0},mouseleave:function(){return t.isMouseover=!1},transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var r=document.createEvent("UIEvents");r.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(r)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),e},genPosition:function(t){var slot=Object(Z.m)(this,t);return slot?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},slot):slot},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(Z.m)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),Q=r(210),tt=r(610),et=r(180),it=r(224),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-navigation-drawer",{attrs:{disabled:t.isStation,width:310,value:t.$store.state.drawer,app:"",clipped:""},on:{input:function(e){return t.$store.commit("toggleDrawer",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[r("div",{staticClass:"pa-2"},[r("v-btn",{staticClass:"mb-2",attrs:{depressed:"",block:""},on:{click:t.addRoom}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-forum")]),t._v("\n          New room\n        ")],1)],1)]},proxy:!0}])},[r("v-overlay",{attrs:{value:t.isStation,opacity:.8}},[r("v-card",{staticClass:"blue-grey darken-4 text-center",attrs:{tile:"",width:"100%"}},[r("v-card-text",{staticClass:"white--text"},[t._v(" Station Mode Active ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-form",{on:{submit:function(e){return e.preventDefault(),t.setStationName.apply(null,arguments)}}},[r("v-text-field",{attrs:{outlined:"",rules:t.stationNameRules,label:"Station Name",required:"","append-icon":"mdi-arrow-right"},on:{"click:append":t.setStationName},model:{value:t.stationNameInput,callback:function(e){t.stationNameInput=e},expression:"stationNameInput"}})],1),t._v("\n\n          This browser is now running as a station and ready to serve students\n        ")],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-btn",{on:{click:t.exitStationMode}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-export-variant")]),t._v("\n\n            Exit Station mode\n          ")],1)],1)],1)],1),t._v(" "),r("v-list-item",{staticStyle:{margin:"10px"}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v("\n          "+t._s(t.$store.state.class_.name)+"\n        ")]),t._v(" "),r("v-list-item-subtitle",[t._v("\n          "+t._s(t.liveStudentCount)+"\n          "+t._s(1==t.liveStudentCount?"student":"students")+",\n          "+t._s(t.liveTeacherCount)+"\n          "+t._s(1==t.liveTeacherCount?"teacher":"teachers")+" online\n        ")])],1),t._v(" "),r("v-list-item-icon",[r("v-btn",{attrs:{icon:"",color:"grey"},on:{click:function(e){t.showSettings=!t.showSettings}}},[r("v-icon",[t._v("mdi-cog")])],1)],1)],1),t._v(" "),r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{attrs:{value:t.currentRoomName,mandatory:""}},t._l(Object.entries(t.liveClassProxy.rooms||{}),(function(e){var n=e[0],o=e[1];return r("div",{key:n,attrs:{value:n}},[r("v-divider"),t._v(" "),r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-list-item",{attrs:{value:n,link:""},on:{click:function(){t.setCurrentRoom(n)}}},[r("v-list-item-icon",{staticStyle:{"margin-right":"15px"}},[r("v-icon",["Lobby"==n?[t._v("mdi-account-multiple")]:"PA Mode"==n?[t._v("mdi-bullhorn")]:n.startsWith("Station ")?[t._v("mdi-router-wireless")]:[t._v("mdi-forum")]],2)],1),t._v(" "),r("v-list-item-title",[t._v(t._s(n)+" ")]),t._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:o&&n.startsWith("Room "),expression:"hover && room_name.startsWith('Room ')"}],attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.removeRoom(n)}}},[r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-close")])],1),t._v(" "),r("v-list-item-icon",[r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-arrow-right")])],1)],1)]}}],null,!0)}),t._v(" "),r("v-list",{attrs:{dense:"",flat:""}},[r("draggable",{attrs:{group:"users",id:"$ROOM:"+n},on:{end:t.userRoomChange}},t._l(Object.entries(t.liveClassProxy.users).filter((function(t){t[0];return t[1].room==n})),(function(e){var n=e[0],l=e[1];return r("v-hover",{key:n,attrs:{id:"$EMAIL:"+n},scopedSlots:t._u([{key:"default",fn:function(e){var c=e.hover;return[r("v-list-item",{directives:[{name:"show",rawName:"v-show",value:o.userLinked!=n,expression:"room.userLinked != email"}],attrs:{inactive:"",ripple:!1,selectable:!1}},[r("v-list-item-icon",{staticStyle:{"margin-right":"15px","margin-left":"20px"}},["student"==l.role?r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-account-circle-outline")]):"teacher"==l.role?r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-clipboard-account-outline")]):t._e()],1),t._v(" "),r("v-list-item-title",[t._v("\n                    "+t._s(l.displayName))]),t._v(" "),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:c,expression:"hover"}],staticClass:"handle",attrs:{color:"grey"}},[t._v("mdi-drag-horizontal-variant")])],1)]}}],null,!0)})})),1)],1)],1)})),0)],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"700px",scrollable:"",persistent:t.settingspendingEdits},model:{value:t.showSettings,callback:function(e){t.showSettings=e},expression:"showSettings"}},[r("Settings",{attrs:{pendingEdits:t.settingspendingEdits},on:{"update:pendingEdits":function(e){t.settingspendingEdits=e},"update:pending-edits":function(e){t.settingspendingEdits=e},close:function(e){t.showSettings=!1}}})],1),t._v(" "),r("v-slide-y-transition"),t._v(" "),r("v-container",[t.ready?r("div",[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"10"}},[r("v-card",[r("v-card-title",[t._v(" "+t._s(t.currentRoomName)+" ")]),t._v(" "),r("Modules",{attrs:{role:t.isStation?"station":"teacher",username:t.username,"live-class-proxy":t.liveClassProxy}})],1)],1)],1)],1):t._e()])],1)}),[],!1,null,"b06c6038",null);e.default=component.exports;m()(component,{Settings:r(507).default,Modules:r(500).default}),m()(component,{VBtn:f.a,VCard:y.a,VCardText:w.c,VCardTitle:w.d,VCol:x.a,VContainer:_.a,VDialog:O.a,VDivider:C.a,VForm:M.a,VHover:k,VIcon:R.a,VList:A.a,VListItem:N.a,VListItemContent:V.a,VListItemGroup:E.a,VListItemIcon:T.a,VListItemSubtitle:V.b,VListItemTitle:V.c,VNavigationDrawer:K,VOverlay:Q.a,VRow:tt.a,VSlideYTransition:et.e,VTextField:it.a})},521:function(t,e,r){"use strict";r.r(e);var n=r(85),o=(r(217),{name:"Student",props:["liveClassProxy"],computed:{roomName:function(){return this.liveClassProxy.users[this.$store.state.user.email].room}},data:function(){return{liveRoomProxy:{},ready:!1}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.ready=!0;case 1:case"end":return e.stop()}}),e)})))()},methods:{}}),l=r(107),c=r(142),d=r.n(c),v=r(209),h=r(97),m=r(609),f=r(522),y=r(610),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("div",[t.ready?r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"10"}},[r("v-card",[r("v-card-title",[t._v(t._s(t.$store.state.class_.name)+" – "+t._s(t.roomName))]),t._v(" "),r("Modules",{attrs:{role:"student",username:t.$store.state.user.email,"live-class-proxy":t.liveClassProxy}})],1)],1)],1):t._e()],1)])],1)}),[],!1,null,"5893dd9c",null);e.default=component.exports;d()(component,{Modules:r(500).default}),d()(component,{VCard:v.a,VCardTitle:h.d,VCol:m.a,VContainer:f.a,VRow:y.a})},522:function(t,e,r){"use strict";r(14),r(4),r(13),r(98),r(32),r(300),r(504),r(83),r(99);var n=r(1);var o,l=r(100);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},621:function(t,e,r){"use strict";r.r(e);r(59),r(65),r(26),r(12),r(72),r(84),r(15),r(11),r(16);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var o=r(543),l=r(143),c=r(85),d=(r(14),r(4),r(121),r(42),r(37),r(54),r(32),r(53),r(64),r(501),r(299),r(13),r(73),r(217),r(521));function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function m(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var y={name:"ClassPage",data:function(){return{ready:!1,liveClass:void 0,liveClassProxy:void 0,role:"",liveClassEventSource:void 0,isStation:!1,stationName:"",modulesLoaded:!1}},head:function(){return{title:"Class"}},watch:{"$store.state.class_.modules":function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.modulesLoaded=!1,r=[],n=m(t.$store.state.class_.modules),e.prev=3,n.s();case 5:if((o=n.n()).done){e.next=14;break}return l=o.value,e.t0=r,e.next=10,t.scrapeModule(l);case 10:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 12:e.next=5;break;case 14:e.next=19;break;case 16:e.prev=16,e.t2=e.catch(3),n.e(e.t2);case 19:return e.prev=19,n.f(),e.finish(19);case 22:t.$store.commit("setScrapedModules",r),t.modulesLoaded=!0;case 24:case"end":return e.stop()}}),e,null,[[3,16,19,22]])})))()},"$store.state.class_":function(t,e){var r=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var e,n,l,c,d,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.ready=!1,e=void 0,null!==r.$store.state.class_){t.next=6;break}e=h(h({},r.$store.state.user),{},{memberships:r.$store.state.user.memberships.filter((function(t){return t.class_id!=r.$route.params.id}))}),t.next=13;break;case 6:if(!r.$store.state.class_){t.next=11;break}(l=null===(n=r.$store.state.user.memberships)||void 0===n?void 0:n.find((function(t){return t.class_id==r.$route.params.id&&t.instance==r.$store.state.instance})))&&l.role==r.role&&l.class_name==r.$store.state.class_.name||(null!==(c=r.$store.state.class_.members.teacher)&&void 0!==c&&c.includes(localStorage.email)?r.role="teacher":null!==(d=r.$store.state.class_.members.student)&&void 0!==d&&d.includes(localStorage.email)&&(r.role="student"),e=h(h({},r.$store.state.user),{},{memberships:[{instance:r.$store.state.instance,class_id:r.$route.params.id,class_name:r.$store.state.class_.name,role:r.role}].concat(Object(o.a)(r.$store.state.user.memberships.filter((function(t){return t.class_id!=r.$route.params.id}))))})),t.next=13;break;case 11:return console.log("Undefined class"),t.abrupt("return");case 13:if(!e){t.next=19;break}return t.t0=r.$store,t.next=17,r.$axios.$get("/data/updateUser?user=".concat(encodeURIComponent(JSON.stringify(e))));case 17:t.t1=t.sent,t.t0.commit.call(t.t0,"setUser",t.t1);case 19:if(null!==r.$store.state.class_){t.next=23;break}return r.$router.push({path:"/"}),r.$emit("class-not-found"),t.abrupt("return");case 23:r.liveClassEventSource?r.ready=!0:((v=new URL("".concat(r.$store.state.instance,"/data/readLiveClass/").concat(r.$route.params.id))).searchParams.append("displayName",r.isStation?r.stationName:r.$store.state.user.displayName),v.searchParams.append("jwt",localStorage.jwt),r.isStation&&v.searchParams.append("isStation","true"),r.liveClassEventSource=new EventSource(v.href),r.liveClassEventSource.addEventListener("update",(function(t){r.liveClass=JSON.parse(t.data),r.buildLiveClassProxy(),r.ready=!0,Object.keys(r.liveClass.rooms).includes(r.liveClass.users[r.$store.state.user.email].room)||(r.liveClassProxy.users[r.$store.state.user.email].room="Lobby")})),r.liveClassEventSource.addEventListener("message",(function(t){r.$store.commit("setLastRecievedMessage",JSON.parse(t.data))})));case 24:case"end":return t.stop()}}),t)})))()}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.location.hash.includes("#station")?(t.isStation=!0,t.stationName=localStorage.stationName||(new Date).getTime().toString()):(t.isStation=!1,t.stationName=void 0),e.next=3,t.fetchClass();case 3:case"end":return e.stop()}}),e)})))()},methods:{buildLiveClassProxy:function(){var t=this;this.liveClassProxy=new Proxy(this.liveClass,function e(path){return{get:function(t,r){if("isProxy"==r)return!0;var l=t[r];return void 0!==l?(l.isProxy||"object"!==n(l)||(t[r]=new Proxy(l,e([].concat(Object(o.a)(path),[r])))),t[r]):void 0},set:(r=Object(c.a)(regeneratorRuntime.mark((function e(r,n,l){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(path.includes("__ob__")){e.next=4;break}return c=[].concat(Object(o.a)(path),[n]),e.next=4,t.$axios.$get("/data/updateLiveClass/".concat(t.$store.state.class_.id,"?update=").concat(encodeURIComponent(JSON.stringify({path:c,value:l}))));case 4:return r[n]=l,e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)}))),function(t,e,n){return r.apply(this,arguments)})};var r}(""))},fetchClass:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=t.$store,e.next=4,t.$axios.$get("/data/readClass/".concat(t.$route.params.id));case 4:return e.t1=e.sent,e.t0.commit.call(e.t0,"setClass",e.t1),e.abrupt("return",!0);case 9:if(e.prev=9,e.t2=e.catch(0),404!=e.t2.response.status){e.next=14;break}return t.$store.commit("setClass",null),e.abrupt("return",!1);case 14:throw new Error("Unknown response in class page");case 15:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},components:{Teacher:r(520).default,Student:d.default}},w=y,x=r(107),_=r(142),O=r.n(_),C=r(208),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.ready&&t.modulesLoaded?r("div",["teacher"==t.role?r("Teacher",{attrs:{"live-class-proxy":t.liveClassProxy,"is-station":t.isStation,"station-name":t.stationName}}):"student"==t.role?r("Student",{attrs:{"live-class-proxy":t.liveClassProxy}}):t._e()],1):r("div",{attrs:{justify:"center",align:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)])}),[],!1,null,"1ac40450",null);e.default=component.exports;O()(component,{Teacher:r(520).default,Student:r(521).default}),O()(component,{VProgressCircular:C.a})}}]);