(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{12:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return c});var a="LOGIN_SUCCESS",r="LOGIN_LOADING",o="LOGIN_ERRORS",c="LOGOUT"},20:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a=function(e){return e.login.auth},r=function(e){return e.login.loading}},21:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var a="REGISTER_SUCCESS",r="REGISTER_ERROR",o="ON_REGISTER_SUCCESS"},34:function(e,t,n){"use strict";var a=n(28),r=n(29),o=n(31),c=n(30),l=n(32),i=n(17),u=n(1),s=n.n(u),d=n(9),m=n(11),b=n(15),f=n(20),h=n(35),p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).toggle=n.toggle.bind(Object(i.a)(Object(i.a)(n))),n.state={isOpen:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.props,t=e.auth,n=e.logoutAction;return s.a.createElement("div",null,s.a.createElement(d.j,{color:"success",light:!0,expand:"md",dark:!0},s.a.createElement(d.c,null,s.a.createElement(m.c,{to:"/",className:"navbar-brand"},"RR"),s.a.createElement(d.k,{onClick:this.toggle}),s.a.createElement(d.b,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(d.h,{className:"ml-auto",navbar:!0},s.a.createElement(d.i,null,t&&s.a.createElement(m.c,{to:"/dashboard",className:"nav-link"},"Dashboard")),s.a.createElement(d.i,null,t&&s.a.createElement(m.c,{to:"/profile",className:"nav-link"},"Profile")),s.a.createElement(d.i,null,t?s.a.createElement(m.c,{to:"/login",className:"nav-link",onClick:function(){return n()}},"Logout"):s.a.createElement(m.c,{to:"/login",className:"nav-link"},"Login")),t||s.a.createElement(m.c,{to:"/about",className:"nav-link"},"About"))))))}}]),t}(s.a.Component);t.a=Object(b.b)(function(e){return{auth:Object(f.a)(e)}},h)(p)},35:function(e,t,n){"use strict";n.r(t),n.d(t,"loginAction",function(){return r}),n.d(t,"logoutAction",function(){return o}),n.d(t,"loginError",function(){return l});var a=n(12),r=function(e){var t=e.values,n=e.setFieldError,a=e.history;return function(e){e(i()),setTimeout(function(){"coba"!==t.password&&(n("password","Password Not Match"),e(l())),"coba@gmail.com"!==t.email&&(n("email","email not found"),e(l())),"coba@gmail.com"===t.email&&"coba"===t.password&&(e(c()),a.push("/dashboard"))},1e3)}},o=function(){return{type:a.d}},c=function(e){return{type:a.c,payload:e}},l=function(e){return{type:a.a,payload:e}},i=function(){return{type:a.b}}},46:function(e,t,n){e.exports=n(73)},51:function(e,t,n){},53:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),l=(n(51),n(53),n(11)),i=n(3),u=n(9),s=n(34),d=n(44),m=n(15),b=n(20);var f=Object(m.b)(function(e){return{auth:Object(b.a)(e)}})(function(e){var t=e.component,n=Object(d.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return n.auth?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),h=Object(a.lazy)(function(){return n.e(2).then(n.bind(null,292))}),p=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,293))}),g=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,297))}),E=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,294))}),O=Object(a.lazy)(function(){return n.e(6).then(n.bind(null,295))}),v=Object(a.lazy)(function(){return n.e(7).then(n.bind(null,296))}),j=function(){return r.a.createElement(l.a,null,r.a.createElement(a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(u.c,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading")},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:h}),r.a.createElement(i.b,{path:"/about",component:p}),r.a.createElement(i.b,{path:"/register",component:g}),r.a.createElement(i.b,{path:"/login",component:E}),r.a.createElement(f,{path:"/dashboard",component:v}),r.a.createElement(f,{path:"/profile",component:O}),r.a.createElement(f,{path:"/dashboard",component:v}))))))},y=n(8),w=n(27),k=n(41),S=n.n(k),R=n(10),N={},C=n(12),G={auth:!1,loading:!1},I=n(21),L={loading:!1},_=Object(y.c)({about:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ABOUT":return Object(R.a)({},e,a);default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case C.c:return Object(R.a)({},e,{auth:!0,loading:!1});case C.b:return Object(R.a)({},e,{loading:!0});case C.a:return Object(R.a)({},e,{loading:!1});case C.d:return Object(R.a)({},e,{auth:!1});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case I.a:return Object(R.a)({},e,{loading:!0});case I.c:case I.b:return Object(R.a)({},e,{loading:!1});default:return e}}}),z=n(42),A={key:"root",storage:S.a,whitelist:["login"]},T=[z.a],U=Object(w.a)(A,_),P=Object(y.e)(U,y.a.apply(void 0,T)),x=Object(w.b)(P),B=n(43),F=function(){return r.a.createElement(m.a,{store:P},r.a.createElement(B.a,{loading:null,persistor:x},r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),";")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(67),n(69),n(71);c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,9,8]]]);
//# sourceMappingURL=main.f438ba17.chunk.js.map