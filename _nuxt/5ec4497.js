(window.webpackJsonp=window.webpackJsonp||[]).push([[42,14,36],{497:function(t,e,l){var content=l(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("44bac162",content,!0,{sourceMap:!1})},498:function(t,e,l){"use strict";l.r(e);var o={props:{lineWidth:{type:String,default:"w-full"},lineThickness:{type:String,default:"border-t"},lineColor:{type:String,default:"bg-black border-black"},renderCircle:{type:Boolean,default:!1},renderArrow:{type:Boolean,default:!1}}},r=(l(499),l(15)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center w-full"},[l("div",{class:[t.lineWidth,t.lineThickness,t.lineColor]}),t._v(" "),t.renderCircle?l("div",{staticClass:"rounded-full w-3 h-3",class:t.lineColor}):t._e(),t._v(" "),t.renderArrow?l("div",{staticClass:"arrow",class:t.lineColor}):t._e()])}),[],!1,null,"1b922a4e",null);e.default=component.exports},499:function(t,e,l){"use strict";l(497)},500:function(t,e,l){var o=l(36)((function(i){return i[1]}));o.push([t.i,'.arrow[data-v-1b922a4e]{position:relative;content:"";display:inline-block;width:.6em;height:.6em;border-right-width:.15em;border-right-style:solid;border-top-width:.15em;border-top-style:solid;transform:rotate(45deg);margin-left:-.55em}',""]),o.locals={},t.exports=o},501:function(t,e,l){"use strict";l.r(e);var o={props:{subpageTitle:{type:String,default:""},lineColor:{type:String,default:""},imageTitle:{type:String,default:""},positionFigure:{type:String,default:""},positionTitle:{type:String,default:""},imgStyle:{type:String,default:""}},computed:{}},r=l(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h2",{staticClass:"container font-oswald-700 uppercase text-2xl md:text-7xl xl:text-8xl",class:t.positionTitle},[t._v("\n    "+t._s(t.subpageTitle)+"\n  ")]),t._v(" "),l("div",{staticClass:"flex items-center -mt-5 lg:-mt-12 w-[85%] 2xl:w-[70%]"},[l("Cord",{attrs:{lineThickness:"border-t-4 ",lineColor:t.lineColor}}),t._v(" "),l("figure",{staticClass:"h-20 lg:h-auto",class:t.positionFigure},[l("img",{staticClass:"object-cover h-full w-full",class:t.imgStyle,attrs:{src:t.imageTitle,alt:""}})])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Cord:l(498).default})},647:function(t,e,l){"use strict";l.r(e);var o={data:function(){return{videos:[{source:"https://map-of-history.s3.eu-west-3.amazonaws.com/yrrealidad-aumentada/animations/video-02.mp4",style:"hidden md:inline"},{source:"https://map-of-history.s3.eu-west-3.amazonaws.com/yrrealidad-aumentada/animations/video-01.mp4",style:"w-full"},{source:"https://map-of-history.s3.eu-west-3.amazonaws.com/yrrealidad-aumentada/animations/video-03.mp4",style:"hidden md:inline"}]}}},r=l(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",[l("TitleSubPage",{staticClass:"-mt-12 lg:-mt-20",attrs:{subpageTitle:"Motion capture",lineColor:"line-blue-yrreal",positionFigure:" hidden",positionTitle:"mb-12 lg:pb-12"}}),t._v(" "),l("section",{staticClass:"w-full h-full flex justify-center md:justify-start mt-11"},t._l(t.videos,(function(video,t){return l("div",{key:t,staticClass:"h-[55vh] lg:h-[788px] lg:w-[34%]"},[l("video",{staticClass:"h-full w-full object-cover",class:video.style,attrs:{src:video.source,loop:"",muted:"",autoplay:"",type:"video/mp4"},domProps:{muted:!0}})])})),0)],1)}),[],!1,null,"64fb6220",null);e.default=component.exports;installComponents(component,{TitleSubPage:l(501).default})}}]);