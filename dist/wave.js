!function r(s,h,a){function c(e,t){if(!h[e]){if(!s[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(u)return u(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var n=h[e]={exports:{}};s[e][0].call(n.exports,function(t){return c(s[e][1][t]||t)},n,n.exports,r,s,h,a)}return h[e].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)c(a[t]);return c}({1:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.getColor=function(){return["rgba(162,237,246,.2)","rgba(31,166,196,.2)","rgba(13,71,130,.2)"]},i.colorHex=function(t){var e=t;if(/^(rgb|RGB)/.test(e)){for(var i=e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),o="#",n=0;n<i.length;n++){var r=Number(i[n]).toString(16);r.length<2&&(r="0"+r),o+=r}return 7!==o.length&&(o=e),o}if(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){var s=e.replace(/#/,"").split("");if(6===s.length)return e;if(3===s.length){var h="#";for(n=0;n<s.length;n+=1)h+=s[n]+s[n];return h}}return e},i.colorRgb=function(t,e){var i=t.toLowerCase();if(i&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(i)){if(4===i.length){for(var o="#",n=1;n<4;n+=1)o+=i.slice(n,n+1).concat(i.slice(n,n+1));i=o}var r=[];for(n=1;n<7;n+=2)r.push(parseInt("0x"+i.slice(n,n+2)));return"rgba("+r.join(",")+","+e+")"}return i}},{}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=t("./untils"),n=function(){function t(t,e){this.container=document.querySelector(t),this.options=Object.assign({number:3,smooth:70,velocity:1,height:.5,colors:["#ff7657"],opacity:.5,position:"bottom"},e),this.lines=[],this.frame=null,this.step=0,this.status="pause",this.init()}return t.prototype.init=function(){if(null===this.container.querySelector("canvas")){var t=document.createElement("canvas");t.width=this.container.offsetWidth,t.height=this.container.offsetHeight,this.container.appendChild(t)}this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.setLines()},t.prototype.animate=function(){var r=this;this.status="animating";var s=this.canvas,h=this.ctx;h.clearRect(0,0,s.width,s.height),this.step+=this.options.velocity,this.lines.forEach(function(t,e){var i=(r.step+180*e/r.lines.length)*Math.PI/180,o=Math.sin(i)*r.options.smooth,n=Math.cos(i)*r.options.smooth;h.fillStyle=t,h.beginPath(),h.moveTo(0,s.height*r.options.height+o),h.bezierCurveTo(s.width/2,s.height*r.options.height+o-r.options.smooth,s.width/2,s.height*r.options.height+n-r.options.smooth,s.width,s.height*r.options.height+n),h.lineTo(s.width,s.height),h.lineTo(0,s.height),h.lineTo(0,s.height*r.options.height+o),h.closePath(),h.fill()});var t=this;this.frame=requestAnimationFrame(function(){t.animate()})},t.prototype.pause=function(){cancelAnimationFrame(this.frame),this.frame=null,this.status="pause"},t.prototype.setOptions=function(){this.setLines()},t.prototype.setLines=function(){for(var t=0;t<this.options.number;t++){var e=o.colorRgb(o.colorHex(this.options.colors[t%this.options.colors.length]),this.options.opacity);this.lines.push(e)}},t}();window.Wave=n,i.default=n},{"./untils":1}]},{},[2]);
//# sourceMappingURL=wave.js.map