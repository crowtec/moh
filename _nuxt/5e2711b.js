(window.webpackJsonp=window.webpackJsonp||[]).push([[17,14,16],{497:function(e,t,l){var content=l(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(37).default)("44bac162",content,!0,{sourceMap:!1})},498:function(e,t,l){"use strict";l.r(t);var r={props:{lineWidth:{type:String,default:"w-full"},lineThickness:{type:String,default:"border-t"},lineColor:{type:String,default:"bg-black border-black"},renderCircle:{type:Boolean,default:!1},renderArrow:{type:Boolean,default:!1}}},n=(l(499),l(15)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"flex items-center w-full"},[l("div",{class:[e.lineWidth,e.lineThickness,e.lineColor]}),e._v(" "),e.renderCircle?l("div",{staticClass:"rounded-full w-3 h-3",class:e.lineColor}):e._e(),e._v(" "),e.renderArrow?l("div",{staticClass:"arrow",class:e.lineColor}):e._e()])}),[],!1,null,"1b922a4e",null);t.default=component.exports},499:function(e,t,l){"use strict";l(497)},500:function(e,t,l){var r=l(36)((function(i){return i[1]}));r.push([e.i,'.arrow[data-v-1b922a4e]{position:relative;content:"";display:inline-block;width:.6em;height:.6em;border-right-width:.15em;border-right-style:solid;border-top-width:.15em;border-top-style:solid;transform:rotate(45deg);margin-left:-.55em}',""]),r.locals={},e.exports=r},525:function(e,t,l){var content=l(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(37).default)("36b9d426",content,!0,{sourceMap:!1})},533:function(e,t,l){var content=l(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(37).default)("79085798",content,!0,{sourceMap:!1})},534:function(e,t,l){"use strict";l(525)},535:function(e,t,l){var r=l(36)((function(i){return i[1]}));r.push([e.i,".feature-card[data-v-d6f198e4]{color:#cacaca}",""]),r.locals={},e.exports=r},538:function(e,t,l){"use strict";l.r(t);var r={props:{cardTitle:{type:String,default:""},cardParagraph:{type:String,default:""}},data:function(){return{}}},n=(l(534),l(15)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("article",{staticClass:"feature-card flex flex-col h-full w-1/2 lg:w-full lg:max-w-xl"},[l("h4",{staticClass:"uppercase text-white font-anek-700 text-4xl lg:text-7xl mt-8 lg:mt-14 mb-3"},[e._v("\n    "+e._s(e.cardTitle)+"\n  ")]),e._v(" "),l("p",{staticClass:"font-anek-500 text-xl lg:text-2xl mb-10 lg:mb-14"},[e._v("\n    "+e._s(e.cardParagraph)+"\n  ")])])}),[],!1,null,"d6f198e4",null);t.default=component.exports},544:function(e,t,l){"use strict";l(533)},545:function(e,t,l){var r=l(36)((function(i){return i[1]}));r.push([e.i,".features[data-v-ecb422a0]{background:linear-gradient(0deg,rgba(52,52,52,.72),rgba(52,52,52,.72)),url(https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/features/bg-features.png) no-repeat 50%;background-size:cover}.vertical-line[data-v-ecb422a0]{height:420px;width:10%;transform:rotate(15deg) translateY(50px);border-left:2px solid #fff}@media(min-width:1024px){.vertical-line[data-v-ecb422a0]{border-left:4px solid #fff}}@media(min-width:1500px){.vertical-line[data-v-ecb422a0]{transform:rotate(15deg) translateY(70px)}}.animate[data-v-ecb422a0]{width:200%;-webkit-animation:marquee-data-v-ecb422a0 10s linear infinite;animation:marquee-data-v-ecb422a0 10s linear infinite}@-webkit-keyframes marquee-data-v-ecb422a0{0%{left:0}to{left:-100%}}@keyframes marquee-data-v-ecb422a0{0%{left:0}to{left:-100%}}",""]),r.locals={},e.exports=r},571:function(e,t,l){"use strict";l.r(t);function r(e){throw new TypeError('"'+e+'" is read-only')}l(11),l(84),l(62);var n={data:function(){return{features:[{name:"technology",color:"text-white"},{name:"gamification",color:"violet-50-color"},{name:"tourism",color:"text-white"},{name:"augmentedReality",color:"violet-50-color"},{name:"narrative",color:"text-white"}]}},mounted:function(){this.textAnimation()},methods:{textAnimation:function(){var e=this.$gsap,t=e.utils.toArray([".wrapper__scrolling-words, .wrapper__scrolling-words--word"]);setTimeout((function(){t.map((function(l,n,o){if(0===n)t[o.length-1].clientWidth,r("totalWidth");else if(l.previousElementSibling){l.previousElementSibling.clientWidth;r("totalWidth")}e.set(l,{x:0})})),e.timeline().to(".wrapper__scrolling-words li",{duration:50,ease:"none",x:"+=".concat(0),modifiers:{x:e.utils.unitize((function(e){return parseFloat(e)%0}))},repeat:-1})}),500)}}},o=(l(544),l(15)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"features flex flex-col justify-center overflow-hidden h-full w-full py-16 lg:py-20 xl:p-12 2xl:px-0"},[l("div",{staticClass:"container relative flex flex-col xl:flex-row"},[l("FeatureCard",{staticClass:"mb-0 xl:mr-8",attrs:{cardTitle:e.$t("landing.features.feature1.title"),cardParagraph:e.$t("landing.features.feature1.paragraph")}}),e._v(" "),l("Cord",{staticClass:"absolute xl:hidden top-1/2 -translate-y-1/2 left-0 pb-12",attrs:{lineWidth:"w-[80%]",lineThickness:"border-t-[2px]",lineColor:"white-line"}}),e._v(" "),l("div",{staticClass:"vertical-line hidden xl:inline"}),e._v(" "),l("Cord",{staticClass:"absolute !block md:flex xl:!hidden rotate-[135deg] top-1/3 md:top-1/2 right-1/2 translate-x-[75%] md:translate-x-1/2 mr-24 md:mr-10 mt-10",attrs:{lineWidth:"md:w-[50%]",lineThickness:"border-t-[2px] lg:border-t-[4px]",lineColor:"white-line"}}),e._v(" "),l("FeatureCard",{staticClass:"items-end self-end xl:self-start text-right xl:text-left pt-6 xl:pt-0 xl:ml-8",attrs:{cardTitle:e.$t("landing.features.feature2.title"),cardParagraph:e.$t("landing.features.feature2.paragraph")}})],1),e._v(" "),l("section",{staticClass:"relative animate flex border-t-[4px] border-b-[4px] white-line py-10 lg:py-24"},[l("ul",{staticClass:"flex justify-around"},[e._l(e.features,(function(t,r){return l("li",{key:r,staticClass:"justify-around w-full h-full uppercase text-center whitespace-nowrap font-oswald-700 text-5xl leading-[80px] lg:text-7xl mx-8",class:t.color},[e._v("\n        "+e._s(e.$t("landing.features.featuresName."+t.name))+"\n      ")])})),e._v(" "),e._l(e.features,(function(t,r){return l("li",{key:r+t.name,staticClass:"justify-around w-full h-full uppercase text-center whitespace-nowrap font-oswald-700 text-5xl leading-[80px] lg:text-7xl mx-8",class:t.color},[e._v("\n        "+e._s(e.$t("landing.features.featuresName."+t.name))+"\n      ")])}))],2)])])}),[],!1,null,"ecb422a0",null);t.default=component.exports;installComponents(component,{FeatureCard:l(538).default,Cord:l(498).default})}}]);