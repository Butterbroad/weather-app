(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{42:function(n,e,t){},70:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),a=t.n(i),o=t(12),c=t.n(o),d=(t(42),t(2)),u=t(3);function s(){var n=Object(d.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmin-height: 100%;\npadding: 0 15px;\n"]);return s=function(){return n},n}function l(){var n=Object(d.a)(["\nwidth: 100%;\nheight: 100vh;\noverflow: hidden;\n"]);return l=function(){return n},n}var p=u.a.div(l()),f=u.a.div(s()),h=t(4);function x(){var n=Object(d.a)(["\nposition: absolute;\ntop: 10px;\nright: 15px;\nmin-width: 60px;\n\nimg {\n    min-width: 100%;\n    display: block;\n}\n\n@media (max-width: 530px) {\n    min-width: auto;\n    max-width: 40px;\n    right: 5px;\n\n    img {\n        max-width: 100%;\n    }\n}\n"]);return x=function(){return n},n}function b(){var n=Object(d.a)(["\nfont-size: 24px;\nfont-weight: 600;\nmargin-bottom: 10px;\ntext-align: left;\n\n@media (max-width: 530px) {\n    font-size: 18px;\n}\n"]);return b=function(){return n},n}function j(){var n=Object(d.a)(["\nfont-size: 46px;\nfont-weight: 700;\nmargin-bottom: 10px;\ntext-align: left;\n\n@media (max-width: 530px) {\n    font-size: 24px;\n}\n"]);return j=function(){return n},n}function v(){var n=Object(d.a)(["\nwidth: 100%;\nbackground-color: rgba(0,0,0,.5);\ncolor: #fff;\npadding: 20px;\nborder-radius: 10px;\nposition: relative\n"]);return v=function(){return n},n}function m(){var n=Object(d.a)(["\nmax-width: 660px;\nwidth: 100%;\nmin-height: 450px;\n\n@media (max-width: 1439px) {\n    min-height: 350px;\n    border-radius: 20px;\n}\n@media (max-width: 767px) {\n    min-height: 250px;\n}\n"]);return m=function(){return n},n}var g=u.a.div(m()),O=u.a.div(v()),w=u.a.div(j()),y=u.a.div(b()),S=u.a.div(x()),k=t(6);var C=function(){var n=Object(h.useSelector)((function(n){return n.country.country})),e=Object(k.useTranslate)();return Object(r.jsx)(g,{children:Object(r.jsxs)(O,{children:[Object(r.jsx)(S,{children:Object(r.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(null===n||void 0===n?void 0:n.weather[0].icon,".png"),alt:""})}),Object(r.jsxs)(w,{children:[e("cityName")," ",null===n||void 0===n?void 0:n.name]}),Object(r.jsxs)(w,{children:[e("country")," ",null===n||void 0===n?void 0:n.sys.country]}),Object(r.jsxs)(y,{children:[e("weather")," ",null===n||void 0===n?void 0:n.weather[0].main]}),Object(r.jsxs)(y,{children:[e("temperature")," ",Math.round(null===n||void 0===n?void 0:n.main.temp)," \u2103"]}),Object(r.jsxs)(y,{children:[e("feelsLike")," ",Math.round(null===n||void 0===n?void 0:n.main.feels_like)," \u2103"]}),Object(r.jsxs)(y,{children:[e("pressure")," ",null===n||void 0===n?void 0:n.main.pressure]}),Object(r.jsxs)(y,{children:[e("windSpeed")," ",null===n||void 0===n?void 0:n.wind.speed," m/s"]})]})})},I=t(11);function z(){var n=Object(d.a)(["\nheight: 40px;\npadding: 0 15px;\nmin-width: 200px;\nbackground-color: #fff;\ncolor: #000;\ncursor: pointer;\nborder: none;\nmargin-left: 20px;\noutline: none;\nborder-radius: 6px;\nfont-size: 18px;\n\n@media (max-width: 1023px) {\n  margin-left: 10px;\n}\n@media (max-width: 639px) {\n  min-width: auto;\n}\n"]);return z=function(){return n},n}function E(){var n=Object(d.a)(["\nmax-width: 1470px;\npadding: 0 15px;\nwidth: 100%;\nmargin: 0 auto;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nheight: 80px;\n"]);return E=function(){return n},n}function L(){var n=Object(d.a)(["\nbackground-color: #34495e;\n"]);return L=function(){return n},n}var R=u.a.header(L()),T=u.a.div(E()),N=u.a.button(z());function D(){var n=Object(d.a)(["\npadding: 8px;\nbackground-color: #fff;\ncursor: pointer;\ntext-transform: uppercase;\nfont-size: 16px;\ntransition: all .3s ease;\nborder-top: 1px solid #34495e;\n&:last-child {\n  border-radius: 0 0 6px 6px;\n}\n&:hover {\n  background-color: #c8d6e5;\n}\n"]);return D=function(){return n},n}function F(){var n=Object(d.a)(["\nposition: absolute;\ntop: 100%;\nright: 0;\nwidth: 100%;\ntext-align: center;\nvisibility: hidden;\nopacity: 0;\n"]);return F=function(){return n},n}function P(){var n=Object(d.a)(["\nfont-size: 16px;\ntransition: all .4s ease;\ntext-transform: uppercase;\n"]);return P=function(){return n},n}function U(){var n=Object(d.a)(["\nheight: 40px;\n  background-color: #fff;\n  color: #000;\n  margin-left: 20px;\n  border-radius: 6px 6px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 2;\n  flex: 0 0 50px;\n  cursor: pointer;\n\n  :hover div {\n      visibility: visible;\n      opacity: 1;\n  }\n\n  @media (max-width: 1023px) {\n    margin-left: 10px;\n  }\n  @media (max-width: 767px) {\n    font-size: 14px;\n  }\n"]);return U=function(){return n},n}var _=u.a.div(U()),J=u.a.div(P()),M=u.a.div(F()),W=u.a.div(D()),G="SET_CURRENT_ITEM",H=t(16),A=t.n(H),B=t(33),V="GET_COUNTRY",q="SHOW-LOADER",K="HIDE-LOADER",Y=function(){return{type:K}},Q="SHOW_ERROR",X="HIDE_ERROR",Z=t(34),$=t.n(Z),nn=JSON.parse(localStorage.getItem("cities"))||[],en=function(n){return function(){var e=Object(B.a)(A.a.mark((function e(t){var r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:q}),e.next=4,$.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(n.value,"&units=metric&lang=").concat(n.locale,"&appid=d9e0ed92bc042252ca932a5d5e95ecd2"));case 4:r=e.sent,i=r.data,t({type:V,payload:i}),nn.length&&nn.find((function(e){return e.toLowerCase()===n.value.toLowerCase()}))||(nn.push(n.value.toLowerCase()),localStorage.setItem("cities",JSON.stringify(nn))),t(Y()),t({type:X}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:Q}),t(Y());case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}()};var tn=function(){var n=Object(h.useDispatch)(),e=Object(h.useSelector)((function(n){return n.dropdown.currentItem})),t=Object(h.useSelector)((function(n){return n.country.country}));return Object(r.jsxs)(_,{children:[Object(r.jsx)(J,{children:null===e||void 0===e?void 0:e.name}),Object(r.jsx)(M,{children:[{name:"ENG",locale:"en",id:"1"},{name:"RU",locale:"ru",id:"2"}].map((function(e){return Object(r.jsx)(W,{onClick:function(){n(function(n){return{type:G,payload:n}}(e)),n(k.IntlActions.setLocale(e.locale)),t&&n(en({value:null===t||void 0===t?void 0:t.name,locale:e.locale}))},children:e.name},e.id)}))})]})};function rn(){var n=Object(d.a)(["\nwidth: 100%;\nheight: 40px;\nborder-bottom: 1px solid #000;\npadding: 0 15px;\nfont-size: 18px;\nfont-weight: 500;\ndisplay: flex;\nalign-items: center;\ncursor: pointer;\nbackground-color: rgba(255,255,255,.9);\ntransition: all .3s ease;\n\n&:last-child {\n  border-bottom: none;\n}\n&:hover {\n  background-color: #fff;\n}\n"]);return rn=function(){return n},n}function an(){var n=Object(d.a)(["\nposition: absolute;\ntop: calc(100% + 1px);\nleft: 0;\nwidth: 100%;\nz-index: 2;\nborder-bottom-left-radius: 12px;\nborder-bottom-right-radius: 12px;\noverflow: hidden;\nheight: 140px;\noverflow-y: auto;\n"]);return an=function(){return n},n}function on(){var n=Object(d.a)(["\nwidth: 100%;\nheight: 40px;\noutline: none;\nborder: none;\nfont-size: 18px;\nborder-top-left-radius: 6px;\nborder-top-right-radius: 6px;\npadding: 0 15px;\n\n@media (max-width: 767px) {\n  font-size: 14px;\n}\n"]);return on=function(){return n},n}function cn(){var n=Object(d.a)(["\nmax-width: 80%;\nwidth: 100%;\nposition: relative;\n"]);return cn=function(){return n},n}var dn=u.a.div(cn()),un=u.a.input(on()),sn=u.a.ul(an()),ln=u.a.li(rn());var pn=function(n){var e=n.value,t=n.setValue,a=n.onInputSubmit,o=JSON.parse(localStorage.getItem("cities"))||[],c=Object(i.useState)(!1),d=Object(I.a)(c,2),u=d[0],s=d[1],l=Object(i.useState)([]),p=Object(I.a)(l,2),f=p[0],h=p[1],x=Object(k.useTranslate)();return Object(i.useEffect)((function(){h(o)}),[]),Object(r.jsxs)(dn,{children:[Object(r.jsx)(un,{type:"text",onChange:function(n){t(n.target.value),h(o.filter((function(e){return e.toLowerCase().includes(n.target.value.toLowerCase())})))},onKeyPress:function(n){"Enter"===n.key&&e&&a()},value:e,onFocus:function(){s(!0),e&&h(o.filter((function(n){return n.toLowerCase().includes(e.toLowerCase())})))},onBlur:function(){return setTimeout((function(){return s(!1)}),100)},placeholder:x("placeholder")}),u&&!!f.length&&Object(r.jsx)(sn,{children:f.map((function(n){return Object(r.jsx)(ln,{onClick:function(){return t(n[0].toUpperCase()+n.slice(1))},children:n[0].toUpperCase()+n.slice(1)},n)}))})]})};var fn=function(){var n=Object(i.useState)(""),e=Object(I.a)(n,2),t=e[0],a=e[1],o=Object(h.useDispatch)(),c=Object(h.useSelector)((function(n){return n.dropdown.currentItem})).locale,d=function(){o(en({value:t,locale:c})),a("")},u=Object(k.useTranslate)();return Object(r.jsx)(R,{children:Object(r.jsxs)(T,{children:[Object(r.jsx)(pn,{value:t,setValue:a,onInputSubmit:d}),Object(r.jsx)(N,{onClick:function(){d()},children:u("button")}),Object(r.jsx)(tn,{})]})})};function hn(){var n=Object(d.a)(['\ncolor: official;\ndisplay: block;\nposition: relative;\nwidth: 80px;\nheight: 80px;\nmargin-top: -100px;\n\ndiv {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\ndiv:after {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\ndiv:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\ndiv:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\ndiv:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\ndiv:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\ndiv:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\ndiv:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\ndiv:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\ndiv:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\ndiv:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\ndiv:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\ndiv:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\ndiv:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n']);return hn=function(){return n},n}function xn(){var n=Object(d.a)(["\nposition: fixed;\nheight: 100%;\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]);return xn=function(){return n},n}var bn=u.a.div(xn()),jn=u.a.div(hn());var vn=function(){return Object(r.jsx)(bn,{children:Object(r.jsxs)(jn,{children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})};function mn(){var n=Object(d.a)(["\npadding: 20px;\nfont-size: 24px;\nfont-weight: 700;\nposition: relative;\nbackground-color: rgba(0,0,0,.5);\ncolor: #fff;\nborder-radius: 10px;\n\n\n@media (max-width: 1024px) {\n  font-size: 18px;\n}\n@media (max-width: 639px) {\n  font-size: 16px;\n}\n"]);return mn=function(){return n},n}var gn=u.a.div(mn());var On=function(){return Object(r.jsx)(gn,{children:"\u0422\u0430\u043a\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."})};var wn=function(){var n=Object(h.useSelector)((function(n){return n.loader.loading})),e=Object(h.useSelector)((function(n){return n.error.error})),t=Object(h.useSelector)((function(n){return n.country.country}));return Object(r.jsxs)(p,{children:[Object(r.jsx)(fn,{}),Object(r.jsxs)(f,{children:[n?Object(r.jsx)(vn,{}):t&&!e&&Object(r.jsx)(C,{}),e&&Object(r.jsx)(On,{})]})]})},yn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),a(n),o(n)}))},Sn=t(7),kn=t(35),Cn=t(36),In=t(10),zn={country:null},En={loading:!0},Ln={currentItem:{name:"ENG",locale:"en"}},Rn={error:!1},Tn=Object(Sn.combineReducers)({country:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case V:return Object(In.a)(Object(In.a)({},n),{},{country:e.payload});default:return n}},loader:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:En,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q:return{loading:!0};case K:return{loading:!1};default:return n}},dropdown:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ln,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case G:return Object(In.a)(Object(In.a)({},n),{},{currentItem:e.payload});default:return n}},error:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Q:return{error:!0};case X:return{error:!1};default:return n}},Intl:k.IntlReducer}),Nn=Object(Sn.createStore)(Tn,{Intl:{locale:"en"}},Object(Cn.composeWithDevTools)(Object(Sn.applyMiddleware)(kn.a)));c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h.Provider,{store:Nn,children:Object(r.jsx)(k.IntlProvider,{translations:{ru:{locale:"ru",messages:{button:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c",cityName:"\u0413\u043e\u0440\u043e\u0434:",country:"\u0421\u0442\u0440\u0430\u043d\u0430:",weather:"\u041f\u043e\u0433\u043e\u0434\u0430:",temperature:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430:",feelsLike:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a:",pressure:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435:",windSpeed:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430:",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"}},en:{locale:"en-US",messages:{button:"Get",cityName:"City name:",country:"Country:",weather:"Weather:",temperature:"Temperature:",feelsLike:"Feels like:",pressure:"Pressure:",windSpeed:"Wind speed:",placeholder:"Type city name"}}},children:Object(r.jsx)(wn,{})})})}),document.getElementById("root")),yn()}},[[70,1,2]]]);
//# sourceMappingURL=main.1894998b.chunk.js.map