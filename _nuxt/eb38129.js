(window.webpackJsonp=window.webpackJsonp||[]).push([[35,25],{560:function(e,t,o){var content=o(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(40).default)("5d23da80",content,!0,{sourceMap:!1})},588:function(e,t,o){"use strict";o(560)},589:function(e,t,o){var c=o(39)(!1);c.push([e.i,".message-rxd-textbox[data-v-514d6328]{width:500px;height:500px}",""]),e.exports=c},609:function(e,t,o){var content=o(698);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(40).default)("50e111ee",content,!0,{sourceMap:!1})},619:function(e,t,o){"use strict";o.r(t);o(1);var c=o(123),n={data:function(){return{chatMessage2:"",messageRxd:"",message2Rxd:"",message3Rxd:"",testMsg:{id:"xyz"},socket:null}},computed:Object(c.d)(["chatMessages"]),mounted:function(){this.socket=this.$nuxtSocket({channel:"/index",reconnection:!1})},methods:{getMessage:function(){var e=this;return new Promise((function(t){e.socket.emit("getMessage",{id:"abc123"},(function(o){e.messageRxd=o,t()}))}))}}},r=(o(588),o(99)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("h2",[e._v("Component-defined method:")]),e._v(" "),e._m(0),e._v(" "),o("label",[e._v("If you can see text appear in the box, it worked!")]),e._v(" "),o("button",{on:{click:function(t){return e.getMessage()}}},[e._v("Get Message")]),e._v(" "),o("b-form-textarea",{attrs:{placeholder:"[messageRxd] Waiting for you to click the 'Get Message' button...",rows:"3","max-rows":"6"},model:{value:e.messageRxd,callback:function(t){e.messageRxd=t},expression:"messageRxd"}}),e._v(" "),o("b-form-textarea",{attrs:{placeholder:"[chatMessages] Formatted messages will appear here",rows:"3","max-rows":"6"},model:{value:e.chatMessages,callback:function(t){e.chatMessages=t},expression:"chatMessages"}})],1),e._v(" "),o("div",[o("h2",[e._v("Namespace config:")]),e._v(" "),e._m(1),e._v(" "),o("label",[e._v("If you can see text appear in the box, it worked!")]),e._v(" "),o("button",{on:{click:function(t){return e.getMessage2()}}},[e._v("Get Message2")]),e._v(" "),o("b-form-textarea",{attrs:{placeholder:"[message2Rxd] Waiting for you to click the 'Get Message' button...",rows:"3","max-rows":"6"},model:{value:e.message2Rxd,callback:function(t){e.message2Rxd=t},expression:"message2Rxd"}}),e._v(" "),o("b-form-textarea",{attrs:{placeholder:"[message3Rxd] Waiting for you to click the 'Get Message' button...",rows:"3","max-rows":"6"},model:{value:e.message3Rxd,callback:function(t){e.message3Rxd=t},expression:"message3Rxd"}}),e._v(" "),o("b-form-textarea",{attrs:{placeholder:"[chatMessage2] Formatted messages will appear here",rows:"3","max-rows":"6"},model:{value:e.chatMessage2,callback:function(t){e.chatMessage2=t},expression:"chatMessage2"}})],1)])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("\n      This example uses "),o("code",[e._v('"getMessage()"')]),e._v(" defined in the component\n      and consumes "),o("code",[e._v("chatMessages")]),e._v(" that were sent directly to Vuex\n    ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("\n      This example uses the namespace config specified entirely in\n      "),o("code",[e._v("nuxt.config")]),e._v(". The only thing needed in the component is data\n      definitions\n    ")])}],!1,null,"514d6328",null);t.default=component.exports},697:function(e,t,o){"use strict";o(609)},698:function(e,t,o){var c=o(39)(!1);c.push([e.i,'.index-container[data-v-f29d3e60]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title[data-v-f29d3e60]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:24px;color:#35495e;letter-spacing:1px}.subtitle[data-v-f29d3e60]{font-weight:300;font-size:22px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-f29d3e60]{padding-top:15px}',""]),e.exports=c},747:function(e,t,o){"use strict";o.r(t);var c={},n=(o(697),o(99)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container index-container"},[e._m(0),e._v(" "),o("div",[o("messages",{staticStyle:{height:"500px","overflow-y":"scroll"}}),e._v(" "),o("nuxt-link",{attrs:{to:"examples"}},[e._v("Thirsty for more examples?")]),e._v(" "),o("br"),e._v(" "),o("nuxt-link",{attrs:{to:"rooms"}},[e._v("Feeling Ready for...Chat Rooms?")]),e._v(" "),o("br"),e._v(" "),o("nuxt-link",{attrs:{to:"ioStatus"}},[e._v("When in doubt, check the IO Status")])],1)])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",{staticClass:"title"},[e._v("nuxt-socket-io")]),e._v(" "),o("h2",{staticClass:"subtitle"},[e._v("Nuxt with basic socket.io examples")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.npmjs.com/package/nuxt-socket-io",rel:"nofollow"}},[o("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://camo.githubusercontent.com/887c1a47d359a1337b35e3c568f846eda89f15a2/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6e7578742d736f636b65742d696f",alt:"npm","data-canonical-src":"https://img.shields.io/npm/v/nuxt-socket-io"}})]),e._v(" "),o("a",{attrs:{href:"https://www.npmjs.com/package/nuxt-socket-io",rel:"nofollow"}},[o("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://camo.githubusercontent.com/31d12d8ec55dfcc32785bf425f3085a3ddfff270/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f6e7578742d736f636b65742d696f",alt:"npm","data-canonical-src":"https://img.shields.io/npm/dt/nuxt-socket-io"}})]),e._v(" "),o("a",{attrs:{href:"https://gitlab.com/richardeschloss/nuxt-socket-io",rel:"nofollow"}},[o("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://camo.githubusercontent.com/ae4e13b13b3a81f7242522ef74a47c2a063baf14/68747470733a2f2f6769746c61622e636f6d2f72696368617264657363686c6f73732f6e7578742d736f636b65742d696f2f6261646765732f6d61737465722f706970656c696e652e737667",alt:"","data-canonical-src":"https://gitlab.com/richardeschloss/nuxt-socket-io/badges/master/pipeline.svg"}})]),e._v(" "),o("a",{attrs:{href:"https://gitlab.com/richardeschloss/nuxt-socket-io",rel:"nofollow"}},[o("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://camo.githubusercontent.com/dc0164a5dc073b69bc8f144d8755e4e4ff7ea467/68747470733a2f2f6769746c61622e636f6d2f72696368617264657363686c6f73732f6e7578742d736f636b65742d696f2f6261646765732f6d61737465722f636f7665726167652e737667",alt:"","data-canonical-src":"https://gitlab.com/richardeschloss/nuxt-socket-io/badges/master/coverage.svg"}})]),e._v(" "),o("a",{attrs:{href:"https://github.com/richardeschloss/nuxt-socket-io/blob/development/LICENSE"}},[o("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://camo.githubusercontent.com/0193c7aec674291ee296569a3ff12e3afd65ce06/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6e7578742d736f636b65742d696f",alt:"NPM","data-canonical-src":"https://img.shields.io/npm/l/nuxt-socket-io"}})])]),e._v(" "),o("div",{staticClass:"links"},[o("a",{staticClass:"button--green",attrs:{href:"https://richardeschloss.github.io/nuxt-socket-io/",target:"_blank"}},[e._v("\n        Documentation\n      ")]),e._v(" "),o("a",{staticClass:"button--grey",attrs:{href:"https://github.com/richardeschloss",target:"_blank"}},[e._v("\n        GitHub\n      ")])])])}],!1,null,"f29d3e60",null);t.default=component.exports;installComponents(component,{Messages:o(619).default})}}]);