(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),s=n(3),c=n(4),h=n(6),l=n(5),u=n(7),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(l.a)(t).call(this,e))).state={points:[]},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"move",value:function(e){if("svg"===e.target.tagName.toLowerCase()){e.preventDefault();var t=this.refs.svg.getBoundingClientRect(),n=e.clientX,a=e.clientY;"touchmove"===e.type&&(e.preventDefault(),n=e.touches[0].pageX,a=e.touches[0].pageY),n-=t.left,a-=t.top;var o=this.state.points;o.length>50&&o.shift(),o.push({x:n,y:a}),this.setState(o)}}},{key:"render",value:function(){var e=o.a.createElement("circle",{cx:"100",cy:"100",r:"1"});if(this.state.points.length>0){var t=this.state.points,n="";e=t.map((function(e,a){var r=a===t.length-1,i=0===a;return i&&(n+="M "),n+=" "+e.x+" "+e.y,i&&(n+=" L "),r?o.a.createElement("path",{key:a,stroke:"grey",strokeLinecap:"round",fill:"none",strokeWidth:"30",d:n}):null}))}return o.a.createElement("div",{onMouseMove:this.move.bind(this),onTouchMove:this.move.bind(this)},o.a.createElement("svg",{ref:"svg",width:"100vw",height:"100vh"},o.a.createElement("defs",null,o.a.createElement("marker",{id:"arrow",markerWidth:"4",markerHeight:"20",refX:"0",refY:"4",orient:"auto",markerUnits:"strokeWidth",viewBox:"0 0 50 50"},o.a.createElement("path",{d:"M0,0 L0,6 L9,3 z",fill:"#f00"}))),e))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.body.style.overflow="hidden",i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.e49534d1.chunk.js.map