(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{5331:function(e,n,o){"use strict";o.r(n);var s=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("q-page",{staticClass:"fit column no-wrap justify-center items-center content-center"},[o("section",{staticClass:"q-ma-md q-pa-sm"},[o("h1",[e._v(e._s(e.current_weight))])]),o("q-btn",{attrs:{rounded:"",icon:e.ws.readyState===e.ws.CONNECTED?"phonelink_off":"phonelink",label:"reconnect",disable:e.ws.readyState!==e.ws.CLOSED},on:{click:function(n){return e.reconnect()}},scopedSlots:e._u([{key:"loading",fn:function(){return[o("q-spinner-gears")]},proxy:!0},{key:"after",fn:function(){return[o("q-icon",{attrs:{name:"close"}})]},proxy:!0}])}),o("section",{staticClass:"q-mt-md",staticStyle:{"min-width":"50vw"}},[o("q-input",{attrs:{filled:"",label:"Send Message"},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.messageSend()}},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",style:{opacity:""!==e.messagaeToSend?"inherit":"0.1"},attrs:{name:"close"},on:{click:function(n){e.messagaeToSend=""}}})]},proxy:!0},{key:"after",fn:function(){return[o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{round:"",dense:"",flat:"",icon:"send"},on:{click:function(n){return e.messageSend()}}})]},proxy:!0}]),model:{value:e.messagaeToSend,callback:function(n){e.messagaeToSend=n},expression:"messagaeToSend"}})],1)],1)},t=[],r={name:"PageSaveEntry",data(){return{ws:new WebSocket("ws://127.0.0.1:8082/"),current_weight:0,messagaeToSend:"Hello World :-)",log:void 0}},methods:{reconnect(){console.group("reconnect()"),console.log("ws.readyState:",this.ws.readyState),this.ws.readyState===WebSocket.CLOSED&&this.setup_ws_connection(),console.groupEnd()},messageSend(){console.group("messageSend"),console.log("messagaeToSend:",this.messagaeToSend),this.ws.send(this.messagaeToSend),console.groupEnd()},messageReceive(e){const n=e.data;this.current_weight=n},onopen(e){console.log("WebSocket is open now.",e),this.$refs.mylog.addEntryIn(e.type)},onclose(e){console.log("WebSocket is closed now.",e),this.$refs.mylog.addEntryIn(e.type),this.current_weight="- - - -"},onerror(e){console.log("WebSocket error:",e),this.$refs.mylog.addEntryIn(e.type),this.current_weight="- - - -"},setup_ws_connection(){this.ws=null,this.ws=new WebSocket("ws://127.0.0.1:8082/"),console.log("created websocket server"),this.ws.onmessage=this.messageReceive,this.ws.onopen=this.onopen,this.ws.onclose=this.onclose,this.ws.onerror=this.onerror}},mounted:function(){console.group("mounted.."),this.setup_ws_connection(),console.groupEnd()},beforeDestroy:function(){console.group("beforeDestroy.."),console.groupEnd()},filters:{},components:{}},c=r,a=o("2877"),i=o("9989"),l=o("9c40"),d=o("cf57"),u=o("0016"),p=o("27f9"),g=o("714f"),w=o("eebe"),m=o.n(w),f=Object(a["a"])(c,s,t,!1,null,null,null);n["default"]=f.exports;m()(f,"components",{QPage:i["a"],QBtn:l["a"],QSpinnerGears:d["a"],QIcon:u["a"],QInput:p["a"]}),m()(f,"directives",{Ripple:g["a"]})}}]);