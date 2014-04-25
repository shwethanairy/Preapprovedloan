/*!
 * jQuery UI Position 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function($,u){$.ui=$.ui||{};var h=/left|center|right/,v=/top|center|bottom/,c="center",s={},a=$.fn.position,b=$.fn.offset;$.fn.position=function(o){if(!o||!o.of){return a.apply(this,arguments)}o=$.extend({},o);var t=$(o.of),d=t[0],e=(o.collision||"flip").split(" "),f=o.offset?o.offset.split(" "):[0,0],g,j,k;if(d.nodeType===9){g=t.width();j=t.height();k={top:0,left:0}}else if(d.setTimeout){g=t.width();j=t.height();k={top:t.scrollTop(),left:t.scrollLeft()}}else if(d.preventDefault){o.at="left top";g=j=0;k={top:o.of.pageY,left:o.of.pageX}}else{g=t.outerWidth();j=t.outerHeight();k=t.offset()}$.each(["my","at"],function(){var p=(o[this]||"").split(" ");if(p.length===1){p=h.test(p[0])?p.concat([c]):v.test(p[0])?[c].concat(p):[c,c]}p[0]=h.test(p[0])?p[0]:c;p[1]=v.test(p[1])?p[1]:c;o[this]=p});if(e.length===1){e[1]=e[0]}f[0]=parseInt(f[0],10)||0;if(f.length===1){f[1]=f[0]}f[1]=parseInt(f[1],10)||0;if(o.at[0]==="right"){k.left+=g}else if(o.at[0]===c){k.left+=g/2}if(o.at[1]==="bottom"){k.top+=j}else if(o.at[1]===c){k.top+=j/2}k.left+=f[0];k.top+=f[1];return this.each(function(){var l=$(this),m=l.outerWidth(),n=l.outerHeight(),p=parseInt($.curCSS(this,"marginLeft",true))||0,q=parseInt($.curCSS(this,"marginTop",true))||0,r=m+p+(parseInt($.curCSS(this,"marginRight",true))||0),w=n+q+(parseInt($.curCSS(this,"marginBottom",true))||0),x=$.extend({},k),y;if(o.my[0]==="right"){x.left-=m}else if(o.my[0]===c){x.left-=m/2}if(o.my[1]==="bottom"){x.top-=n}else if(o.my[1]===c){x.top-=n/2}if(!s.fractions){x.left=Math.round(x.left);x.top=Math.round(x.top)}y={left:x.left-p,top:x.top-q};$.each(["left","top"],function(i,z){if($.ui.position[e[i]]){$.ui.position[e[i]][z](x,{targetWidth:g,targetHeight:j,elemWidth:m,elemHeight:n,collisionPosition:y,collisionWidth:r,collisionHeight:w,offset:f,my:o.my,at:o.at})}});if($.fn.bgiframe){l.bgiframe()}l.offset($.extend(x,{using:o.using}))})};$.ui.position={fit:{left:function(p,d){var w=$(window),o=d.collisionPosition.left+d.collisionWidth-w.width()-w.scrollLeft();p.left=o>0?p.left-o:Math.max(p.left-d.collisionPosition.left,p.left)},top:function(p,d){var w=$(window),o=d.collisionPosition.top+d.collisionHeight-w.height()-w.scrollTop();p.top=o>0?p.top-o:Math.max(p.top-d.collisionPosition.top,p.top)}},flip:{left:function(p,d){if(d.at[0]===c){return}var w=$(window),o=d.collisionPosition.left+d.collisionWidth-w.width()-w.scrollLeft(),m=d.my[0]==="left"?-d.elemWidth:d.my[0]==="right"?d.elemWidth:0,e=d.at[0]==="left"?d.targetWidth:-d.targetWidth,f=-2*d.offset[0];p.left+=d.collisionPosition.left<0?m+e+f:o>0?m+e+f:0},top:function(p,d){if(d.at[1]===c){return}var w=$(window),o=d.collisionPosition.top+d.collisionHeight-w.height()-w.scrollTop(),m=d.my[1]==="top"?-d.elemHeight:d.my[1]==="bottom"?d.elemHeight:0,e=d.at[1]==="top"?d.targetHeight:-d.targetHeight,f=-2*d.offset[1];p.top+=d.collisionPosition.top<0?m+e+f:o>0?m+e+f:0}}};if(!$.offset.setOffset){$.offset.setOffset=function(e,o){if(/static/.test($.curCSS(e,"position"))){e.style.position="relative"}var d=$(e),f=d.offset(),g=parseInt($.curCSS(e,"top",true),10)||0,i=parseInt($.curCSS(e,"left",true),10)||0,p={top:(o.top-f.top)+g,left:(o.left-f.left)+i};if('using'in o){o.using.call(e,p)}else{d.css(p)}};$.fn.offset=function(o){var e=this[0];if(!e||!e.ownerDocument){return null}if(o){if($.isFunction(o)){return this.each(function(i){$(this).offset(o.call(this,i,$(this).offset()))})}return this.each(function(){$.offset.setOffset(this,o)})}return b.call(this)}}if(!$.curCSS){$.curCSS=$.css}(function(){var d=document.getElementsByTagName("body")[0],e=document.createElement("div"),t,f,g,o,j;t=document.createElement(d?"div":"body");g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(d){$.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"})}for(var i in g){t.style[i]=g[i]}t.appendChild(e);f=d||document.documentElement;f.insertBefore(t,f.firstChild);e.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";o=$(e).offset(function(_,o){return o}).offset();t.innerHTML="";f.removeChild(t);j=o.top+o.left+(d?2000:0);s.fractions=j>21&&j<22})()}(jQuery));