(window.webpackJsonp=window.webpackJsonp||[]).push([[52,2,3,14,15,18,20,32,36],{497:function(t,e,l){var content=l(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("44bac162",content,!0,{sourceMap:!1})},498:function(t,e,l){"use strict";l.r(e);var r={props:{lineWidth:{type:String,default:"w-full"},lineThickness:{type:String,default:"border-t"},lineColor:{type:String,default:"bg-black border-black"},renderCircle:{type:Boolean,default:!1},renderArrow:{type:Boolean,default:!1}}},o=(l(499),l(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center w-full"},[l("div",{class:[t.lineWidth,t.lineThickness,t.lineColor]}),t._v(" "),t.renderCircle?l("div",{staticClass:"rounded-full w-3 h-3",class:t.lineColor}):t._e(),t._v(" "),t.renderArrow?l("div",{staticClass:"arrow",class:t.lineColor}):t._e()])}),[],!1,null,"1b922a4e",null);e.default=component.exports},499:function(t,e,l){"use strict";l(497)},500:function(t,e,l){var r=l(36)((function(i){return i[1]}));r.push([t.i,'.arrow[data-v-1b922a4e]{position:relative;content:"";display:inline-block;width:.6em;height:.6em;border-right-width:.15em;border-right-style:solid;border-top-width:.15em;border-top-style:solid;transform:rotate(45deg);margin-left:-.55em}',""]),r.locals={},t.exports=r},501:function(t,e,l){"use strict";l.r(e);var r={props:{subpageTitle:{type:String,default:""},lineColor:{type:String,default:""},imageTitle:{type:String,default:""},positionFigure:{type:String,default:""},positionTitle:{type:String,default:""},imgStyle:{type:String,default:""}},computed:{}},o=l(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h2",{staticClass:"container font-oswald-700 uppercase text-2xl md:text-7xl xl:text-8xl",class:t.positionTitle},[t._v("\n    "+t._s(t.subpageTitle)+"\n  ")]),t._v(" "),l("div",{staticClass:"flex items-center -mt-5 lg:-mt-12 w-[85%] 2xl:w-[70%]"},[l("Cord",{attrs:{lineThickness:"border-t-4 ",lineColor:t.lineColor}}),t._v(" "),l("figure",{staticClass:"h-20 lg:h-auto",class:t.positionFigure},[l("img",{staticClass:"object-cover h-full w-full",class:t.imgStyle,attrs:{src:t.imageTitle,alt:""}})])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Cord:l(498).default})},504:function(t,e,l){var content=l(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("eb7ac944",content,!0,{sourceMap:!1})},505:function(t,e,l){var content=l(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("238b926e",content,!0,{sourceMap:!1})},506:function(t,e,l){"use strict";l.r(e);var r={props:{footerColor:{type:String,default:""}},data:function(){return{currentYear:(new Date).getFullYear(),socialNetworks:[{name:"Instagram",link:"https://www.instagram.com/crowtec/",image:"https://map-of-history.s3.eu-west-3.amazonaws.com/footer/i-ig.png"},{name:"Twitter",link:"https://twitter.com/crowtecnologies",image:"https://map-of-history.s3.eu-west-3.amazonaws.com/footer/i-tw.png"},{name:"Facebook",link:"https://www.facebook.com/crowtec/",image:"https://map-of-history.s3.eu-west-3.amazonaws.com/footer/i-face.png"}]}}},o=(l(510),l(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer relative bg-dark-blue-700 flex w-full h-full",attrs:{id:"contact"}},[l("div",{staticClass:"line1"}),t._v(" "),l("div",{staticClass:"line2"}),t._v(" "),l("div",{staticClass:"line3"}),t._v(" "),l("section",{staticClass:"flex flex-col w-full h-full"},[l("div",{staticClass:"flex"},[l("p",{staticClass:"flex items-center text-xl lg:text-2xl font-anek-500 pt-9 pb-0 lg:pt-12 lg:pb-5 pl-[15%]"},[t._v("\n        "+t._s(t.$t("footer.text"))+"\n      ")])]),t._v(" "),l("section",{staticClass:"w-full flex flex-col lg:flex-row justify-between items-center lg:mt-6"},[t._m(0),t._v(" "),l("div",{staticClass:"hidden lg:flex flex-col items-center justify-center pr-9"},[l("div",{staticClass:"flex lg:flex-col justify-center items-center"},[l("Button",{staticClass:"lg:border-4 lg:rounded-xl lg:px-8 pl-9 lg:py-5 lg:mb-8",attrs:{buttonText:t.$t("footer.contactButton"),buttonPath:"mailto:moh@crowtec.co"}}),t._v(" "),l("ul",{staticClass:"footer__list items-center"},t._l(t.socialNetworks,(function(t,e){return l("li",{key:e,staticClass:"footer__list--item"},[l("a",{attrs:{href:t.link,target:"_blank"}},[l("img",{attrs:{src:t.image,alt:t.name}})])])})),0)],1)])]),t._v(" "),l("div",{staticClass:"flex flex-col relative z-20"},[l("div",{staticClass:"flex lg:hidden pl-[15%] mt-12 mb-3 lg:mb-0"},[l("Button",{staticClass:"flex items-center font-anek-700 text-xl",attrs:{buttonText:t.$t("footer.contactButton"),buttonPath:"mailto:moh@crowtec.co"}}),t._v(" "),l("ul",{staticClass:"footer__list items-center"},t._l(t.socialNetworks,(function(t,e){return l("li",{key:e,staticClass:"footer__list--item"},[l("a",{attrs:{href:t.link,target:"_blank"}},[l("img",{attrs:{src:t.image,alt:t.name}})])])})),0)],1),t._v(" "),l("small",{staticClass:"flex flex-col font-anek-300 text-[15px] lg:text-xl pb-6 lg:pb-8 pl-[15%] lg:mt-12"},[t._v("\n        © "+t._s(t.currentYear)+" Crow Technologies Engineering SLL\n        "),l("span",[t._v(" Terms of Service Privacy Policy")])])])]),t._v(" "),l("div",{staticClass:"lg:w-1/12 border-l-2 lg:border-l-4 hidden lg:inline"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"relative z-30 w-full flex",attrs:{href:"https://crowtec.co/",target:"_blank"}},[e("figure",{staticClass:"max-w-[260px] lg:max-w-xs pt-16 lg:pt-0 ml-[15%] lg:ml-[17%] lg:mb-3"},[e("img",{attrs:{src:"https://map-of-history.s3.eu-west-3.amazonaws.com/footer/logo-crowtec-horizontal.png",alt:"Logo Crowtec"}})])])}],!1,null,"2aad12ac",null);e.default=component.exports;installComponents(component,{Button:l(179).default,Footer:l(506).default})},507:function(t,e,l){var content=l(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("e1c55d40",content,!0,{sourceMap:!1})},510:function(t,e,l){"use strict";l(504)},511:function(t,e,l){var r=l(36)((function(i){return i[1]}));r.push([t.i,".footer[data-v-2aad12ac]{color:#fff}.footer__list[data-v-2aad12ac]{display:flex;margin-left:15px}@media(min-width:1024px){.footer__list[data-v-2aad12ac]{margin-left:0}}.footer__list--item[data-v-2aad12ac]{padding:6px;width:40px}@media(min-width:1024px){.footer__list--item[data-v-2aad12ac]{padding:10px;width:100%}}.line1[data-v-2aad12ac]{position:absolute;top:-40px;width:87%;height:75%;border-bottom:2px solid #fff}@media(min-width:768px){.line1[data-v-2aad12ac]{width:51%;border-bottom:4px solid #fff}}@media(min-width:1024px){.line1[data-v-2aad12ac]{top:-20px}}.line2[data-v-2aad12ac]{width:73%;height:35%;border-bottom:2px solid #fff;position:absolute;top:-40px;left:-13px}@media(min-width:768px){.line2[data-v-2aad12ac]{width:42%;top:-30px;border-bottom:4px solid #fff}}.line3[data-v-2aad12ac]{width:10%;height:100%;border-right:2px solid #fff;position:absolute}@media(min-width:768px){.line3[data-v-2aad12ac]{border-right:4px solid #fff}}",""]),r.locals={},t.exports=r},512:function(t,e,l){"use strict";l(505)},513:function(t,e,l){var r=l(36)((function(i){return i[1]}));r.push([t.i,'.feature-card[data-v-15eedf6c]{background-color:#7551bb}.feature-card[data-v-15eedf6c]:after{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(1turn,#08132f 5.98%,transparent 95%);opacity:1;border-radius:1rem}.feature-card__image[data-v-15eedf6c]{transform-style:preserve-3d;transform:translateY(-20%)}',""]),r.locals={},t.exports=r},515:function(t,e,l){"use strict";l.r(e);var r={props:{sponsors:{type:Array,default:[]},styleSponsors:{type:String,default:""},eachSponsor:{type:String,default:""}}},o=l(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"container flex flex-wrap items-center justify-center w-full h-full my-24",class:t.styleSponsors},[t._l(t.sponsors,(function(e,r){return l("figure",{key:r,staticClass:"lg:mx-8",class:t.eachSponsor},[l("img",{staticClass:"object-cover h-full w-auto mx-auto my-0",attrs:{src:e.image,alt:e.alt}})])})),t._v(" "),"/"===t.$route.path?l("p",{staticClass:"max-w-2xl font-anek-300 text-xl lg:text-2xl mt-10 2xl:mt-0 lg:ml-10 "},[t._v("\n    "+t._s(t.$t("landing.sponsors"))+"\n  ")]):t._e()],2)}),[],!1,null,"df4b1238",null);e.default=component.exports},516:function(t,e,l){"use strict";l.r(e);var r={props:{path:{type:String,default:""},isMainCard:{type:Boolean,default:!1},cardStyle:{type:String,default:""},cardTitle:{type:String,default:""},cardYear:{type:String,default:""},cardImagePath:{type:String,default:""},cardImageName:{type:String,default:""},figureStyle:{type:String,default:""}}},o=(l(512),l(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nuxt-link",{staticClass:"flex justify-center items-center w-full lg:w-auto rounded-2xl",attrs:{to:t.path}},[l("article",{staticClass:"feature-card relative rounded-2xl",class:[t.cardStyle,t.isMainCard?"w-auto 2xl:w-full xl:max-w-3xl 2xl:max-w-full h-full max-h-[20rem] xl:max-h-[22rem] 2xl:max-h-[33rem]":"max-h-[250px] "]},[l("figure",{staticClass:"feature-card__image",class:t.figureStyle},[l("img",{staticClass:"object-cover w-full h-full",attrs:{src:t.cardImagePath,alt:t.cardTitle}})]),t._v(" "),t.isMainCard?l("div",{staticClass:"feature-card__text-wrapper absolute bottom-6 z-20 flex w-full text-white px-12 2xl:px-16"},[l("h5",{staticClass:"font-anek-700 font-bold text-1.75xl xl:text-4xl text-center lg:text-left pr-5 pt-6 lg:pt-4"},[t._v("\n        "+t._s(t.cardTitle)+"\n      ")]),t._v(" "),l("p",{staticClass:"w-full self-end font-anek-700 font-bold text-1.75xl xl:text-4xl text-right pb-2 border-b-4 mb-2"},[t._v("\n        "+t._s(t.cardYear)+"\n      ")])]):l("div",{staticClass:"absolute bottom-6 z-20 flex w-full text-white px-6 2xl:px-4"},[l("h5",{staticClass:"font-anek-700 text-l text-center lg:text-left font-bold"},[t._v("\n        "+t._s(t.cardTitle)+"\n      ")])])])])}),[],!1,null,"15eedf6c",null);e.default=component.exports},517:function(t,e,l){"use strict";l(507)},518:function(t,e,l){var r=l(36)((function(i){return i[1]}));r.push([t.i,".swiper[data-v-1794efbc]{width:100%;height:100%;max-width:300px}@media(min-width:768px){.swiper[data-v-1794efbc]{max-height:400px;max-width:650px}}@media(min-width:1024px){.swiper[data-v-1794efbc]{max-height:350px;max-width:700px}}.swiper-slide[data-v-1794efbc]{display:flex;align-items:center;justify-content:center;height:400px}.swiper-button-next[data-v-1794efbc]:after,.swiper-button-prev[data-v-1794efbc]:after{display:none}.swiper-button-prev[data-v-1794efbc]{border-radius:50%;padding:25px;background:hsla(0,0%,85.1%,.3254901961) url(https://map-of-history.s3.eu-west-3.amazonaws.com/other-adventures/arrow-left.png) no-repeat 50%/18px}.swiper-button-next[data-v-1794efbc]{border-radius:50%;padding:25px;background:hsla(0,0%,85.1%,.3254901961) url(https://res.cloudinary.com/crowtec/image/upload/v1657299863/map-of-history/carousel/arrow-right.png) no-repeat 50%/18px}",""]),r.locals={},t.exports=r},519:function(t,e,l){"use strict";l.r(e);l(60),l(27),l(11);var r={data:function(){return{adventures:[{title:"Yrrealidad Aumentada",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/other-adventures/yrreal-adventure.png",style:"adventures__item max-w-xs lg:max-w-none",year:"2022",route:"/yrreal"},{title:"La Ruta del Buzón Mágico II",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/other-adventures/buzon-2-adventure.png",style:"w-80 lg:max-w-none",year:"2021",route:"/la-ruta-del-buzon-magico-2021"},{title:"El Gran Secreto UCM",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/other-adventures/ucm-adventure.png",style:"w-80 lg:max-w-none",year:"2022",route:"/ucm"},{title:"La Ruta del Buzón Mágico I",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/other-adventures/buzon-1-adventure.png",style:"max-w-xs lg:max-w-none",year:"2020",route:"/la-ruta-del-buzon-magico-2021"},{title:"Tiempo de San Lorenzo",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/other-adventures/tiempo-san-lorenzo-adventure.png",style:"adventures__item max-w-xs lg:max-w-none",year:"2018",path:"/tiempo-san-lorenzo"},{title:"Post Fata Resurgo",imagePath:"https://map-of-history.s3.eu-west-3.amazonaws.com/other-adventures/post-fata-adventure.png",style:"adventures__item max-w-xs lg:max-w-none ",figureStyle:"!translate-y-[-25%] ",year:"2016",route:"/post-fata-resurgo"}]}},props:{color:{type:String,default:"black-line"}},computed:{lastAdventure:function(){var t=this.$data.adventures.slice(0)[0];return t.route===this.$route.path?this.$data.adventures.slice(1)[0]:t},filterAdventures:function(){var t=this;return this.$data.adventures.filter((function(e){return e.route!==t.$route.path&&e.route!==t.lastAdventure.route}))}},mounted:function(){new Swiper(".mySwiper",{freeMode:!0,centeredSlides:!0,loop:!0,slidesPerView:1,spaceBetween:50,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:3,spaceBetween:50}}})}},o=(l(517),l(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"relative w-full mt-28 mb-16 lg:mb-44",attrs:{id:"other-adventures"}},[l("TitleSubPage",{attrs:{positionTitle:"pb-12 lg:mb-12 ",subpageTitle:t.$t("otherAdventures"),positionFigure:"hidden",lineColor:"black-line"}}),t._v(" "),l("section",{staticClass:"hidden lg:flex flex-col relative w-full mt-56 lg:mt-40"},[l("section",{staticClass:"flex"},[l("Cord",{staticClass:"mt-28",attrs:{lineWidth:"w-8/12",renderCircle:!0,lineColor:"accent-line accent-bg",lineThickness:"border-t-[4px]"}}),t._v(" "),l("AdventureCard",{staticClass:"!w-full",attrs:{isMainCard:!0,cardTitle:t.lastAdventure.title,cardYear:t.lastAdventure.year,cardImagePath:t.lastAdventure.imagePath,cardImageName:t.lastAdventure.title,path:t.lastAdventure.route}}),t._v(" "),l("Cord",{staticClass:"place-content-end flex-row-reverse mt-28",attrs:{lineWidth:"w-8/12",renderCircle:!0,lineColor:"accent-line accent-bg",lineThickness:"border-t-[4px]"}})],1)]),t._v(" "),l("div",{staticClass:"swiper mySwiper mt-10 md:mt-4"},[l("div",{staticClass:"swiper-wrapper"},t._l(t.filterAdventures,(function(t,e){return l("AdventureCard",{key:e,staticClass:"swiper-slide max-w-xs lg:max-w-none",attrs:{cardTitle:t.title,cardImagePath:t.imagePath,cardImageName:t.title,cardStyle:t.style,figureStyle:t.figureStyle,path:t.route}})})),1),t._v(" "),l("div",{staticClass:"swiper-button-next"}),t._v(" "),l("div",{staticClass:"swiper-button-prev"})])],1)}),[],!1,null,"1794efbc",null);e.default=component.exports;installComponents(component,{TitleSubPage:l(501).default,Cord:l(498).default,AdventureCard:l(516).default})},520:function(t,e,l){"use strict";l.r(e);var r={props:{downloadLink:{type:String,default:"#"},gameName:{type:String,default:""}},data:function(){return{links:[{id:0,image:"https://map-of-history.s3.eu-west-3.amazonaws.com/download-game/download-in-google-play.png",alt:"android"},{id:1,image:"https://map-of-history.s3.eu-west-3.amazonaws.com/download-game/download-in-app-store.png",alt:"ios"}]}}},o=l(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"h-full w-full my-16 flex items-center justify-center",attrs:{id:"download-"+t.gameName}},t._l(t.links,(function(link){return l("a",{key:link.id,staticClass:"flex items-center font-anek-700 text-xl px-8 py-3 rounded-md",attrs:{href:t.downloadLink}},[l("figure",[l("img",{attrs:{src:link.image,alt:t.$t("downloadGame."+link.alt)}})])])})),0)}),[],!1,null,"2b327cf0",null);e.default=component.exports},522:function(t,e,l){var content=l(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("c51eea10",content,!0,{sourceMap:!1})},526:function(t,e,l){"use strict";l(522)},527:function(t,e,l){var r=l(36)((function(i){return i[1]}));r.push([t.i,".video-wrapper[data-v-4d240968]{border-radius:10px;height:300px;width:100vw;place-self:center}@media(min-width:1024px){.video-wrapper[data-v-4d240968]{border-width:7px;height:900px;width:75vw}}.title-image[data-v-4d240968]{transform:translateZ(20px)}",""]),r.locals={},t.exports=r},528:function(t,e,l){"use strict";l.r(e);var r={props:{textHomeVideo:{type:String,default:""},srcHomeVideo:{type:String,default:""},lineColor:{type:String,default:""},wrapperColor:{type:String,default:""},videos:{type:Array,default:[]},videoStyle:{type:String,default:""}}},o=(l(526),l(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"relative lg:mb-[5rem]"},[l("div",{staticClass:"flex items-center justify-center"},[l("Cord",{staticClass:"hidden lg:flex",attrs:{renderCircle:!0,lineColor:t.lineColor,lineThickness:"border-t-[3px]"}}),t._v(" "),l("div",{staticClass:"container h-full flex flex-col"},[l("div",{staticClass:"video-wrapper aspect-video flex lg:max-h-[500px] xl:max-h-[700px]",class:t.wrapperColor},t._l(t.videos,(function(video,e){return l("video",{key:e,staticClass:"object-cover h-full w-full",class:t.videoStyle,attrs:{src:video.srcHomeVideo,loop:"",autoplay:"",muted:"",type:"video/mp4"},domProps:{muted:!0}})})),0)]),t._v(" "),l("Cord",{staticClass:"hidden lg:flex flex-row-reverse place-content-end",attrs:{renderCircle:!0,lineColor:t.lineColor,lineThickness:"border-t-[3px]"}})],1),t._v(" "),l("div",{staticClass:"container"},[l("p",{staticClass:"lg:container font-anek-300 text-xs lg:text-2xl xl:w-3/4 2xl:w-1/2 2xl:max-w-none mt-4 lg:mt-10 lg:mx-0 2xl:px-0"},[t._v("\n      "+t._s(t.textHomeVideo)+"\n    ")])])])}),[],!1,null,"4d240968",null);e.default=component.exports;installComponents(component,{Cord:l(498).default})},547:function(t,e,l){var content=l(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("4531a8c0",content,!0,{sourceMap:!1})},579:function(t,e,l){"use strict";l(547)},580:function(t,e,l){var r=l(36)((function(i){return i[1]}));r.push([t.i,".color-red-ucm{color:#ff5858}.bg-dark-blue-100-ucm{background-color:#2f2e47}.bg-red-ucm{background-color:#ff5858}.line-red-ucm{border-color:#ff5858}",""]),r.locals={},t.exports=r},628:function(t,e,l){"use strict";l.r(e);var r={head:function(){return{title:"El gran secreto de UCM",meta:[{name:"El gran secreto de UCM"}],link:[{rel:"icon",type:"image/x-icon",href:"https://map-of-history.s3.eu-west-3.amazonaws.com/logos-moh/logo-MoH-ucm.png"}]}},data:function(){return{videos:[{srcHomeVideo:"https://map-of-history.s3.eu-west-3.amazonaws.com/ucm/home/Video_MoH_ElGranSecreto.mp4"}],sponsors:[{alt:"Logo universidad Complutense",image:"https://map-of-history.s3.eu-west-3.amazonaws.com/sponsors/LOGO_COMPLU.png"}]}}},o=(l(579),l(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",[l("ucmHome"),t._v(" "),l("HomeVideo",{staticClass:"lg:-mt-[20rem] xl:-mt-[28rem]",attrs:{videos:t.videos,videoStyle:"w-full",textHomeVideo:t.$t("ucm.home.textVideo"),lineColor:"line-red-ucm bg-red-ucm",wrapperColor:"line-red-ucm flex"}}),t._v(" "),l("ucmAdventure"),t._v(" "),l("ucmPlaces"),t._v(" "),l("Sponsors",{attrs:{sponsors:t.sponsors,eachSponsor:" max-w-[100px] lg:max-w-[250px] "}}),t._v(" "),l("Adventures",{attrs:{color:"color-black-ucm line-black-ucm"}}),t._v(" "),l("Footer"),t._v(" "),l("DownloadGame")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeVideo:l(528).default,Sponsors:l(515).default,Adventures:l(519).default,Footer:l(506).default,DownloadGame:l(520).default})}}]);