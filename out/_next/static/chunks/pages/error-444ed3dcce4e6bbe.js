(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{4376:function(n,t,e){n.exports=e(3053)},294:function(n,t,e){"use strict";e.d(t,{w_:function(){return a}});var r=e(2684),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),c=function(){return(c=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},u=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>t.indexOf(r)&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]]);return e};function a(n){return function(t){return r.createElement(f,c({attr:c({},n.attr)},t),function n(t){return t&&t.map(function(t,e){return r.createElement(t.tag,c({key:e},t.attr),n(t.child))})}(n.child))}}function f(n){var t=function(t){var e,o=n.attr,i=n.size,a=n.title,f=u(n,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:e,style:c(c({color:n.color||t.color},t.style),n.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),n.children)};return void 0!==i?r.createElement(i.Consumer,null,function(n){return t(n)}):t(o)}},123:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/error",function(){return e(9469)}])},1430:function(n,t,e){"use strict";e.d(t,{R:function(){return I}});var r=e(638),o=e(8598),i=e(2684),c=e(9518),u=e(6178),a=e(3588),f=e(6059),s=e(8102),l=e(4376),d=e(4528);function h(){var n=(0,r.Z)(["\n  @media "," {\n    padding: 40px;\n  }\n  z-index: 100;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  padding: 40px 80px;\n  align-items: end;\n  opacity: 0.9;\n  gap: 40px;\n  animation: menuFadeIn 600ms 1 ease;\n  background-color: ",";\n  span {\n    font-size: 72px;\n    color: ",";\n    cursor: pointer;\n    :hover {\n      text-decoration: underline;\n    }\n  }\n  .currentPage {\n    color: #114d89;\n  }\n  @keyframes menuFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0.9;\n    }\n  }\n"]);return h=function(){return n},n}var m=function(n){var t=n.onMenuClick,e=(0,l.useRouter)();return(0,o.jsxs)(p,{children:[(0,o.jsx)(a.cur,{size:24,color:s.r.color.white,style:{cursor:"pointer"},onClick:t}),(0,o.jsx)(f.xW,{className:e.pathname==="".concat(d.O,"/about")?"currentPage":"",onClick:function(){return e.push("".concat(d.O,"/about"))},children:"About"}),(0,o.jsx)(f.xW,{className:e.pathname==="".concat(d.O,"/")?"currentPage":"",onClick:function(){return e.push("".concat(d.O,"/"))},children:"Home"})]})},p=(0,c.ZP)(u.sg).withConfig({componentId:"sc-40f29668-0"})(h(),function(n){return n.theme.media.mobile},function(n){return n.theme.color.background2},function(n){return n.theme.color.white});function g(){var n=(0,r.Z)(["\n  @media "," {\n    padding: 40px;\n  }\n  padding: 40px 80px;\n  align-items: center;\n  justify-content: space-between;\n  span {\n    ","\n  }\n"]);return g=function(){return n},n}function w(){var n=(0,r.Z)(["\n  font-weight: ",";\n"]);return w=function(){return n},n}var v=function(n){var t=n.backgroundColor,e=(0,i.useState)(!1),r=e[0],c=e[1];return(0,o.jsxs)(x,{backgroundColor:t,children:[(0,o.jsx)(b,{children:"Many things"}),(0,o.jsx)(a.cur,{size:24,color:"white"===t?s.r.color.black:s.r.color.white,style:{cursor:"pointer"},onClick:function(){return c(!0)}}),r&&(0,o.jsx)(m,{onMenuClick:function(){return c(!1)}})]})},x=(0,c.ZP)(u.X2).withConfig({componentId:"sc-a1cb8ced-0"})(g(),function(n){return n.theme.media.mobile},function(n){return"black"===n.backgroundColor&&"color: ".concat(n.theme.color.white,";")}),b=(0,c.ZP)(f.Ml).withConfig({componentId:"sc-a1cb8ced-1"})(w(),function(n){return n.theme.weight.bold});function C(){var n=(0,r.Z)(["\n  @media "," {\n    font-size: ",";\n  }\n  &.date {\n    @media "," {\n      flex: 1;\n      text-align: end;\n    }\n    font-weight: ",";\n  }\n"]);return C=function(){return n},n}function Z(){var n=(0,r.Z)(["\n  @media "," {\n    gap: 60px;\n  }\n  @media "," {\n    justify-content: space-between;\n    padding: 0 40px;\n  }\n  height: 60px;\n  align-items: center;\n  padding: 0 80px;\n  span {\n    ","\n  }\n"]);return Z=function(){return n},n}var k=function(n){var t=n.backgroundColor;return(0,o.jsxs)(P,{backgroundColor:t,children:[(0,o.jsx)(y,{children:"Contact By."}),(0,o.jsx)(y,{children:"Resume"}),(0,o.jsx)(y,{children:"Velog"}),(0,o.jsx)(y,{children:"Email"}),(0,o.jsx)(y,{className:"date",children:"@2023"})]})},y=(0,c.ZP)(f.k$).withConfig({componentId:"sc-5b52f71-0"})(C(),function(n){return n.theme.media.mobile},function(n){return n.theme.size.small},function(n){return n.theme.media.desktop},function(n){return n.theme.weight.light}),P=(0,c.ZP)(u.X2).withConfig({componentId:"sc-5b52f71-1"})(Z(),function(n){return n.theme.media.desktop},function(n){return n.theme.media.mobile},function(n){return"black"===n.backgroundColor&&"color: ".concat(n.theme.color.white,";")});function j(){var n=(0,r.Z)(["\n  min-height: 100vh;\n  @keyframes frameFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  animation: frameFadeIn 1s 1 ease;\n  background-color: ",";\n"]);return j=function(){return n},n}var I=function(n){var t=n.children,e=n.backgroundColor,r=void 0===e?"white":e;return(0,o.jsxs)(z,{backgroundColor:r,children:[(0,o.jsx)(v,{backgroundColor:r}),t,(0,o.jsx)(k,{backgroundColor:r})]})},z=(0,c.ZP)(u.sg).withConfig({componentId:"sc-fe1635b0-0"})(j(),function(n){return"white"===n.backgroundColor?n.theme.color.white:n.theme.color.background2})},6178:function(n,t,e){"use strict";e.d(t,{X2:function(){return l},pU:function(){return h},rj:function(){return d},sg:function(){return s}});var r=e(638),o=e(9518);function i(){var n=(0,r.Z)(["\n  ","\n  flex-direction: column;\n"]);return i=function(){return n},n}function c(){var n=(0,r.Z)(["\n  ","\n  flex-direction: row;\n"]);return c=function(){return n},n}function u(){var n=(0,r.Z)(["\n  display: grid;\n"]);return u=function(){return n},n}function a(){var n=(0,r.Z)(["\n  @media "," {\n    width: 1060px;\n    margin: 0 auto;\n  }\n  @media "," {\n    padding: 0 20px;\n  }\n"]);return a=function(){return n},n}var f={display:"flex"},s=o.ZP.div.withConfig({componentId:"sc-72c97d95-0"})(i(),f),l=o.ZP.div.withConfig({componentId:"sc-72c97d95-1"})(c(),f),d=o.ZP.div.withConfig({componentId:"sc-72c97d95-2"})(u()),h=o.ZP.div.withConfig({componentId:"sc-72c97d95-3"})(a(),function(n){return n.theme.media.desktop},function(n){return n.theme.media.mobile})},6059:function(n,t,e){"use strict";e.d(t,{Af:function(){return k},H$:function(){return P},Ml:function(){return j},S1:function(){return C},di:function(){return y},k$:function(){return b},ug:function(){return I},xW:function(){return Z}});var r=e(638),o=e(9518),i=e(8102);function c(){var n=(0,r.Z)(["\n  ","\n  ","\n  font-weight: ",";\n"]);return c=function(){return n},n}function u(){var n=(0,r.Z)(["\n  ","\n  font-weight: ",";\n  line-height: 1.8;\n"]);return u=function(){return n},n}function a(){var n=(0,r.Z)(["\n  font-weight: ",";\n"]);return a=function(){return n},n}function f(){var n=(0,r.Z)(["\n  font-weight: ",";\n"]);return f=function(){return n},n}function s(){var n=(0,r.Z)(["\n  font-weight: ",";\n"]);return s=function(){return n},n}function l(){var n=(0,r.Z)(["\n  font-weight: ",";\n"]);return l=function(){return n},n}function d(){var n=(0,r.Z)(["\n  font-weight: ",";\n"]);return d=function(){return n},n}function h(){var n=(0,r.Z)(["\n  font-size: ",";\n"]);return h=function(){return n},n}function m(){var n=(0,r.Z)(["\n  font-size: ",";\n"]);return m=function(){return n},n}function p(){var n=(0,r.Z)(["\n  font-size: ",";\n"]);return p=function(){return n},n}function g(){var n=(0,r.Z)(["\n  font-size: ",";\n"]);return g=function(){return n},n}function w(){var n=(0,r.Z)(["\n  font-size: ",";\n"]);return w=function(){return n},n}function v(){var n=(0,r.Z)(["\n  font-size: ",";\n"]);return v=function(){return n},n}var x={"font-style":"normal","font-size":i.r.size.default,"line-height":"1","white-space":"pre-wrap"},b=o.ZP.span.withConfig({componentId:"sc-f4aa5f95-0"})(c(),x,function(n){return n.color&&"color: ".concat(n.color,";")},function(n){return n.theme.weight.medium}),C=o.ZP.p.withConfig({componentId:"sc-f4aa5f95-1"})(u(),x,function(n){return n.theme.weight.regular});(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-2"})(a(),function(n){return n.theme.weight.light}),(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-3"})(f(),function(n){return n.theme.weight.regular}),(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-4"})(s(),function(n){return n.theme.weight.semiBold});var Z=(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-5"})(l(),function(n){return n.theme.weight.bold}),k=(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-6"})(d(),function(n){return n.theme.weight.extraBold});(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-7"})(h(),function(n){return n.theme.size.small});var y=(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-8"})(m(),function(n){return n.theme.size.h1}),P=(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-9"})(p(),function(n){return n.theme.size.h2});(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-10"})(g(),function(n){return n.theme.size.h3});var j=(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-11"})(w(),function(n){return n.theme.size.h4}),I=(0,o.ZP)(b).withConfig({componentId:"sc-f4aa5f95-12"})(v(),function(n){return n.theme.size.h5})},9469:function(n,t,e){"use strict";e.r(t);var r=e(8598);e(2684);var o=e(1430),i=function(){return(0,r.jsx)(o.R,{children:"Error"})};t.default=i},638:function(n,t,e){"use strict";function r(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}e.d(t,{Z:function(){return r}})}},function(n){n.O(0,[152,774,888,179],function(){return n(n.s=123)}),_N_E=n.O()}]);