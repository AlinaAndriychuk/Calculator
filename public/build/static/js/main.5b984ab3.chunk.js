(this["webpackJsonpplanning-system"]=this["webpackJsonpplanning-system"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),c=n.n(r);n(9),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,u=function(e,t,n){var a=e,l=t;return l.toString().includes("(")&&(l=l.split("(").join("").split(")").join("")),l.toString().includes("%")&&(l=a/100*l.slice(0,l.length-1)),"+"===n?Number(a)+Number(l):"\xd7"===n?Number(a)*Number(l):"-"===n?Number(a)-Number(l):"\xf7"===n?Number(a)/Number(l):a},o="",s="",m=!1;var b=function(e,t){var n=document.getElementById("field"),a=n.value,l=a.slice(a.length-1,a.length);if("="===e)return o=u(o,s,i),s="",i="",m=!1,o;if("setField"===t)return o=e,s="",i="",void(m=!1);if("addMemory"!==t){if("m"===e)return u(o,s,i);if("clean"===e)return o="",s="",m=!1,i="",void(n.value="");if("change"===e)return m?l===i?o=o.toString().startsWith("-")?o.slice(1):"-"+o:s=s.startsWith("(-")?s.slice(1):"(-"+s+")":o=o.toString().startsWith("-")?o.slice(1):"-"+o,void(n.value=o+i+s);var r=e.target.innerHTML;if("%"===r){if(!m)return;if(""===s)return;o=u(o,s+r,i),n.value=o,m=!1,s="",i=""}else e.target.closest(".numbers-container")?m?"."!==r||s.includes(".")?"."!==r?")"===l?(s=s.slice(0,s.length-1)+r+")",n.value=a.slice(0,a.length-1)+r+")"):(s+=r,n.value=a+r):n.value=a:")"===l?(s=s.slice(0,s.length-1)+r+")",n.value=a.slice(0,a.length-1)+r+")"):(s+=r,n.value=a+r):"."!==r||o.includes(".")?"."!==r?(o+=r,n.value=a+r):n.value=a:(o+=r,n.value=a+r):e.target.closest(".btn--action")&&(m?(o=u(o,s,i),s=""):m=!0,isFinite(l)||"."===l||")"===l?n.value=o+r:n.value=o.slice(0,n.value.length-1)+r,i=r);n.scrollBy(50,0)}else e.toString().startsWith("-")?s="("+e+")":s+=e},v=[7,8,9,4,5,6,1,2,3];var g=function(){return l.a.createElement("div",{className:"numbers-container"},v.map((function(e,t){return l.a.createElement("button",{className:"btn btn--black",onClick:b,key:t},e)})),l.a.createElement("button",{className:"btn btn--black btn--big",onClick:b},"0"),l.a.createElement("button",{className:"btn btn--black",onClick:b},"."))},f=["\xd7","-","+"];var d=function(){return l.a.createElement(l.a.Fragment,null,f.map((function(e,t){return l.a.createElement("button",{className:"btn btn--orange btn--action",onClick:b,key:t},e)})))};var E=function(e){document.getElementById("field").value=b("=")};var h=function(){return l.a.createElement("button",{className:"btn btn--orange",onClick:E},"=")};var k=function(){return l.a.createElement("input",{className:"field",id:"field",disabled:!0})},N=n(3);var y=function(){var e=Object(a.useState)(0),t=Object(N.a)(e,2),n=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn--black btn--small",onClick:function(){r(0)}},"mc"),l.a.createElement("button",{className:"btn btn--black btn--small",onClick:function(){var e=document.getElementById("field"),t=e.value.slice(e.value.length-1,e.value.length);isFinite(t)||"."===t||")"===t?(e.value=n,b(n,"setField")):(n.toString().startsWith("-")?e.value=e.value+"("+n+")":e.value=e.value+n,b(n,"addMemory"))}},"mr"),l.a.createElement("button",{className:"btn btn--black btn--small",onClick:function(){r(u(n,b("m"),"-"))}},"m-"),l.a.createElement("button",{className:"btn btn--orange btn--small",onClick:function(){r(u(n,b("m"),"+"))}},"m+"))};var C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn--gray",onClick:function(){b("clean")}},"AC"),l.a.createElement("button",{className:"btn btn--gray",onClick:function(){b("change")}},"+/-"),l.a.createElement("button",{className:"btn btn--gray",onClick:b},"%"),l.a.createElement("button",{className:"btn btn--orange btn--action",onClick:b},"\xf7"))};c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement(C,null),l.a.createElement(y,null),l.a.createElement(g,null),l.a.createElement(d,null),l.a.createElement(h,null)),document.getElementById("container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.5b984ab3.chunk.js.map