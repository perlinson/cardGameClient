(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{626:function(e,t,r){"use strict";r.r(t);r(15),r(11),r(13),r(6),r(20),r(17),r(21);var o=r(1),n=r(136);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={data:function(){return{dialog:!1,headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:d(d({},Object(n.c)("order",["allOrders"])),{},{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(e){e||this.close()}},created:function(){this.fetchOrders()},methods:d(d({},Object(n.b)("order",["fetchOrders","addOrder","updateOrder","deleteOrder"])),{},{editItem:function(e){this.editedIndex=this.allOrders.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&this.deleteOrder(e)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?this.updateOrder(this.editedItem):this.addOrder(this.editedItem),this.close()}})},v=r(41),m=r(68),f=r.n(m),O=r(459),h=r(480),x=r(479),I=r(472),_=r(475),y=r(624),k=r(646),w=r(502),j=r(225),C=r(473),V=r(474),D=r(509),P=r(84),T=r(3),$=Object(T.i)("v-toolbar__title"),S=Object(T.i)("v-toolbar__items"),component=(P.a,Object(v.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("v-card",{attrs:{outlined:"",width:"100%"}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.allOrders,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v("My CRUD")]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"primary",dark:""}},"v-btn",n,!1),o),[e._v("New Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n          mdi-pencil\n        ")]),e._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"},on:{click:e.fetchOrders}},[e._v("Reset")])]},proxy:!0}],null,!0)})],1)],1)}),[],!1,null,null,null));t.default=component.exports;f()(component,{VBtn:O.a,VCard:h.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:I.a,VContainer:_.a,VDataTable:y.a,VDialog:k.a,VDivider:w.a,VIcon:j.a,VRow:C.a,VSpacer:V.a,VTextField:D.a,VToolbar:P.a,VToolbarTitle:$})}}]);