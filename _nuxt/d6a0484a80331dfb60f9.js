(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{308:function(t,e,r){var content=r(322);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("1df579f2",content,!0,{sourceMap:!1})},321:function(t,e,r){"use strict";var o=r(308);r.n(o).a},322:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".projects{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:95%}.title-section{border-bottom:1px solid #ccc}.description-section,.title-section{max-width:600px;width:70%;margin:auto}i{cursor:pointer}@media(min-width:750px){.medium-screen-dimensions{width:80%!important;height:auto!important}.project-tech a{margin-top:8px;margin-right:5px}}@media(max-width:650px){.description-section p{margin-bottom:0!important}.project-tech{-webkit-box-align:center;align-items:center;margin-top:5px;padding:20px 0}.project-tech a{margin-top:10px!important;margin-right:20px;justify-self:center}.medium-screen-dimensions{width:70%;max-width:370px}}",""])},337:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{snackbarTimeout:3e3,page:1,projects:[{image:"mainsite.jpg",title:"Main Site",status:"Finished",description:"A main site built with Nuxt.js and statically generated.",url:"https://github.com/ZachBaird/MainSiteRefresh",liveSite:!0,liveUrl:"/",liveText:"You're on it!",tech:[{snackbar:"Nuxt.js",img:"mdi-nuxt",color:"teal"},{snackbar:"Vuetify.js",img:"mdi-vuetify",color:"blue"}]},{image:"caesarcipher.jpg",title:"CaesarCipher",status:"Finished",description:"A Ruby script that runs a CaesarCipher on a string of text.",url:"https://github.com/ZachBaird/CaesarCipher",liveSite:!1,liveUrl:"",tech:[{snackbar:"Ruby",img:"mdi-ruby",color:"red"}]},{image:"oreoweather.jpg",title:"OreoWeather",status:"On hold",description:"A .Net Core weather application for my grandfather.",url:"https://github.com/ZachBaird/OreoWeather",liveSite:!0,liveUrl:"https://darkskyui.azurewebsites.net",liveText:"See live site",tech:[{snackbar:"C# .Net Core",img:"mdi-dot-net",color:"purple"},{snackbar:"Bootstrap",img:"mdi-bootstrap",color:"purple"}]},{image:"",title:"Python Automation",status:"Backlog",description:"Python scripts for automation.",url:"https://github.com/ZachBaird/Python_Automation",live:!1,liveUrl:"",tech:[{snackbar:"Python",img:"mdi-language-python-text",color:"green"}]},{image:"djangorealestate.jpg",title:"Realestate app",status:"Bugfix",description:"A real estate application built with the Django framework.",url:"https://github.com/ZachBaird/Real-Estate-App",live:!1,liveUrl:"",tech:[{snackbar:"Python",img:"mdi-language-python-text",color:"green"},{snackbar:"Bootstrap",img:"mdi-bootstrap",color:"purple"}]}]}}},n=(r(321),r(55)),c=r(74),l=r.n(c),m=r(163),d=r(307),h=r(334),v=r(114),x=r(101),f=r(71),w=r(333),y=r(335),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projects"},[r("v-container",{staticClass:"project"},t._l(t.projects,(function(e){return r("div",{key:e.title,staticClass:"mb-10"},[r("v-img",{directives:[{name:"show",rawName:"v-show",value:e.image,expression:"project.image"}],staticClass:"mx-auto medium-screen-dimensions",attrs:{src:e.image,"lazy-src":e.image,height:"175px",alt:"Project Screenshot",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"accent"}})],1)]},proxy:!0}],null,!0)}),t._v(" "),r("h2",{staticClass:"title-section font-weight-regular text-center my-3"},[t._v("\n        "+t._s(e.title)+" | Status: "+t._s(e.status)+"\n      ")]),t._v(" "),r("div",{staticClass:"description-section"},[r("p",{staticClass:"mt-3"},[t._v("\n          "+t._s(e.description)+"\n        ")]),t._v(" "),r("div",{staticClass:"project-tech"},[r("div",{staticStyle:{display:"inline"}},[t._v("\n            Stack:\n            "),t._l(e.tech,(function(e){return r("div",{key:e.snackbar,staticStyle:{display:"inline","text-align":"center"}},[r("v-tooltip",{attrs:{color:"accent",top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on;return[r("v-icon",t._g({attrs:{color:e.color}},n),[t._v("\n                    "+t._s(e.img)+"\n                  ")])]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(e.snackbar))])])],1)}))],2),t._v(" "),r("br"),t._v(" "),r("v-btn",{attrs:{href:e.url,target:"_blank",outlined:"",color:"primary"}},[t._v("\n            See code\n          ")]),t._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.liveSite,expression:"project.liveSite"}],attrs:{href:e.liveUrl,target:"_blank",outlined:"",color:"accent"}},[t._v("\n            "+t._s(e.liveText)+"\n          ")])],1)]),t._v(" "),r("v-divider",{staticClass:"mt-8"})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VContainer:d.a,VDivider:h.a,VIcon:v.a,VImg:x.a,VProgressCircular:f.a,VRow:w.a,VTooltip:y.a})}}]);