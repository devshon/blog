(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6378:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4580:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2304).Z;n(5125).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(4858).Z,i=n(4315).Z,u=o(n(2684)),c=n(5921),l=n(4079),a=n(3343),s=n(5566),f=n(3973),d=n(6378),h=n(2774),p={};function v(e,t,n,r){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var g=u.default.forwardRef(function(e,t){var n,o,g=e.href,y=e.as,b=e.children,m=e.prefetch,x=e.passHref,j=e.replace,w=e.shallow,C=e.scroll,_=e.locale,P=e.onClick,z=e.onMouseEnter,O=e.onTouchStart,k=e.legacyBehavior,E=void 0===k?!0!==Boolean(!1):k,L=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,E&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));var Z=!1!==m,M=u.default.useContext(a.RouterContext),I=u.default.useContext(s.AppRouterContext);I&&(M=I);var R=u.default.useMemo(function(){var e=r(c.resolveHref(M,g,!0),2),t=e[0],n=e[1];return{href:t,as:y?c.resolveHref(M,y):n||t}},[M,g,y]),S=R.href,N=R.as,T=u.default.useRef(S),U=u.default.useRef(N);E&&(o=u.default.Children.only(n));var X=E?o&&"object"==typeof o&&o.ref:t,F=r(f.useIntersection({rootMargin:"200px"}),3),B=F[0],H=F[1],D=F[2],A=u.default.useCallback(function(e){(U.current!==N||T.current!==S)&&(D(),U.current=N,T.current=S),B(e),X&&("function"==typeof X?X(e):"object"==typeof X&&(X.current=e))},[N,X,S,D,B]);u.default.useEffect(function(){var e=H&&Z&&c.isLocalURL(S),t=void 0!==_?_:M&&M.locale,n=p[S+"%"+N+(t?"%"+t:"")];e&&!n&&v(M,S,N,{locale:t})},[N,S,H,_,Z,M]);var K={ref:A,onClick:function(e){E||"function"!=typeof P||P(e),E&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,a,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(h=(d=e).currentTarget.target)||"_self"===h)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&c.isLocalURL(n)){e.preventDefault();var d,h,p=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:a,scroll:l}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};s?u.default.startTransition(p):p()}}(e,M,S,N,j,w,C,_,Boolean(I),Z)},onMouseEnter:function(e){E||"function"!=typeof z||z(e),E&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!Z&&I)&&c.isLocalURL(S)&&v(M,S,N,{priority:!0})},onTouchStart:function(e){E||"function"!=typeof O||O(e),E&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!Z&&I)&&c.isLocalURL(S)&&v(M,S,N,{priority:!0})}};if(!E||x||"a"===o.type&&!("href"in o.props)){var W=void 0!==_?_:M&&M.locale,G=M&&M.isLocaleDomain&&d.getDomainLocale(N,W,M.locales,M.domainLocales);K.href=G||h.addBasePath(l.addLocale(N,W,M&&M.defaultLocale))}return E?u.default.cloneElement(o,K):u.default.createElement("a",Object.assign({},L,K),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3973:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2304).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,a=e.disabled||!u,s=r(o.useState(!1),2),f=s[0],d=s[1],h=r(o.useState(null),2),p=h[0],v=h[1];return o.useEffect(function(){if(u){if(!a&&!f&&p&&p.tagName){var e,r,o,s,h,v,g;return r=function(e){return e&&d(e)},h=(s=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=c.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),c.set(n,t),t}(o={root:null==t?void 0:t.current,rootMargin:n})).id,v=s.observer,(g=s.elements).set(p,r),v.observe(p),function(){if(g.delete(p),v.unobserve(p),0===g.size){v.disconnect(),c.delete(h);var e=l.findIndex(function(e){return e.root===h.root&&e.margin===h.margin});e>-1&&l.splice(e,1)}}}}else if(!f){var y=i.requestIdleCallback(function(){return d(!0)});return function(){return i.cancelIdleCallback(y)}}},[p,a,n,t,f]),[v,f,o.useCallback(function(){d(!1)},[])]};var o=n(2684),i=n(7876),u="function"==typeof IntersectionObserver,c=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(4858).Z)(n(2684)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var u=r.default.createContext(null);t.GlobalLayoutRouterContext=u;var c=r.default.createContext(null);t.TemplateContext=c},2691:function(e,t,n){e.exports=n(4580)},294:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(2684),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function l(e){return function(t){return r.createElement(a,u({attr:u({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,u({key:n},t.attr),e(t.child))})}(e.child))}}function a(e){var t=function(t){var n,o=e.attr,i=e.size,l=e.title,a=c(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,a,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4259)}])},4259:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r,o=n(8598),i=n(2684),u=n(7991),c=n(7622),l=n(638),a=n(9518),s=n(8102);function f(){var e=(0,l.Z)(["\n  ","\n  font-weight: ",";\n  font-family: ",";\n"]);return f=function(){return e},e}function d(){var e=(0,l.Z)(["\n  ","\n  font-weight: ",";\n  line-height: 1.8;\n  white-space: pre-wrap;\n"]);return d=function(){return e},e}function h(){var e=(0,l.Z)(["\n  font-weight: ",";\n"]);return h=function(){return e},e}function p(){var e=(0,l.Z)(["\n  font-size: ",";\n"]);return p=function(){return e},e}function v(){var e=(0,l.Z)(["\n  font-size: ",";\n"]);return v=function(){return e},e}function g(){var e=(0,l.Z)(["\n  font-size: ",";\n"]);return g=function(){return e},e}function y(){var e=(0,l.Z)(["\n  font-size: ",";\n"]);return y=function(){return e},e}function b(){var e=(0,l.Z)(["\n  font-size: ",";\n"]);return b=function(){return e},e}function m(){var e=(0,l.Z)(["\n  font-size: ",";\n"]);return m=function(){return e},e}var x,j={color:"#24273a","font-size":s.r.size.default};(x=r||(r={})).P="Pretendard Variable",x.L="'Libre Bodoni', serif";var w=a.ZP.span.withConfig({componentId:"sc-4b21eafb-0"})(f(),j,function(e){return e.theme.weight.regular},function(e){return e.fontFamily?r[e.fontFamily]:r.P}),C=a.ZP.p.withConfig({componentId:"sc-4b21eafb-1"})(d(),j,function(e){return e.theme.weight.regular});(0,a.ZP)(w).withConfig({componentId:"sc-4b21eafb-2"})(h(),function(e){return e.theme.weight.bold});var _=(0,a.ZP)(w).withConfig({componentId:"sc-4b21eafb-3"})(p(),function(e){return e.theme.size.header});(0,a.ZP)(w).withConfig({componentId:"sc-4b21eafb-4"})(v(),function(e){return e.theme.size.h1});var P=(0,a.ZP)(w).withConfig({componentId:"sc-4b21eafb-5"})(g(),function(e){return e.theme.size.h2});(0,a.ZP)(w).withConfig({componentId:"sc-4b21eafb-6"})(y(),function(e){return e.theme.size.h3}),(0,a.ZP)(w).withConfig({componentId:"sc-4b21eafb-7"})(b(),function(e){return e.theme.size.h4}),(0,a.ZP)(w).withConfig({componentId:"sc-4b21eafb-8"})(m(),function(e){return e.theme.size.h5});var z=function(e){var t=e.url,n=e.title,r=e.subject;return(0,o.jsxs)(c.H_,{style:{width:660,height:500},children:[(0,o.jsxs)(u.sg,{style:{padding:20,height:"100%",justifyContent:"end"},children:[(0,o.jsx)(_,{fontFamily:"L",style:{zIndex:1,color:s.r.color.white,fontWeight:s.r.weight.bold},children:n}),(0,o.jsx)(C,{style:{color:s.r.color.white,fontSize:s.r.size.h3},children:r})]}),(0,o.jsx)(c.uM,{children:(0,o.jsx)(c.Xd,{url:t,style:{width:660,height:500}})})]})},O=function(e){var t=e.url,n=e.title,r=e.subject;return(0,o.jsxs)(c.H_,{style:{width:400,height:250},children:[(0,o.jsxs)(u.sg,{style:{padding:20,height:"100%",justifyContent:"end"},children:[(0,o.jsx)(P,{fontFamily:"L",style:{zIndex:1,color:s.r.color.white,fontWeight:s.r.weight.bold},children:n}),(0,o.jsx)(C,{style:{color:s.r.color.white,fontSize:s.r.size.h5},children:r})]}),(0,o.jsx)(c.uM,{children:(0,o.jsx)(c.Xd,{url:t,style:{width:400,height:250}})})]})},k=n(2444);function E(){var e=(0,l.Z)(["\n  z-index: 100;\n  width: 55px;\n  height: 55px;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s;\n  box-shadow: 0px 2px 8px 0px #14141485;\n  background-color: ",";\n  cursor: pointer;\n  @keyframes comeUpFloat {\n    0% {\n      opacity: 0;\n      bottom: 0px;\n    }\n    100% {\n      opacity: 1;\n      bottom: 40px;\n    }\n  }\n  animation: comeUpFloat 0.8s;\n  :hover {\n    background-color: ","88;\n  }\n  :active {\n    background-color: ","00;\n  }\n"]);return E=function(){return e},e}var L=function(){var e=(0,i.useState)(0),t=e[0],n=e[1];(0,i.useEffect)(function(){return n(window.scrollY),window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}},[]);var r=function(){return n(window.scrollY)};return(0,o.jsx)(Z,{style:{display:t<700?"none":""},onClick:function(){return window.scroll({top:0,left:0,behavior:"smooth"})},children:(0,o.jsx)(k.y1n,{size:"24"})})},Z=(0,a.ZP)(u.sg).withConfig({componentId:"sc-4c67f89-0"})(E(),function(e){return e.theme.color.white},function(e){return e.theme.color.white},function(e){return e.theme.color.white}),M=n(2691),I=n.n(M);function R(){var e=(0,l.Z)(["\n  gap: 15px;\n  svg {\n    transition: 0.2s;\n    color: ",";\n    :hover {\n      color: ",";\n    }\n  }\n"]);return R=function(){return e},e}var S=function(){return(0,o.jsx)(u.X2,{style:{justifyContent:"center"},children:(0,o.jsx)(u.pU,{children:(0,o.jsxs)(u.X2,{style:{justifyContent:"space-between",padding:"20px 0"},children:[(0,o.jsx)(I(),{href:"/",children:(0,o.jsx)(_,{fontFamily:"L",style:{color:s.r.color.white,cursor:"pointer"},children:"Nostalgic."})}),(0,o.jsx)(u.X2,{style:{marginBlockStart:"auto"},children:(0,o.jsxs)(N,{children:[(0,o.jsx)("a",{href:"https://github.com/devshon",target:"_blank",rel:"noreferrer noopener",children:(0,o.jsx)(k.RrF,{size:"24"})}),(0,o.jsx)("a",{href:"https://devshon.github.io",target:"_blank",rel:"noreferrer noopener",children:(0,o.jsx)(k.Uh$,{size:"24"})}),(0,o.jsx)("a",{href:"https://devshon.github.io",target:"_blank",rel:"noreferrer noopener",children:(0,o.jsx)(k.RSR,{size:"24"})})]})})]})})})},N=(0,a.ZP)(u.X2).withConfig({componentId:"sc-500cc0f3-0"})(R(),function(e){return e.theme.color.gray4},function(e){return e.theme.color.gray3}),T=function(e){var t=e.children;return(0,o.jsxs)(u.sg,{style:{minHeight:"100vh"},children:[(0,o.jsx)(S,{}),t]})},U=function(){return(0,o.jsx)("div",{})},X=function(){return(0,o.jsxs)(T,{children:[(0,o.jsx)(u.X2,{style:{justifyContent:"center"},children:(0,o.jsx)(u.sg,{children:(0,o.jsx)(u.pU,{children:(0,o.jsxs)(u.X2,{children:[(0,o.jsx)(z,{url:"/images/item-11.jpeg",title:"Flexible Developer",subject:"나의 가치를 발산시킬 수 있는 공간에서\n퍼니하고 해피하게 일하기"}),(0,o.jsxs)(u.sg,{children:[(0,o.jsx)(O,{url:"/images/item-8.jpeg",title:"Problem Create",subject:"문제 현상을 발견하고 창의적으로 발산하고\n근본 문제를 정의하는 것"}),(0,o.jsx)(O,{url:"/images/item-13.jpeg",title:"Solution Search",subject:"문제만 정확히 정의했다면 해결은 쉽다"})]})]})})})}),(0,o.jsx)(u.sg,{style:{backgroundColor:s.r.color.background,padding:"50px 0"},children:(0,o.jsx)(u.pU,{children:(0,o.jsx)(U,{})})}),(0,o.jsx)(L,{})]})}}},function(e){e.O(0,[617,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);