(this["webpackJsonpsimple-react-todo"]=this["webpackJsonpsimple-react-todo"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(9),l=n.n(c),r=n(5),i=n(4);var d={background:"#af3000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},u=function(e){var t=e.todo,n=e.index,o=e.onHandleDelete,c=e.onHandleComplete;return a.a.createElement("div",{style:{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.completed?"line-through":"none"}},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:c.bind(this,n)})," "," ",t.title,a.a.createElement("button",{onClick:o.bind(this,n),style:d},"X")))};var m=function(e){var t=e.todos,n=e.onHandleDelete,o=e.onHandleComplete;return Object.keys(t).map((function(e){return a.a.createElement(u,{todo:t[e],key:e,index:e,onHandleDelete:n,onHandleComplete:o})}))};var p=function(e){var t=e.onAddTodo,n=Object(o.useState)(""),c=Object(i.a)(n,2),l=c[0],r=c[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l),r("")},style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ..",value:l,onChange:function(e){return r(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))};var s={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},f=function(){return a.a.createElement("header",{style:s},a.a.createElement("h1",null,"TodoList"))},b=n(1),v=(n(17),[{id:Object(b.v4)(),title:"Go shopping",completed:!1},{id:Object(b.v4)(),title:"Cook Dinner",completed:!0},{id:Object(b.v4)(),title:"Read a book",completed:!1},{id:Object(b.v4)(),title:"Practice React",completed:!0}]);var h=function(){var e=Object(o.useState)(v),t=Object(i.a)(e,2),n=t[0],c=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(f,null),a.a.createElement(p,{onAddTodo:function(e){var t={id:Object(b.v4)(),title:e,completed:!1};c([].concat(Object(r.a)(n),[t]))}}),a.a.createElement(m,{todos:n,onHandleComplete:function(e){var t=Object(r.a)(n);t[e].completed=!t[e].completed,c(t)},onHandleDelete:function(e){var t=Object(r.a)(n);t.splice(e,1),c(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3bdac204.chunk.js.map