(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{1517:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit row wrap justify-around items-center content-center"},e._l(e.options,(function(t){return a("q-btn",{key:t.title,class:t.value===e.value?e.activeClass:"",attrs:{stack:""},on:{click:function(a){return e.$emit("input",t.value)}}},[t.icon?a("q-icon",{attrs:{size:e.size,name:t.icon}}):t.image_url?a("q-img",{style:e.img_style,attrs:{src:t.image_url,"spinner-color":"white"}}):e._e(),a("div",[e._v(e._s(t.label))])],1)})),1)},n=[],i={name:"QBtnToggleGrid",data(){return{}},methods:{},computed:{img_style:function(){return"width:"+this.size+"; height:"+this.size+";"}},props:{value:{type:String,required:!0},options:{type:Array,required:!0},size:{type:String,required:!1,default:"text-orange"},activeClass:{type:String,required:!1,default:"text-orange"}}},o=i,r=a("2877"),s=a("9c40"),c=a("0016"),u=a("068f"),d=a("eebe"),p=a.n(d),v=Object(r["a"])(o,l,n,!1,null,null,null);t["a"]=v.exports;p()(v,"components",{QBtn:s["a"],QIcon:c["a"],QImg:u["a"]})},d44f:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},[a("h3",[e._v("TODO: implement load and view and Selection of package options")]),a("h1",[e._v("TODO: implement load and view and Selection of Place options")]),a("br"),a("p",[e._v("\n            model: "+e._s(e.selectedValue)+"\n        ")]),a("br"),a("q-btn-toggle-grid",{attrs:{options:e.btn_list,"active-class":"background-orange",push:"",rounded:"",stack:"",size:"20mm"},model:{value:e.selectedValue,callback:function(t){e.selectedValue=t},expression:"selectedValue"}})],1)},n=[],i=a("1517"),o={name:"PageSelectPlace",data(){return{selectedValue:"car",btn_list:[{label:"boat",value:"boat",icon:"directions_boat"},{label:"car",value:"car",icon:"directions_car"},{label:"railway",value:"railway",icon:"directions_railway"},{label:"world",value:"world",icon:"pets"},{label:"sun",value:"sun",icon:"sun"},{label:"rain",value:"rain",icon:"rain"},{label:"cloud",value:"cloud",icon:"cloud"},{label:"wind",value:"wind",icon:"wind"},{label:"railway",value:"railway",icon:"directions_railway"},{label:"world",value:"world",icon:"pets"},{label:"test",value:"test",icon:"directions_boat"}]}},filters:{},components:{QBtnToggleGrid:i["a"]}},r=o,s=a("2877"),c=a("9989"),u=a("6a67"),d=a("eebe"),p=a.n(d),v=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=v.exports;p()(v,"components",{QPage:c["a"],QBtnToggle:u["a"]})}}]);