(this["webpackJsonpreact-typescript-mobx"]=this["webpackJsonpreact-typescript-mobx"]||[]).push([[0],{66:function(e,t,a){e.exports=a(99)},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),o=a(27),l=a(28),u=a(63),i=a(61),m=a(62),h=a(104),p=a(102),b=a(103),d=a(105),g=a(106),E=a(23),f=a(4),v=function(){function e(){Object(o.a)(this,e),this.users=["Bill","Charlie","Percy","Fred"],this.messages=[]}return Object(l.a)(e,[{key:"chatInput",value:function(e,t){this.messages.push({id:100*Math.random(),user:e,message:t})}}]),e}();Object(f.i)(v,{users:f.n,messages:f.n,chatInput:f.f});var y=h.a.Content,j=Object(E.b)("store")(Object(E.c)((function(e){return r.a.createElement("div",null,e.store.messages?e.store.messages.map((function(t){return r.a.createElement("div",{className:"commentWrapper",key:t.id},r.a.createElement(p.a,{className:t.user===e.user?"currentUserMessage":"",avatar:r.a.createElement(b.a,{style:{backgroundColor:"#f56a00"}},t.user[0]),author:t.user,content:t.message}))})):null)}))),O=Object(E.b)("store")(Object(E.c)((function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),s=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,e.user," said:"),r.a.createElement("br",null),r.a.createElement("input",{value:s,onChange:function(e){c(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&s&&e.store.chatInput(e.user,s)}}))}))),w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).store=new v,e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(y,{className:"site-layout",style:{padding:"0 50px",marginTop:64}},r.a.createElement(E.a,{store:this.store},r.a.createElement("div",null,r.a.createElement(d.a,null,this.store.users?this.store.users.map((function(e,t){return r.a.createElement(g.a,{className:"gutter-row",span:12,key:t},r.a.createElement("div",{className:"chatPanel"},r.a.createElement(j,{user:e}),r.a.createElement(O,{user:e})))})):null)))))}}]),a}(n.Component);a(97),a(98),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.6d84a994.chunk.js.map