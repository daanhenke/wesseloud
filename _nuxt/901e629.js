(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{296:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("f17369f8",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n(296)},298:function(t,e,n){var r=n(42)(!1);r.push([t.i,".hero-section[data-v-4fe40722]{--tw-bg-opacity:1;background-color:rgba(242,242,242,var(--tw-bg-opacity));display:flex;flex-direction:column;align-items:center;min-height:32rem;padding:3rem}@media (min-width:768px){.hero-section[data-v-4fe40722]{flex-direction:row}}.hero-section>*[data-v-4fe40722]{width:50%}.animation-container[data-v-4fe40722]{display:flex;justify-content:center;flex-grow:1}.animation[data-v-4fe40722]{height:9rem;position:relative;width:9rem}@media (min-width:640px){.animation[data-v-4fe40722]{height:15rem;width:15rem}}@media (min-width:768px){.animation[data-v-4fe40722]{height:18rem;width:18rem}}.animation>*[data-v-4fe40722]{height:3rem;position:absolute;width:3rem}@media (min-width:640px){.animation>*[data-v-4fe40722]{height:5rem;width:5rem}}@media (min-width:768px){.animation>*[data-v-4fe40722]{height:6rem;width:6rem}}.animation[data-hidden=true] svg[data-v-4fe40722]{display:none}svg.smaller[data-v-4fe40722]{height:2rem;width:2rem}@media (min-width:640px){svg.smaller[data-v-4fe40722]{height:3.25rem;width:3.25rem}}@media (min-width:768px){svg.smaller[data-v-4fe40722]{height:4rem;width:4rem}}svg.medium[data-v-4fe40722]{padding-top:.75rem;padding-left:.25rem;padding-right:.25rem}@media (min-width:640px){svg.medium[data-v-4fe40722]{padding-top:1.5rem;padding-left:.75rem;padding-right:.75rem}}.text>h1[data-v-4fe40722]{font-size:1.875rem;line-height:2.25rem}",""]),t.exports=r},299:function(t,e,n){"use strict";n.r(e);n(41),n(26),n(11),n(31),n(69);var r=n(107),o={mounted:function(){this.animate()},methods:{animate:function(){var t=[{startX:50,startY:0,endX:0,endY:66,startRotation:0,endRotation:0},{startX:50,startY:0,endX:33,endY:66,startRotation:0,endRotation:0},{startX:50,startY:0,endX:66,endY:66,startRotation:0,endRotation:0},{startX:50,startY:0,endX:66,endY:33,startRotation:0,endRotation:0},{startX:50,startY:50,endX:33,endY:33,startRotation:0,endRotation:0},{startX:50,startY:50,endX:66,endY:0,startRotation:0,endRotation:0},{startX:50,startY:50,endX:0,endY:44,startRotation:0,endRotation:0}];this.$refs.animationContainer.dataset.hidden=void 0;var e=Array.from(this.$refs.animationContainer.children),n=function(t,e){return Math.random()*(e-t)+t},o=[Object(r.a)({targets:".text > h1",duration:"1000",autoplay:!1,opacity:["0","1"],translateY:["-.5rem","0"],easing:"easeInQuint"}),Object(r.a)({targets:".text > p",duration:"1000",autoplay:!1,opacity:["0","1"],easing:"easeInQuint",delay:200})];e.forEach((function(e,o){var d=t[o];d.startX=n(-15,100),d.startY=n(-15,100),d.startRotation=n(0,359),Object(r.a)({targets:[e],duration:"1500",left:["".concat(d.startX,"%"),"".concat(d.endX,"%")],top:["".concat(d.startY,"%"),"".concat(d.endY,"%")],rotate:["".concat(d.startRotation),"".concat(d.endRotation)],delay:200*o,easing:"easeInOutQuint"})})),setTimeout((function(){o.forEach((function(t){return t.play()}))}),1500+100*e.length)}}},d=(n(297),n(40)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-section"},[n("div",{staticClass:"animation-container"},[n("div",{ref:"animationContainer",staticClass:"animation",attrs:{"data-hidden":"true"}},[n("svg-icon",{attrs:{name:"RectangleBlueHero"}}),t._v(" "),n("svg-icon",{attrs:{name:"RectangleGreenHero"}}),t._v(" "),n("svg-icon",{attrs:{name:"RectangleOrangeHero"}}),t._v(" "),n("svg-icon",{attrs:{name:"RectangleBlueHero"}}),t._v(" "),n("svg-icon",{attrs:{name:"TriangleHero"}}),t._v(" "),n("svg-icon",{staticClass:"medium",attrs:{name:"PlusHero"}}),t._v(" "),n("svg-icon",{staticClass:"smaller",attrs:{name:"EllipseHero"}})],1)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("h1",[t._v("Fakka G")]),t._v(" "),n("p",[t._v("Lorem ipsum dipsum")])])}],!1,null,"4fe40722",null);e.default=component.exports}}]);