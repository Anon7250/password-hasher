(this["webpackJsonppassword-hasher"]=this["webpackJsonppassword-hasher"]||[]).push([[0],{123:function(e,a,t){e.exports=t(228)},129:function(e,a,t){},133:function(e,a){},135:function(e,a){},146:function(e,a){},148:function(e,a){},175:function(e,a){},177:function(e,a){},178:function(e,a){},184:function(e,a){},186:function(e,a){},204:function(e,a){},206:function(e,a){},218:function(e,a){},221:function(e,a){},227:function(e,a,t){},228:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(119),l=t.n(c),o=(t(128),t(40)),s=t(41),i=t(43),u=t(42),m=t(122),h=t(17),E=t(7),d=t(25),f=(t(129),t(67)),p=t(33),g=t(23),v=t(121),w=t(120),b=function(e,a,t){if("sha512;last4"!==e)throw new Error("Unsupported hash method: ".concat(e));var n=function(e){var a=Object(w.createHash)("sha512");return a.update(e.toString()),a.digest("hex").toString()}(a.toString()+t.toString());return n.slice(n.length-4)},y=function(e){var a=r.a.useState(!1),t=Object(f.a)(a,2),n=t[0],c=t[1],l=r.a.useState(""),o=Object(f.a)(l,2),s=o[0],i=o[1],u=b(e.hashMethod,e.salt,s)===e.hash,m=n?"More..":"Check",d=function(){return c(!0)};return r.a.createElement(h.a,null,r.a.createElement(E.a,{xs:3,lg:4},e.name),r.a.createElement(E.a,{xs:3,lg:4},r.a.createElement(v.a,null,r.a.createElement(g.a.Control,{"data-testid":"verify-password:input",value:s,type:"password",isInvalid:n&&!u,onChange:function(e){c(!1),i(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&d()}}),r.a.createElement(g.a.Control.Feedback,{type:"invalid"},"Wrong Password"))),r.a.createElement(E.a,{xs:3,lg:2,className:"action-col"},r.a.createElement(p.a,{variant:"primary",onClick:d},m)),r.a.createElement(E.a,{xs:3,lg:2,className:"action-col"},r.a.createElement(p.a,{variant:"danger",onClick:e.onDelete},"Delete")))},x=function(){return r.a.createElement(h.a,null,r.a.createElement(E.a,{xs:3,lg:4},r.a.createElement(g.a.Control,null)),r.a.createElement(E.a,{xs:3,lg:4},r.a.createElement(g.a.Control,{type:"password"})),r.a.createElement(E.a,{xs:3,lg:2,className:"action-col"},r.a.createElement(p.a,{variant:"primary"},"Add")),r.a.createElement(E.a,{xs:3,lg:2,className:"action-col"}))},j=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{"data-testid":"password-list"},r.a.createElement(d.a.Item,null,r.a.createElement(h.a,null,r.a.createElement(E.a,{xs:3,lg:4},"Name"),r.a.createElement(E.a,{xs:3,lg:4},"Password"),r.a.createElement(E.a,{xs:6,lg:4,className:"action-col"},"Actions"))),r.a.createElement(d.a.Item,null,r.a.createElement(x,null)),r.a.createElement(d.a.Item,null,r.a.createElement(y,{name:"test123",salt:"8826aa59-4133-4074-a904-c9be256be784",hash:"3c1c",hashMethod:"sha512;last4"})),r.a.createElement(d.a.Item,null,r.a.createElement(y,{name:"abc000",salt:"2644047a-eca9-4858-8282-048480983051",hash:"a02d",hashMethod:"sha512;last4"})))}}]),t}(r.a.Component),k=(t(227),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(j,null))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.19abb028.chunk.js.map