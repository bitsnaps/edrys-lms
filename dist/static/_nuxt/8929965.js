(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{499:function(e,t,n){"use strict";n.r(t);n(59),n(65),n(85),n(13),n(15),n(11),n(16);var o=n(56),r=n(26),l=n(2),c=(n(99),n(12),n(73),n(61),n(86),n(4),n(46),n(58),n(301),n(180),n(41),n(42),n(27),n(71),n(14),n(541),n(542),n(62),n(84),n(543)),d=(n(544),n(546)),v=(n(547),n(548),n(549),n(550),n(551),n(501)),m=n.n(v);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function _(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw r}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var x=n(293);function k(e){var t;try{t=JSON.parse(e)}catch(n){try{t=x.load(e)}catch(e){console.warn("could not parse classroom",e)}}if(t){var n,o=_(t.modules);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.showInCustom=r.showInCustom||r.showIn||""}}catch(e){o.e(e)}finally{o.f()}}return t}var w={name:"Settings",props:["pendingEdits"],data:function(){var e=this;return{tab:0,saveLoading:!1,saveSuccess:!1,memberTeacher:"",memberStudent:"",className:"",logo:"",description:"",selfAssign:!0,saveError:!1,modules:[],pageLoading:!0,stationUrl:"",memberUrl:"",moduleImportUrl:"",moduleImportUrlRules:[function(t){return e.validate_url(t)||"Please enter a valid module URL"}],scrapedModules:[],selectedFile:void 0,selectedURL:void 0,restoreFileRules:[function(e){return!e||e.size<2e6||"File should be less than 2 MB!"}],restoreSuccess:!1,errorMessage:void 0}},computed:{newClass:function(){return h(h({},this.$store.state.class_),{},{name:this.className,meta:{logo:this.logo,description:this.description,selfAssign:this.selfAssign},members:{teacher:this.strToList(this.memberTeacher),student:this.strToList(this.memberStudent)},modules:this.modules.map((function(e){return h(h({},e),{},{config:e.config,studentConfig:e.studentConfig,teacherConfig:e.teacherConfig,stationConfig:e.stationConfig,showInCustom:e.showInCustom})}))})}},watch:{"$store.state.class_":function(){this.updateState()},newClass:function(){JSON.stringify(this.newClass)!==JSON.stringify(this.$store.state.class_)&&this.$emit("update:pendingEdits",!0)},modules:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o,r,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],o=_(e.modules),t.prev=2,o.s();case 4:if((r=o.n()).done){t.next=13;break}return l=r.value,t.next=8,e.scrapeModule(l);case 8:c=t.sent,l.showInCustom||(l.showInCustom=c.shownIn.join(", ")),n.push(c);case 11:t.next=4;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),o.e(t.t0);case 18:return t.prev=18,o.f(),t.finish(18);case 21:e.scrapedModules=n;case 22:case"end":return t.stop()}}),t,null,[[2,15,18,21]])})))()}},mounted:function(){this.updateState()},methods:{downloadClass:function(e){"yaml"===e?this.download("class-".concat(this.$store.state.class_.id,".yml"),x.dump(this.$store.state.class_)):"json"===e&&this.download("class-".concat(this.$store.state.class_.id,".json"),JSON.stringify(this.$store.state.class_,null,2))},restoreURL:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,text,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.restoreSuccess=!1,e.saveError=!1,t.next=4,fetch(e.selectedURL);case 4:if(!(n=t.sent).ok){t.next=14;break}return t.next=8,n.text();case 8:if(text=t.sent,!(o=k(text))){t.next=14;break}return e.updateState(o),e.restoreSuccess=!0,t.abrupt("return");case 14:e.saveError=!0,e.errorMessage="Could not parse the content within the URL: ".concat(e.selectedURL),console.warn("Could not parse the content within the URL:",e.selectedURL);case 17:case"end":return t.stop()}}),t)})))()},restoreFile:function(e){var t=this;this.restoreSuccess=!1,this.saveError=!1;var n=new FileReader;n.readAsText(this.selectedFile),n.onload=function(e){var n=k(e.target.result);n?(t.updateState(n),t.restoreSuccess=t.updateState(n)):(t.restoreSuccess=!1,t.saveError=!0,t.errorMessage="Failed to restore classroom configuration from file.",console.warn("retoreFile: failed to load class",n))},n.onerror=function(e){t.restoreSuccess=!1,t.saveError=!0,console.warn("restoreFile",e)}},validate_url:function(e){try{var t=new URL(e);if(["http:","https:","file:","ipfs:","ipns:","blob:","dat:","hyper:"].includes(t.protocol))return!0}catch(e){}return!1},updateState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;try{var t,n,r,l,c,d,v,m,f,_;return e=e||this.$store.state.class_,this.className=e.name,this.logo=(null===(t=e)||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.logo)||"",this.description=(null===(r=e)||void 0===r||null===(l=r.meta)||void 0===l?void 0:l.description)||"",this.selfAssign=(null===(c=e)||void 0===c||null===(d=c.meta)||void 0===d?void 0:d.selfAssign)||!1,this.memberTeacher=(null===(v=e.members)||void 0===v?void 0:v.teacher.join("\n"))||"",this.memberStudent=(null===(m=e.members)||void 0===m||null===(f=m.student)||void 0===f?void 0:f.join("\n"))||"",this.modules=Object(o.a)(null===(_=e)||void 0===_?void 0:_.modules.map((function(e){return h(h({},e),{},{config:x.dump(e.config),studentConfig:x.dump(e.studentConfig),teacherConfig:x.dump(e.teacherConfig),stationConfig:x.dump(e.stationConfig),showInCustom:e.showInCustom})})))||[],this.memberUrl=window.location.href.replace("#station","").replace("http://","").replace("https://",""),this.stationUrl=window.location.href.replace("#settings","").replace("#station","").replace("http://","").replace("https://","")+"#station",!0}catch(e){return this.errorMessage="The provided classroom configuration does not seem to be valid. I receive the following error message:\n        <br><br>\n        ".concat(e,"\n        <br><br>\n        Please check the content manually."),this.saveError=!0,!1}},copyStationUrl:function(){navigator.clipboard.writeText(this.stationUrl)},copyMemberUrl:function(){navigator.clipboard.writeText(this.memberUrl)},deleteClass:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$store.state.class_.id,t.prev=1,t.next=4,e.$axios.$get("/data/deleteClass/".concat(n));case 4:t.next=12;break;case 6:return t.prev=6,t.t0=t.catch(1),console.log("Error deleting class...",t.t0),e.saveError=!0,e.errorMessage="Error deleting class: ".concat(t.t0),t.abrupt("return");case 12:return t.next=14,e.$axios.$get("/data/readUser");case 14:return o=t.sent,t.t1=e.$store,t.next=18,e.$axios.$get("/data/updateUser?user=".concat(encodeURIComponent(JSON.stringify(h(h({},o),{},{memberships:o.memberships.filter((function(e){return e.class_id!=n}))})))));case 18:t.t2=t.sent,t.t1.commit.call(t.t1,"setUser",t.t2),e.$router.push({path:"/"});case 21:case"end":return t.stop()}}),t,null,[[1,6]])})))()},strToList:function(e){return e.replace(/ /g,"").split(",").flatMap((function(s){return s.trim().split("\n")})).filter((function(e){return/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)}))},importModule:function(){this.modules.push({url:this.moduleImportUrl,config:"",studentConfig:"",teacherConfig:"",stationConfig:"",showInCustom:"",width:"full",height:"tall"}),this.moduleImportUrl=""},save:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=e.newClass).modules=n.modules.map((function(e){return h(h({},e),{},{config:x.load(e.config),studentConfig:x.load(e.studentConfig),teacherConfig:x.load(e.teacherConfig),stationConfig:x.load(e.stationConfig),showInCustom:e.showInCustom})})),e.saveError=!1,e.saveSuccess=!1,e.saveLoading=!0,t.prev=5,t.t0=e.$store,t.next=9,e.$axios.$post("/data/updateClass/".concat(e.$store.state.class_.id),n);case 9:t.t1=t.sent,t.t0.commit.call(t.t0,"setClass",t.t1),e.saveLoading=!1,e.saveSuccess=!0,e.$emit("update:pendingEdits",!1),e.$emit("close"),t.next=23;break;case 17:t.prev=17,t.t2=t.catch(5),console.log("Saving failed:",t.t2),e.saveError=!0,e.saveLoading=!1,e.errorMessage="Saving failed with the following error message: ".concat(t.t2);case 23:e.$router.app.refresh();case 24:case"end":return t.stop()}}),t,null,[[5,17]])})))()},highlighter:function(code){return Object(d.highlight)(code,d.languages.yaml,"yaml")}},components:{PrismEditor:c.a,draggable:m.a}},C=w,S=(n(553),n(108)),U=n(143),L=n.n(U),I=n(616),V=n(617),M=n(224),$=n(209),R=n(98),O=n(633),j=n(618),E=n(619),T=n(620),A=n(621),F=n(622),P=n(623),N=n(634),D=n(489),J=n(206),H=n(534),z=n(513),B=n(535),G=n(539),Y=n(495),K=n(635),Q=n(624),W=n(625),X=n(492),Z=n(493),ee=n(626),te=n(636),ne=n(632),se=n(606),oe=n(221),re=n(627),ae=n(57),ie=n(230),component=Object(S.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-toolbar",{attrs:{dark:"",flat:""},scopedSlots:e._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"fixed-tabs":"","center-active":"","show-arrows":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",{attrs:{active:""}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-book-open-outline ")]),e._v("\n          Settings\n        ")],1),e._v(" "),n("v-tab",[n("v-icon",{attrs:{left:""}},[e._v(" mdi-account-group ")]),e._v("\n          Members\n        ")],1),e._v(" "),n("v-tab",[n("v-icon",{attrs:{left:""}},[e._v(" mdi-view-dashboard ")]),e._v("\n          Modules\n        ")],1),e._v(" "),n("v-tab",[n("v-icon",{attrs:{left:""}},[e._v(" mdi-router-wireless ")]),e._v("\n          Stations\n        ")],1),e._v(" "),n("v-tab",[n("v-icon",{attrs:{left:""}},[e._v(" mdi-share-variant ")]),e._v("\n          Share\n        ")],1)],1)]},proxy:!0}])},[n("v-toolbar-title",[e._v("Class Settings")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("close")}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",{staticStyle:{height:"565px"}},[n("v-tabs-items",{staticClass:"pt-5",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",[n("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[n("v-text-field",{attrs:{counter:20,label:"Class Name",outlined:"",required:""},model:{value:e.className,callback:function(t){e.className=t},expression:"className"}}),e._v(" "),n("v-text-field",{attrs:{label:"Logo URL",outlined:"",required:""},model:{value:e.logo,callback:function(t){e.logo=t},expression:"logo"}}),e._v(" "),n("v-textarea",{attrs:{filled:"",label:"Description","auto-grow":""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),n("v-checkbox",{attrs:{label:"Enable self-assignment",outlined:""},model:{value:e.selfAssign,callback:function(t){e.selfAssign=t},expression:"selfAssign"}})],1)],1),e._v(" "),n("v-tab-item",[n("v-alert",{attrs:{outlined:"",dense:"",type:"info"}},[e._v("\n          Enter emails below, one per line or separated by commas. Next,\n          invite your users in by sharing this link:\n          "),n("br"),e._v(" "),n("br"),e._v(" "),n("blockquote",{staticStyle:{"margin-left":"10px"}},[n("a",{attrs:{href:"//"+e.memberUrl}},[e._v(e._s(e.memberUrl))]),e._v(" "),n("v-btn",{attrs:{icon:"",small:""},on:{click:e.copyMemberUrl}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-content-copy")])],1)],1)]),e._v(" "),n("v-textarea",{attrs:{outlined:"",label:"List of teacher emails"},model:{value:e.memberTeacher,callback:function(t){e.memberTeacher=t},expression:"memberTeacher"}}),e._v(" "),n("v-textarea",{attrs:{outlined:"",label:"List of student emails"},model:{value:e.memberStudent,callback:function(t){e.memberStudent=t},expression:"memberStudent"}})],1),e._v(" "),n("v-tab-item",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.importModule.apply(null,arguments)}}},[e.scrapedModules.length==e.modules.length?n("v-list",{attrs:{"two-line":""}},[n("draggable",{attrs:{handle:".handle"},model:{value:e.modules,callback:function(t){e.modules=t},expression:"modules"}},e._l(e.modules,(function(t,i){return n("v-list-item",{key:i,staticClass:"handle"},[n("v-list-item-avatar",[n("v-icon",{staticClass:"grey darken-3",attrs:{dark:""}},[e._v(e._s(e.scrapedModules[i].icon||"mdi-package")+"\n                  ")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.scrapedModules[i].name)+"\n                    "),n("span",{staticStyle:{display:"inline-block",padding:"4px 8px","background-color":"#424242",color:"white","font-size":"12px","font-weight":"bold","border-radius":"16px"}},[e._v("\n                      "+e._s(e.scrapedModules[i].showInCustom)+"\n                    ")])]),e._v(" "),n("v-list-item-subtitle",{staticStyle:{"white-space":"break-spaces"},domProps:{innerHTML:e._s(e.scrapedModules[i].description)}})],1),e._v(" "),n("v-list-item-action",[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-x":"","offset-y":"",transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{color:"grey darken-1"}},[e._v("mdi-cog")])],1)]}}],null,!0)},[e._v(" "),n("v-expansion-panels",{staticStyle:{width:"100%"},attrs:{accordion:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",[e._v(" mdi-link ")])]},proxy:!0}],null,!0)},[e._v("\n                          URL\n                          ")]),e._v(" "),n("v-expansion-panel-content",[n("v-text-field",{attrs:{filled:"",label:"Module URL"},model:{value:t.url,callback:function(n){e.$set(t,"url",n)},expression:"m.url"}})],1)],1),e._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",{scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",[e._v(" mdi-script-text ")])]},proxy:!0}],null,!0)},[e._v("\n                          General settings\n                          ")]),e._v(" "),n("v-expansion-panel-content",[n("prism-editor",{staticStyle:{"max-height":"60vh"},attrs:{highlight:e.highlighter,"line-numbers":""},model:{value:t.config,callback:function(n){e.$set(t,"config",n)},expression:"m.config"}})],1)],1),e._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",{scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",[e._v(" mdi-account-circle-outline ")])]},proxy:!0}],null,!0)},[e._v("\n                          Student Settings\n                          ")]),e._v(" "),n("v-expansion-panel-content",[n("prism-editor",{staticStyle:{"max-height":"60vh"},attrs:{highlight:e.highlighter,"line-numbers":""},model:{value:t.studentConfig,callback:function(n){e.$set(t,"studentConfig",n)},expression:"m.studentConfig"}})],1)],1),e._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",{scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",[e._v(" mdi-clipboard-account-outline ")])]},proxy:!0}],null,!0)},[e._v("\n                          Teacher Settings\n                          ")]),e._v(" "),n("v-expansion-panel-content",[n("prism-editor",{staticStyle:{"max-height":"60vh"},attrs:{highlight:e.highlighter,"line-numbers":""},model:{value:t.teacherConfig,callback:function(n){e.$set(t,"teacherConfig",n)},expression:"m.teacherConfig"}})],1)],1),e._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",{scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",[e._v(" mdi-router-wireless ")])]},proxy:!0}],null,!0)},[e._v("\n                          Station Settings\n                          ")]),e._v(" "),n("v-expansion-panel-content",[n("prism-editor",{staticStyle:{"max-height":"60vh"},attrs:{highlight:e.highlighter,"line-numbers":""},model:{value:t.stationConfig,callback:function(n){e.$set(t,"stationConfig",n)},expression:"m.stationConfig"}})],1)],1),e._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",[e._v(" mdi-eye ")])]},proxy:!0}],null,!0)},[e._v("\n                          Show in\n                          ")]),e._v(" "),n("v-expansion-panel-content",[n("v-text-field",{attrs:{filled:"",label:"Comma separated list of rooms, or: lobby, * for all, teacher-only, station"},model:{value:t.showInCustom,callback:function(n){e.$set(t,"showInCustom",n)},expression:"m.showInCustom"}})],1)],1)],1)],1)],1),e._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(){e.modules.splice(i,1)}}},[n("v-icon",{attrs:{color:"grey darken-1"}},[e._v("mdi-close")])],1)],1)],1)})),1)],1):n("div",[n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item-avatar-two-line"}})],1),e._v(" "),n("v-list-item",[n("v-list-item-avatar",[n("v-icon",{staticClass:"grey darken-3",attrs:{dark:""}},[e._v(" mdi-link ")])],1),e._v(" "),n("v-list-item-content",[n("v-text-field",{attrs:{label:"Module URL",required:""},model:{value:e.moduleImportUrl,callback:function(t){e.moduleImportUrl=t},expression:"moduleImportUrl"}})],1),e._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{depressed:"",type:"submit",disabled:!e.validate_url(e.moduleImportUrl)}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-view-grid-plus ")]),e._v("\n                Add\n              ")],1)],1)],1)],1),e._v(" "),n("v-divider",{staticClass:"pb-2"}),e._v(" "),n("v-btn",{attrs:{href:"https://github.com/topics/edrys-module",target:"_blank"}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-github ")]),e._v("\n          Explore on GitHub\n        ")],1)],1),e._v(" "),n("v-tab-item",[e._v("\n        To add a new station, simply open this link on the client device:\n        "),n("br"),e._v(" "),n("br"),e._v(" "),n("blockquote",{staticStyle:{"margin-left":"15px"}},[n("a",{attrs:{href:"//"+e.stationUrl,target:"_blank"}},[e._v(e._s(e.stationUrl))]),e._v(" "),n("v-btn",{attrs:{icon:"",small:""},on:{click:e.copyStationUrl}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-content-copy")])],1)],1),e._v(" "),n("br")]),e._v(" "),n("v-tab-item",[n("v-row",[n("v-col",[n("v-btn",{attrs:{depressed:"",block:""},on:{click:function(t){return e.downloadClass("yaml")}}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-download ")]),e._v("\n              Download class file (.yml)\n            ")],1)],1),e._v(" "),n("v-col",[n("v-btn",{attrs:{depressed:"",block:""},on:{click:function(t){return e.downloadClass("json")}}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-download ")]),e._v("\n              Download class file (.json)\n            ")],1)],1)],1),e._v(" "),n("v-row",[n("v-col",[n("v-file-input",{attrs:{dense:"",rules:e.restoreFileRules,accept:".yml,.yaml,.json,application/yaml,application/json",label:"Restore class from file (yaml, json)","prepend-icon":"mdi-upload"},on:{change:e.restoreFile},model:{value:e.selectedFile,callback:function(t){e.selectedFile=t},expression:"selectedFile"}})],1),e._v(" "),n("v-col",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{"prepend-icon":"mdi-link"},on:{click:e.restoreURL}},[n("v-icon",[e._v("\n                    mdi-link\n                  ")]),e._v("\n                  Load\n                ")],1)],1),e._v(" "),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{dense:"",label:"class from URL"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.restoreURL.apply(null,arguments)}},model:{value:e.selectedURL,callback:function(t){e.selectedURL=t},expression:"selectedURL"}})],1)],1)],1)],1),e._v(" "),n("v-divider",{staticClass:"pb-2"}),e._v(" "),n("v-btn",{attrs:{href:"https://github.com/topics/edrys-classroom",target:"_blank"}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-github ")]),e._v("\n          Explore on GitHub\n        ")],1)],1)],1),e._v(" "),e.errorMessage?n("v-alert",{attrs:{"close-text":"Close Alert",color:"red",type:"error",dark:"",outlined:"",dismissible:""},on:{input:function(){e.errorMessage=void 0}}},[n("div",{domProps:{innerHTML:e._s(e.errorMessage)}})]):e._e()],1),e._v(" "),n("v-snackbar",{attrs:{timeout:2e3,value:e.restoreSuccess,absolute:"",bottom:"",right:"",color:"success"}},[e._v("\n    File restored - check everything is okay then save\n  ")]),e._v(" "),n("v-snackbar",{attrs:{timeout:600,value:e.saveSuccess,absolute:"",bottom:"",right:""}},[e._v("\n    Class saved successfully\n  ")]),e._v(" "),n("v-snackbar",{attrs:{timeout:1400,value:e.saveError,color:"error",absolute:"",bottom:"",right:""}},[e._v("\n    Sorry there was a problem saving, please try again\n  ")]),e._v(" "),n("v-card-actions",[n("div",{staticClass:"pr-4 float-right"},[n("v-badge",{staticStyle:{"margin-top":"30px"},attrs:{overlap:"",dot:"",color:"red",value:e.pendingEdits}},[n("v-btn",{attrs:{color:"primary",loading:e.saveLoading,disabled:e.saveLoading},on:{click:e.save}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-upload ")]),e._v("\n          Save\n        ")],1)],1)],1),e._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"float-right",staticStyle:{"margin-top":"30px","margin-right":"10px"},attrs:{color:"",depressed:""}},"v-btn",r,!1),o),[e._v("\n          Delete Class")])]}}])},[e._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-content",[e._v("Are you sure?\n\n            "),n("v-btn",{staticClass:"float-right",staticStyle:{"margin-top":"10px"},attrs:{color:"red",depressed:""},on:{click:e.deleteClass}},[e._v("\n              Yes, delete forever")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;L()(component,{VAlert:I.a,VBadge:V.a,VBtn:M.a,VCard:$.a,VCardActions:R.a,VCardText:R.c,VCheckbox:O.a,VCol:j.a,VDivider:E.a,VExpansionPanel:T.a,VExpansionPanelContent:A.a,VExpansionPanelHeader:F.a,VExpansionPanels:P.a,VFileInput:N.a,VForm:D.a,VIcon:J.a,VList:H.a,VListItem:z.a,VListItemAction:B.a,VListItemAvatar:G.a,VListItemContent:Y.a,VListItemSubtitle:Y.b,VListItemTitle:Y.c,VMenu:K.a,VRow:Q.a,VSkeletonLoader:W.a,VSnackbar:X.a,VSpacer:Z.a,VTab:ee.a,VTabItem:te.a,VTabs:ne.a,VTabsItems:se.a,VTextField:oe.a,VTextarea:re.a,VToolbar:ae.a,VToolbarTitle:ie.a})},517:function(e,t,n){var content=n(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("a3a3f8c0",content,!0,{sourceMap:!1})},553:function(e,t,n){"use strict";n(517)},554:function(e,t,n){var o=n(19)(!1);o.push([e.i,".prism-editor{background:#2d2d2d;color:#ccc;font-family:Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;font-size:14px;line-height:1.5;padding:5px;max-height:35 vh}",""]),e.exports=o}}]);