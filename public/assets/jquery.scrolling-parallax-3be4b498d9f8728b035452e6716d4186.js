/**
 * jQuery Scrolling Parallax v0.1
 * http://jonraasch.com/blog/scrolling-parallax-jquery-plugin
 *
 * Copyright (c) 2009 Jon Raasch (http://jonraasch.com/)
 * Licensed under the FreeBSD License (See terms below)
 *
 * @author Jon Raasch
 *
 * @projectDescription    jQuery plugin to create a parallax effect when the page is scrolled.
 * 
 * @version 0.1.0
 * 
 * @requires jquery.js (v 1.3.2 minimum)
 *
 *
 * TERMS OF USE - jQuery Scrolling Parallax
 * Open source under the FreeBSD License.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY JON RAASCH ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JON RAASCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those of the authors and should not be interpreted as representing official policies, either expressed or implied, of Jon Raasch, who is the man.
 * 
 *
 * FOR USAGE INSTRUCTIONS SEE THE DOCUMENATION AT: http://dev.jonraasch.com/scrolling-parallax/documentation
 * 
 *
 */
(function(a){a.scrollingParallax=function(b,c){function A(b){typeof b=="string"?g=B(b):(g=a(b),g.css("position",d?"absolute":"fixed"),c.enableVertical&&(o=parseInt(g.css("top"))),c.enableHorizontal&&(x=parseInt(g.css("left"))));if(c.disableIE6Anim&&d)return!1;C(),h&&(c.reverseDirection&&c.enableVertical&&(o+=-1*l,g.css("top",o)),c.reverseDirectionX&&c.enableHorizontal&&(x+=-1*u,g.css("left",x))),f.scroll(function(){D()}),f.resize(function(){C()})}function B(b){var e={display:"block",top:0,left:0,width:c.bgWidth,height:c.bgHeight,zIndex:0};e.position=d?"absolute":"fixed";if(c.bgRepeat){var f=c.appendInFront?a("<div></div>").appendTo(a("body")):a("<div></div>").prependTo(a("body"));e.backgroundRepeat="repeat",e.backgroundImage='url("'+b+'")'}else{var f=c.appendInFront?a("<img />").appendTo(a("body")):a("<img />").prependTo(a("body"));f.attr("src",b)}return f.css(e),h=!0,f}function C(){c.enableVertical&&(i=g.height(),j=f.height(),k=e.height(),l=(c.parallaxHeight||i)-j,l<0&&(c.staticSpeed?l=j-i:l=c.reverseDirection?j-o-i:o,p=!0),d&&!m&&(m=-1*(k-i)),c.loopIt&&(n=parseInt(e.scrollTop()/(p?j:i)))),c.enableHorizontal&&(r=g.width(),s=f.width(),t=e.width(),u=(c.parallaxWidth||r)-s,u<0&&(u=c.staticSpeedX?s-r:c.reverseDirectionX?s-x-r:x,y=!0),d&&!v&&(v=-1*(t-r)),c.loopItX&&(w=parseInt(e.scrollLeft()/(y?s:r)))),D()}function D(){g.queue([]);var b={};if(c.enableVertical){var d=E(!0);b.top=d}if(c.enableHorizontal){var e=E(!1);b.left=e}!a.browser.msie&&(Math.abs(q-d)>100||Math.abs(z-e)>100)?g.animate(b,30):g.css(b),q=d,z=e}function E(a){if(a)var b=e.scrollTop(),f=k,g=j,h=i,q=l,z=n,A=o,q=l,B=p,C=m,D={reverseDirection:c.reverseDirection,staticSpeed:c.staticSpeed,loopIt:c.loopIt,staticScrollLimit:c.staticScrollLimit};else var b=e.scrollLeft(),f=t,g=s,h=r,z=w,A=x,q=u,B=y,C=v,D={reverseDirection:c.reverseDirectionX,staticSpeed:c.staticSpeedX,loopIt:c.loopItX,staticScrollLimit:c.staticScrollLimitX};if(D.staticSpeed){var E=b*D.staticSpeed;E-=q*z}else var G=b/(f-g),E=G*q;return D.reverseDirection||(E*=-1),E+=A,D.staticSpeed&&(E=F(E,a,D,q,B)),B&&D.staticSpeed&&D.loopIt&&(E+=g-h),d&&(E+=b,E=Math.max(parseInt(E),parseInt(C))),E}function F(a,b,c,d,e){if(!c.loopIt)c.staticScrollLimit&&(e?(a<0&&(a=0),a>d&&(a=d)):(a>0&&(a=0),-1*a>d&&(a=-1*d)));else{while(a<d){a+=d;var f=c.reverseDirection?-1:1;b?n+=f:w+=f}while(a>(c.reverseDirection?-1:0)){a-=d;var f=c.reverseDirection?-1:1;b?n-=f:w-=f}}return a}var c=c||{};c.enableVertical=typeof c.enableVertical!="undefined"?c.enableVertical:!0,c.enableVertical&&(c.staticSpeed=c.staticSpeed||!1,c.staticScrollLimit=typeof c.staticScrollLimit!="undefined"?c.staticScrollLimit:!0,c.loopIt=c.loopIt||!1,c.reverseDirection=c.reverseDirection||!1),c.enableHorizontal=c.enableHorizontal||!1,c.enableHorizontal&&(c.staticSpeedX=c.staticSpeedX||!1,c.staticScrollLimitX=typeof c.staticScrollLimitX!="undefined"?c.staticScrollLimitX:!0,c.loopItX=c.loopItX||!1,c.reverseDirectionX=c.reverseDirectionX||!1),c.disableIE6=c.disableIE6||!1,c.disableIE6Anim=typeof c.disableIE6Anim!="undefined"?c.disableIE6Anim:!0,c.bgWidth=c.bgWidth||(c.enableHorizontal?"150%":"100%"),c.bgHeight=c.bgHeight||"150%",c.bgRepeat=c.bgRepeat||!1,c.appendInFront=c.appendInFront||!1,c.parallaxHeight=c.parallaxHeight||!1,c.parallaxWidth=c.parallaxWidth||!1;var d=a.browser.msie&&a.browser.version<7?!0:!1;if(c.disableIE6&&d)return!1;var e=a(document),f=a(window),g,h=!1;if(c.enableVertical)var i,j,k,l,m=0,n=0,o=0,p=!1,q=null;if(c.enableHorizontal)var r,s,t,u,v=0,w=0,x=0,y=!1,z=null;A(b)},a.fn.scrollingParallax=function(b){return this.each(function(){new a.scrollingParallax(this,b)}),this}})(jQuery)