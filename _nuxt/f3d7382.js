(window.webpackJsonp=window.webpackJsonp||[]).push([[27,9],{549:function(t,n){t.exports={checkBanlist:function(t){if(void 0!==t.banlist_info&&void 0!==t.banlist_info.ban_tcg)switch(t.banlist_info.ban_tcg){case"Banned":return 0;case"Limited":return 1;case"Semi-Limited":return 2}return 3},checkCardType:function(t){var n;switch(t.type){case"XYZ Monster":case"Fusion Monster":case"Link Monster":case"Synchro Monster":n="extra";break;default:n="main"}return n}}},550:function(t,n,e){"use strict";e.r(n);var r=e(549),c=e.n(r),l={props:{card:Object},data:function(){return{limit:c.a.checkBanlist(this.$props.card)}},methods:{}},o=e(99),d=e(248),h=e.n(d),m=e(722),f=e(723),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[3!==t.limit?e("v-badge",{attrs:{color:"red accent-4",content:t.limit,overlap:""}},[e("img",t._g(t._b({attrs:{src:t.card.card_images[0].image_url,alt:t.card.name}},"img",c,!1),r))]):e("img",t._g(t._b({attrs:{src:t.card.card_images[0].image_url,alt:t.card.name}},"img",c,!1),r))]}}])},[t._v(" "),e("span",[t._v(t._s(t.card.name))])])}),[],!1,null,null,null);n.default=component.exports;h()(component,{VBadge:m.a,VTooltip:f.a})},731:function(t,n,e){"use strict";e.r(n);var r={props:["gamestate","playerData"],methods:{handleClick:function(){}},data:function(){return{playerHand:this.playerData.hand,canPlay:this.playerData.canPlay}},computed:{playerHand:function(){return this.playerData.hand},canPlay:function(){return this.playerData.canPlay}},watch:{"gameState.phase":function(){this.playerHand=newVal.hand,this.canPlay=newVal.canPlay}}},c=e(99),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"player-hand-container"},[e("div",{staticClass:"player-hand"},t._l(t.playerHand,(function(n,r){return e("Card",{key:r,on:{click:t.handleClick}})})),1),t._v(" "),e("div",{staticClass:"button-container"},[e("GameButton",{attrs:{disabled:!t.canPlay,text:"Play"},on:{click:t.handleClick}}),t._v(" "),e("GameButton",{attrs:{disabled:!t.canPlay,text:"Play"},on:{click:t.handleClick}})],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Card:e(550).default})}}]);