(this.webpackJsonpposenet=this.webpackJsonpposenet||[]).push([[0],{262:function(t,e,n){},264:function(t,e,n){},269:function(t,e){},270:function(t,e){},278:function(t,e){},281:function(t,e){},282:function(t,e){},284:function(t,e,n){"use strict";n.r(e);var r=n(89),i=n.n(r),o=n(235),a=n.n(o),c=(n(262),n(4)),s=n.n(c),u=n(11),h=(n(264),n(196),n(145)),l=n(257),f=n.n(l),d=n(5),v="aqua";function p(t){return[t.y,t.x]}function g(t,e,n,r,i){t.beginPath(),t.arc(n,e,r,0,2*Math.PI),t.fillStyle=i,t.fill()}function b(t,e,n,r,i){var o=Object(d.a)(t,2),a=o[0],c=o[1],s=Object(d.a)(e,2),u=s[0],h=s[1];i.beginPath(),i.moveTo(c*r,a*r),i.lineTo(h*r,u*r),i.lineWidth=2,i.strokeStyle=n,i.stroke()}var j=n(87);var x=function(){var t=Object(r.useRef)(null),e=Object(r.useRef)(null),n=function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.c({inputResolution:{width:640,height:480},scale:.8});case 2:e=t.sent,setInterval((function(){i(e)}),100);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var n=Object(u.a)(s.a.mark((function n(r){var i,a,c,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof t.current||null===t.current||4!==t.current.video.readyState){n.next=11;break}return i=t.current.video,a=t.current.video.videoWidth,c=t.current.video.videoHeight,t.current.video.width=a,t.current.video.height=c,n.next=8,r.estimateSinglePose(i);case 8:u=n.sent,console.log(u),o(u,i,a,c,e);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(t,e,n,r,i){var o=i.current.getContext("2d");i.current.width=n,i.current.height=r,function(t,e,n){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=0;i<t.length;i++){var o=t[i];if(!(o.score<e)){var a=o.position;g(n,a.y*r,a.x*r,3,v)}}}(t.keypoints,.6,o),function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;h.a(t,e).forEach((function(t){b(p(t[0].position),p(t[1].position),v,r,n)}))}(t.keypoints,.7,o)};return n(),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)(f.a,{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),Object(j.jsx)("canvas",{ref:e,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[284,1,2]]]);
//# sourceMappingURL=main.63bd5658.chunk.js.map