webpackJsonp([35],{RIhi:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("IHPB"),e=i.n(a),n={data:function(){return{page:1,pageSize:10,cashList:[]}},mounted:function(){this.getCashList()},methods:{getCashList:function(){var t=this;this.$api.cashList({page:this.page,limit:this.pageSize},function(s){var i=s.data;t.cashList=[].concat(e()(i)),i.length<t.pageSize&&t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone")})},loadMore:function(){var t=this;this.$api.cashList({page:++this.page,limit:this.pageSize},function(s){var i=s.data;t.cashList=[].concat(e()(t.cashList),e()(i)),i.length<t.pageSize&&t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone"),t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad")})}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"cashlist"},[i("yd-infinitescroll",{ref:"infinitescrollDemo",attrs:{callback:t.loadMore}},t._l(t.cashList,function(s,a){return i("div",{key:a,staticClass:"cashlist-item",attrs:{slot:"list"},slot:"list"},[i("div",{staticClass:"cashlist-content"},[i("div",{staticClass:"cashlist-top"},[i("p",{staticClass:"cashstate"},[t._v("状态："+t._s(s.type))]),t._v(" "),i("p",{staticClass:"cashtime"},[t._v("时间："+t._s(s.ctime))])]),t._v(" "),i("div",{staticClass:"cashlist-bottom"},[i("p",{staticClass:"cashnum"},[t._v("卡号："+t._s(s.card_number))]),t._v(" "),i("p",{staticClass:"cashsum"},[t._v("提现金额："+t._s(s.money))])])])])}),0)],1)},staticRenderFns:[]};var l=i("C7Lr")(n,c,!1,function(t){i("v13W")},null,null);s.default=l.exports},v13W:function(t,s){}});
//# sourceMappingURL=35.7d9b0be1573f83d1c107.js.map