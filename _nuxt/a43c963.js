(window.webpackJsonp=window.webpackJsonp||[]).push([[4,14,24,25],{497:function(t,e,l){var content=l(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("44bac162",content,!0,{sourceMap:!1})},498:function(t,e,l){"use strict";l.r(e);var n={props:{lineWidth:{type:String,default:"w-full"},lineThickness:{type:String,default:"border-t"},lineColor:{type:String,default:"bg-black border-black"},renderCircle:{type:Boolean,default:!1},renderArrow:{type:Boolean,default:!1}}},o=(l(499),l(15)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center w-full"},[l("div",{class:[t.lineWidth,t.lineThickness,t.lineColor]}),t._v(" "),t.renderCircle?l("div",{staticClass:"rounded-full w-3 h-3",class:t.lineColor}):t._e(),t._v(" "),t.renderArrow?l("div",{staticClass:"arrow",class:t.lineColor}):t._e()])}),[],!1,null,"1b922a4e",null);e.default=component.exports},499:function(t,e,l){"use strict";l(497)},500:function(t,e,l){var n=l(36)((function(i){return i[1]}));n.push([t.i,'.arrow[data-v-1b922a4e]{position:relative;content:"";display:inline-block;width:.6em;height:.6em;border-right-width:.15em;border-right-style:solid;border-top-width:.15em;border-top-style:solid;transform:rotate(45deg);margin-left:-.55em}',""]),n.locals={},t.exports=n},523:function(t,e,l){"use strict";l.r(e);var n={props:{mainTitleText:{type:String,default:""},titleStyle:{type:String,default:""},imageDisplay:{type:String,default:"inline"},imgPath:{type:String,default:""},imgName:{type:String,default:""},lineColor:{type:String,default:"border-white"}}},o=l(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"flex flex-col items-center w-full pt-20"},[l("div",{staticClass:"container"},[l("h2",{staticClass:"w-full uppercase title-primary-color font-oswald-500 text-7xl xl:text-8xl pb-8",class:t.titleStyle},[t._v("\n        "+t._s(t.mainTitleText)+"\n      ")])]),t._v(" "),l("Cord",{attrs:{lineWidth:"w-[75%] lg:w-[60%] ",lineThickness:"border-t-[4px]",lineColor:t.lineColor}})],1)])}),[],!1,null,"79362504",null);e.default=component.exports;installComponents(component,{Cord:l(498).default})},539:function(t,e,l){"use strict";l.r(e);var n={props:{listTitle:{type:String,default:""},imgListPath:{type:String,default:""},imgListName:{type:String,default:""}},computed:{}},o=l(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",{staticClass:"flex items-center w-full text-white font-anek-700 text-2xl py-[1rem]"},[l("figure",{staticClass:"flex min-w-[100px] h-20 lg:min-h-[110px]"},[l("img",{staticClass:"object-contain h-full w-full",attrs:{src:t.imgListPath,alt:t.imgListName}})]),t._v(" "),l("p",{staticClass:"text-xl lg:text-2xl ml-4"},[t._v(t._s(t.listTitle))])])}),[],!1,null,null,null);e.default=component.exports},575:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{applications:[{articleStyle:"lg:max-w-2xl w-full mb-20 lg:mb-0 lg:mr-[5rem]",title:"indoorAdventures.title",appList:[{name:"indoorAdventures.useCases.use1.name",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/applications/wheel.png",imageName:"indoorAdventures.useCases.use1.imgAlt"},{name:"indoorAdventures.useCases.use2.name",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/applications/clownfish.png",imageName:"indoorAdventures.useCases.use2.imgAlt"},{name:"indoorAdventures.useCases.use3.name",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/applications/congress.png",imageName:"indoorAdventures.useCases.use3.imgAlt"},{name:"indoorAdventures.useCases.use4.name",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/applications/airplane.png",imageName:"indoorAdventures.useCases.use4.imgAlt"}]},{articleStyle:"lg:max-w-none flex flex-col",title:"tourism.title",appList:[{name:"tourism.useCases.use1.name",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/applications/castle.png",imageName:"tourism.useCases.use1.imgAlt"},{name:"tourism.useCases.use2.name",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/applications/ghost.png",imageName:"tourism.useCases.use2.imgAlt"},{name:"tourism.useCases.use3.name",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/applications/compass.png",imageName:"tourism.useCases.use3.imgAlt"}]}]}}},o=l(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"purple-bg-color pb-52 mb-9 relative mt-20 lg:mt-0"},[l("MainTitle",{attrs:{mainTitleText:t.$t("landing.applications.title"),titleStyle:"white-color mt-12",imgPath:"https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/applications/applications.png",imgName:"applications",lineColor:"border-white"}}),t._v(" "),l("section",{staticClass:"container mt-[7rem] -z-10 flex flex-col lg:flex-row items-start justify-center lg:justify-start"},t._l(t.applications,(function(e,n){return l("article",{key:n,staticClass:"max-w-md",class:e.articleStyle},[l("h4",{staticClass:"text-2xl font-anek-700 lg:text-5xl pr-10 pb-3 border-b-[3px] border-b-white mb-[3rem] uppercase white-color"},[t._v("\n        "+t._s(t.$t("landing.applications."+e.title))+"\n      ")]),t._v(" "),l("ul",t._l(e.appList,(function(e,n){return l("ListApp",{key:n,attrs:{listTitle:t.$t("landing.applications."+e.name),imgListPath:e.imagePath,imgListName:t.$t("landing.applications."+e.imageName)}})})),1)])})),0),t._v(" "),l("figure",{staticClass:"hidden md:w-56 md:h-56 right-0 md:top-[-195px] top-[-75px] absolute"},[l("img",{staticClass:"object-cover h-full w-full",attrs:{src:"https://map-of-history.s3.eu-west-3.amazonaws.com/landing-page/triangle-landing.png",alt:t.$t("landing.applications.imgAlt")}})])],1)}),[],!1,null,"4787035a",null);e.default=component.exports;installComponents(component,{MainTitle:l(523).default,ListApp:l(539).default})}}]);