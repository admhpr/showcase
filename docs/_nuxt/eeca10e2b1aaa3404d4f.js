(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(t,e,n){"use strict";var o=new(n(0).a);e.a=o},167:function(t,e,n){"use strict";var o=n(166),l={props:{title:{String:String,required:!0},showButton:{Boolean:Boolean,default:!1}},methods:{onToggle:function(t){o.a.$emit("button-toggled",{value:t.value})}}},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"section-title text-center"},[n("h2",{staticClass:"animate text-over-block"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"divider-draft center"}),t._v(" "),n("br"),t._v(" "),n("no-ssr",[t.showButton?n("toggle-button",{attrs:{value:!1,color:"#82C7EB",width:"95",height:"30",labels:{checked:"Glance",unchecked:"Read"}},on:{change:function(e){return t.onToggle(e)}}}):t._e()],1)],1)])])])])}),[],!1,null,"5c8c689a",null);e.a=component.exports},168:function(t,e,n){"use strict";var o=n(166),l=n(167),c={props:{title:String,showButton:{Boolean:Boolean,default:!1}},data:function(){return{showAltContent:!1}},created:function(){var t=this;o.a.$on("button-toggled",(function(e){t.showAltContent=e.value}))},components:{SectionTitle:l.a}},r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section-container active fadeIn"},[n("div",{staticClass:"section-block"},[n("div",{staticClass:"container"},[t.title?n("section-title",{attrs:{showButton:t.showButton,title:t.title}}):t._e()],1)]),t._v(" "),t.showAltContent?t._e():n("div",[t._t("content")],2),t._v(" "),t.showAltContent?n("div",[t._t("altContent")],2):t._e()])])}),[],!1,null,"cd1b07ec",null);e.a=component.exports},202:function(t,e,n){"use strict";n.r(e);var o=n(168),l=[{title:"Daniel Shiffman",location:"https://shiffman.net/"},{title:"Niall Kader",location:"https://www.linkedin.com/in/niall-kader-48b5469/"},{title:"Sarah Drasner",location:"https://sarahdrasnerdesign.com/"},{title:"Evan You",location:"https://evanyou.me/"},{title:"Kent Safranski",location:"https://fluidbyte.github.io/"},{title:"Marshall Pierce",location:"https://mpierce.org/ "},{title:"Isaac Weaver",location:"https://github.com/wisaac407"},{title:"Matthew Metzger",location:"https://www.linkedin.com/in/matthewmetzger/"},{title:"Derek Sivers",location:"https://sivers.org/"}],c={data:function(){return{acknowledgements:l}},components:{SectionContainer:o.a}},r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section-container",{attrs:{title:"Acknowledgements"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-10"},[n("p",[t._v("These are some people that have helped make me a better programmer (whether they realise it or not):")]),t._v(" "),n("div",{staticClass:"links"},[n("ul",t._l(t.acknowledgements,(function(e){return n("a",{key:e.title,attrs:{href:e.location}},[n("li",[t._v(t._s(e.title))])])})),0)])])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);