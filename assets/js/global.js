!function(r){var n=window.uicoreJsonp;window.uicoreJsonp=function(o,u,c){for(var i,f,l,p=0,a=[];p<o.length;p++)f=o[p],e[f]&&a.push(e[f][0]),e[f]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(r[i]=u[i]);for(n&&n(o,u,c);a.length;)a.shift()();if(c)for(p=0;p<c.length;p++)l=t(t.s=c[p]);return l};var o={},e={24:0};function t(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return r[n].call(e.exports,e,e.exports,t),e.l=!0,e.exports}t.m=r,t.c=o,t.d=function(r,n,o){t.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="",t.oe=function(r){throw console.error(r),r}}([]);uicoreJsonp([6],{240:function(e,i,o){"use strict";o(241),o(242),o(243),o(244)},241:function(e,i){},242:function(e,i,o){"use strict";jQuery(document).ready(function(){if(jQuery(".uicore-sticky").length||jQuery(".uicore-will-be-sticky").length){var e=function(){var e=window.matchMedia("(max-width: 1025px)").matches,o=jQuery(window).scrollTop(),n=jQuery(".uicore-top-bar").innerHeight(),r=120;jQuery(".uicore-transparent .ui-header-row1").length?r=19:jQuery(".ui-header-row1").length&&(r=400),null==n&&(n=e?25:r),o>n?setTimeout(function(){jQuery(".uicore-navbar").addClass("uicore-scrolled")},10):jQuery(".uicore-navbar").removeClass("uicore-scrolled"),o>i&&i>0&&o>n-.85*n?jQuery(".ui-smart-sticky").addClass("ui-hide"):jQuery(".ui-smart-sticky").removeClass("ui-hide"),o+jQuery(window).height()>jQuery(document).height()-50&&jQuery(".ui-smart-sticky").removeClass("ui-hide"),i=o},i=0;e();var o=function(e,i){var o;return function(){var n=this,r=arguments;clearTimeout(o),o=setTimeout(function(){o=null,e.apply(n,r)},i)}}(e,500);jQuery(window).on("scroll",e),jQuery(document.body).on("touchmove",o)}}),-1!=navigator.appVersion.indexOf("Win")&&jQuery("body").addClass("win"),jQuery(function(e){e(".uicore-search-btn").click(function(){e("body").addClass("uicore-search-active"),e(".uicore-search .search-field").focus()}),e(".uicore-search .uicore-close").click(function(){e("body").removeClass("uicore-search-active")}),e(".uicore-search-btn").click(function(){e("body").addClass("uicore-search-active"),e(".uicore-search .search-field").focus()}),e(document).keydown(function(i){27===i.keyCode&&e("body").removeClass("uicore-search-active")}),e(".uicore-h-classic .menu-item-has-children:not(.menu-item-has-megamenu.custom-width)").on("mouseenter mouseleave",function(i){if(e("ul",this).length){var o=e(".sub-menu",this);o.offset().left+o.width()>e("body").width()&&e(this).addClass("uicore-edge")}});var i=e("#uicore-back-to-top");jQuery(window).scroll(function(){jQuery(window).scrollTop()>300?i.addClass("uicore-visible"):i.removeClass("uicore-visible")}),i.on("click",function(e){e.preventDefault(),jQuery("html").animate({scrollTop:0},"300"),jQuery("body").animate({scrollTop:0},"300")})}),jQuery(function(e){e(document).ready(function(){if(jQuery(".uicore-progress-bar").length){var i,o,n=function(){var e=document.body.scrollHeight-window.innerHeight,i=jQuery(".uicore-post-content article");return i.length&&(e=i.height()+i.offset().top-window.innerHeight),e},r=jQuery(".uicore-progress-bar"),u=n(),c=function(){return i=jQuery(window).scrollTop(),(o=i/u*100)>100&&(o=100),o+="%"},t=function(){r.css({width:c()})};jQuery(window).scroll(t),e(window).on("resize",function(){u=n(),t()})}})}),jQuery(function(e){e(document).ready(function(){var i=e(".menu-item-has-megamenu.custom-width");i.on("mouseenter mouseleave",function(i){o(e(this))});var o=function(i){var o=window.matchMedia("(max-width: 1025px)").matches,n=i.find("ul.uicore-megamenu");if(n.css({left:"auto"}),!o){n.css({left:0});var r=n.outerWidth(),u=n.offset(),c=e(window).width();if(!r||!u)return;if(u.left+r>=c){var t=u.left+r-c;n.css({left:-t-0})}}};i.each(function(){o(e(this)),e(this).addClass("with-offsets")})})})},243:function(e,i,o){"use strict";jQuery(function(e){e(document).ready(function(){var i=window.matchMedia("(max-width: "+window.uicore_frontend.mobile_br+"px)").matches;function o(){e(".uicore-mobile-menu-wrapper .menu-item-has-children > a").unbind("click",r),e(".uicore-mobile-menu-wrapper .uicore-menu-container .sub-menu .back > a").unbind("click",u),e(".uicore-mobile-menu-wrapper .menu-item-has-children > a:not(.ui-custom-tap)").unbind("click",n),e(".uicore-mobile-menu-wrapper li:not(.menu-item-has-children):not(.back) > a").unbind("click",d),e(".uicore-mobile-menu-wrapper .uicore-extra a").unbind("click",d),e(".uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children").unbind("mouseenter",c),e(".uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children").unbind("mouseleave",t),e(".uicore-mobile-menu-wrapper.uicore-ham-center .menu-item-has-children a, .uicore-mobile-menu-wrapper.uicore-ham-creative .menu-item-has-children a").unbind("click",a),e(".uicore-menu-focus .uicore-menu li").unbind("mouseenter",l),e(".uicore-menu-focus .uicore-menu li").unbind("mouseleave",m),i?document.body.classList.contains("ui-a-dsmm-slide")?(!function(){if(!window.uicoreBackLinks){for(var i=jQuery(".menu-item-has-children"),o=0;o<i.length;o++){var n=uicore_frontend.back;n||(n=i[o].children[0].innerText);var r=i[o],u=e("<a>",{href:"#",text:n}),c=e("<li>",{class:"menu-item back"});c.append(u).prependTo(r.children[1])}window.uicoreBackLinks=!0}}(),e(".uicore-mobile-menu-wrapper .menu-item-has-children > a:not(.ui-custom-tap)").bind("click",r),e(".uicore-mobile-menu-wrapper .uicore-menu-container .sub-menu .back > a").bind("click",u)):e(".uicore-mobile-menu-wrapper .menu-item-has-children > a:not(.ui-custom-tap)").bind("click",n):(e(".uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children").bind("mouseenter",c),e(".uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children").bind("mouseleave",t),e(".uicore-mobile-menu-wrapper.uicore-ham-center .menu-item-has-children > a, .uicore-mobile-menu-wrapper.uicore-ham-creative .menu-item-has-children > a").bind("click",a),e(".uicore-mobile-menu-wrapper.uicore-ham-center .menu-item-has-children > a, .uicore-mobile-menu-wrapper.uicore-ham-creative .menu-item-has-children > a").bind("click",s),e(".uicore-menu-focus .uicore-menu li").bind("mouseenter",l),e(".uicore-menu-focus .uicore-menu li").bind("mouseleave",m)),e(".uicore-mobile-menu-wrapper li:not(.menu-item-has-children):not(.back) > a").bind("click",d),e(".uicore-mobile-menu-wrapper .uicore-extra a").bind("click",d)}function n(i){if(i.preventDefault(),window.closeOtherSubMenus){var o=e(this).parent().siblings().find(".ui-expanded");o.removeClass("ui-expanded"),o.siblings(".sub-menu").slideUp()}e(this).siblings(".sub-menu").slideToggle(),e(this).toggleClass("ui-expanded"),e(this).siblings().toggleClass("uicore-active"),"function"==typeof window.uicoreBeforeMobileMenuShow&&window.uicoreBeforeMobileMenuShow(),h()}function r(i){i.preventDefault();var o="";e(".uicore-mobile-menu-wrapper .uicore-menu ").addClass("uicore-animating"),e(this).siblings().addClass("uicore-active"),"function"==typeof window.uicoreBeforeMobileMenuShow&&window.uicoreBeforeMobileMenuShow();var n=e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu")[0].style.left;"0"==n||"0%"==n||""==n?o="-100%":(n=n.replace("-","").replace("%",""),o="-"+(parseInt(n)+100)+"%"),"1"===uicore_frontend.rtl&&(o=o.replace("-","+")),"function"==typeof window.uicoreBeforeMobileMenuShow&&window.uicoreBeforeMobileMenuShow(),e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu").delay(100).animate({left:o},150,function(){h(),e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu ").removeClass("uicore-animating")})}function u(i){i.preventDefault();var o="";e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu").addClass("uicore-animating");var n=e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu")[0].style.left;"-100%"==n||"0%"==n||""==n||"+100%"==n||"100%"==n?o="0%":(n=n.replace("-","").replace("%",""),o="-"+(parseInt(n)-100)+"%"),"1"===uicore_frontend.rtl&&(o=o.replace("-","+"));var r=this;setTimeout(function(){e(r).parent().parent().removeClass("uicore-active"),"function"==typeof window.uicoreBeforeMobileMenuShow&&window.uicoreBeforeMobileMenuShow()},300),e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu").delay(100).animate({left:o},150,function(){e(".uicore-mobile-menu-wrapper .uicore-menu .sub-menu:not(.uicore-active) li").removeClass("uicore-visible"),h(),e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu ").removeClass("uicore-animating")})}function c(i){"function"==typeof window.uicoreBeforeMobileMenuShow&&window.uicoreBeforeMobileMenuShow(),e(this).find(".sub-menu:first").addClass("uicore-active"),h()}function t(i){e(this).children(".sub-menu:last").removeClass("uicore-active"),e(this).find("li").removeClass("uicore-visible"),"function"==typeof window.uicoreBeforeMobileMenuShow&&window.uicoreBeforeMobileMenuShow()}function a(i){e(this).parent().find(".sub-menu:first").toggleClass("uicore-active"),e(this).parent().find(".sub-menu:first").slideToggle(),e(this).parent().find(".sub-menu:first").hasClass("uicore-active")?h():e(this).parent().find("li").removeClass("uicore-visible")}function s(o){o.preventDefault();var n=e(this).attr("href");/^#.+$/.test(n)&&document.body.classList.contains("uicore-overflow-hidden")&&(e(".uicore-mobile-menu-overflow").removeClass("uicore-overflow-hidden"),e("body").removeClass("uicore-overflow-hidden"),e("body").removeClass("uicore-mobile-nav-show"),i?e(".uicore-animate-fade").length>0?e(".uicore-navigation-wrapper").animate({opacity:0},100):setTimeout(function(){e(".uicore-navigation-wrapper").animate({opacity:0},50)},50):e(".uicore-navigation-wrapper").animate({opacity:0},100),e(location).attr("href",n))}function l(){e(this).siblings("li").stop().fadeTo(300,.4),e(this).parent().siblings("li").stop().fadeTo(300,.3)}function m(){e(this).siblings("li").stop().fadeTo(300,1),e(this).parent().siblings("li").stop().fadeTo(300,1)}function d(o){var n=e(this).attr("href");if(n){var r=n.split("#");if(r[0]&&r[0]!=window.location.pathname&&r[0]!=window.location.href.split("#")[0])return}if(!window.uicoreAnimation){window.uicoreAnimation=!0;var u=e(".uicore-ham-reveal");if(e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu").toggleClass("uicore-active"),document.body.classList.contains("uicore-overflow-hidden"))"function"==typeof window.uicoreBeforeMobileMenuHide&&window.uicoreBeforeMobileMenuHide(),e(".uicore-mobile-menu-overflow").removeClass("uicore-overflow-hidden"),e("body").removeClass("uicore-overflow-hidden"),e("html").removeClass("uicore-overflow-hidden"),e("body").removeClass("uicore-mobile-nav-show"),i?e(".uicore-animate-fade").length>0?e(".uicore-navigation-wrapper").animate({opacity:0},100):setTimeout(function(){e(".uicore-navigation-wrapper").animate({opacity:0},50)},50):e(".uicore-navigation-wrapper").animate({opacity:0},100),e(".uicore-mobile-menu-wrapper li").removeClass("uicore-visible"),e(".uicore-ham-reveal").css("animation-name","none");else{"function"==typeof window.uicoreBeforeMobileMenuShow&&window.uicoreBeforeMobileMenuShow();var c=0;u.length?(i||(e(".uicore-ham-reveal").css("animation-name","uiCoreAnimationsHamReveal"),c=100),setTimeout(function(){e(".uicore-navigation-wrapper").css("opacity",1)},0+c)):(c=50,setTimeout(function(){e(".uicore-navigation-wrapper").animate({opacity:1},100)},c)),e("body").addClass("uicore-overflow-hidden"),e("html").addClass("uicore-overflow-hidden"),e("body").addClass("uicore-mobile-nav-show"),setTimeout(function(){e(".uicore-mobile-menu-overflow").addClass("uicore-overflow-hidden"),e(".uicore-mobile-menu-wrapper .uicore-menu-container").css("left","0%"),h()},c)}e(this).toggleClass("collapsed"),setTimeout(function(){window.uicoreAnimation=!1},50)}}function h(){var i=e("ul.uicore-active > li:not(.uicore-visible):first");i.length>0&&(i.addClass("uicore-visible"),setTimeout(function(){h(),i.hasClass("menu-item-has-children")&&function(i){(i||e(".uicore-mobile-menu-wrapper .uicore-menu-container .menu-item-has-children")).each(function(i,o){var n=e(this).find(">a").attr("href");if(e(this).children(".ui-custom-tap").remove(),"#"!=n){var r=e("<a>",{href:n,text:"",class:"ui-custom-tap",style:"min-height:"+e(this).height()+"px;transform:translate3d(0,-"+e(this).height()+"px,0)"});e(this).children("a").after(r)}})}(i)},30))}o(),window.onresize=o,e(".uicore-toggle").click(function(){d()})})})},244:function(e,i,o){"use strict";jQuery(document).ready(function(){jQuery(".menu-item-object-uicore-tb").on("mouseenter mouseleave",function(){jQuery(this).find(".elementor-element").each(function(){elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))})})})}},[240]);!function(){"use strict";function Waypoint(options){if(!options)throw new Error("No options passed to Waypoint constructor");if(!options.element)throw new Error("No element option passed to Waypoint constructor");if(!options.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+keyCounter,this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options),this.element=this.options.element,this.adapter=new Waypoint.Adapter(this.element),this.callback=options.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=Waypoint.Context.findOrCreateByElement(this.options.context),Waypoint.offsetAliases[this.options.offset]&&(this.options.offset=Waypoint.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),allWaypoints[this.key]=this,keyCounter+=1}var keyCounter=0,allWaypoints={};Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)},Waypoint.prototype.trigger=function(args){this.enabled&&this.callback&&this.callback.apply(this,args)},Waypoint.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete allWaypoints[this.key]},Waypoint.prototype.disable=function(){return this.enabled=!1,this},Waypoint.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},Waypoint.prototype.next=function(){return this.group.next(this)},Waypoint.prototype.previous=function(){return this.group.previous(this)},Waypoint.invokeAll=function(method){var allWaypointsArray=[];for(var waypointKey in allWaypoints)allWaypointsArray.push(allWaypoints[waypointKey]);for(var i=0,end=allWaypointsArray.length;i<end;i++)allWaypointsArray[i][method]()},Waypoint.destroyAll=function(){Waypoint.invokeAll("destroy")},Waypoint.disableAll=function(){Waypoint.invokeAll("disable")},Waypoint.enableAll=function(){Waypoint.Context.refreshAll();for(var waypointKey in allWaypoints)allWaypoints[waypointKey].enabled=!0;return this},Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()},Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},Waypoint.viewportWidth=function(){return document.documentElement.clientWidth},Waypoint.adapters=[],Waypoint.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},Waypoint.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=Waypoint}(),function(){"use strict";function requestAnimationFrameShim(callback){window.setTimeout(callback,1e3/60)}function Context(element){this.element=element,this.Adapter=Waypoint.Adapter,this.adapter=new this.Adapter(element),this.key="waypoint-context-"+keyCounter,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},element.waypointContextKey=this.key,contexts[element.waypointContextKey]=this,keyCounter+=1,Waypoint.windowContext||(Waypoint.windowContext=!0,Waypoint.windowContext=new Context(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var keyCounter=0,contexts={},Waypoint=window.Waypoint,oldWindowLoad=window.onload;Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?"horizontal":"vertical";this.waypoints[axis][waypoint.key]=waypoint,this.refresh()},Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal),verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical),isWindow=this.element==this.element.window;horizontalEmpty&&verticalEmpty&&!isWindow&&(this.adapter.off(".waypoints"),delete contexts[this.key])},Context.prototype.createThrottledResizeHandler=function(){function resizeHandler(){self.handleResize(),self.didResize=!1}var self=this;this.adapter.on("resize.waypoints",function(){self.didResize||(self.didResize=!0,Waypoint.requestAnimationFrame(resizeHandler))})},Context.prototype.createThrottledScrollHandler=function(){function scrollHandler(){self.handleScroll(),self.didScroll=!1}var self=this;this.adapter.on("scroll.waypoints",function(){self.didScroll&&!Waypoint.isTouch||(self.didScroll=!0,Waypoint.requestAnimationFrame(scrollHandler))})},Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()},Context.prototype.handleScroll=function(){var triggeredGroups={},axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var axisKey in axes){var axis=axes[axisKey],isForward=axis.newScroll>axis.oldScroll,direction=isForward?axis.forward:axis.backward;for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];if(null!==waypoint.triggerPoint){var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint,nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint,crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint,crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint;(crossedForward||crossedBackward)&&(waypoint.queueTrigger(direction),triggeredGroups[waypoint.group.id]=waypoint.group)}}}for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers();this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}},Context.prototype.innerHeight=function(){return this.element==this.element.window?Waypoint.viewportHeight():this.adapter.innerHeight()},Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key],this.checkEmpty()},Context.prototype.innerWidth=function(){return this.element==this.element.window?Waypoint.viewportWidth():this.adapter.innerWidth()},Context.prototype.destroy=function(){var allWaypoints=[];for(var axis in this.waypoints)for(var waypointKey in this.waypoints[axis])allWaypoints.push(this.waypoints[axis][waypointKey]);for(var i=0,end=allWaypoints.length;i<end;i++)allWaypoints[i].destroy()},Context.prototype.refresh=function(){var axes,isWindow=this.element==this.element.window,contextOffset=isWindow?void 0:this.adapter.offset(),triggeredGroups={};this.handleScroll(),axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var axisKey in axes){var axis=axes[axisKey];for(var waypointKey in this.waypoints[axisKey]){var contextModifier,wasBeforeScroll,nowAfterScroll,triggeredBackward,triggeredForward,waypoint=this.waypoints[axisKey][waypointKey],adjustment=waypoint.options.offset,oldTriggerPoint=waypoint.triggerPoint,elementOffset=0,freshWaypoint=null==oldTriggerPoint;waypoint.element!==waypoint.element.window&&(elementOffset=waypoint.adapter.offset()[axis.offsetProp]),"function"==typeof adjustment?adjustment=adjustment.apply(waypoint):"string"==typeof adjustment&&(adjustment=parseFloat(adjustment),waypoint.options.offset.indexOf("%")>-1&&(adjustment=Math.ceil(axis.contextDimension*adjustment/100))),contextModifier=axis.contextScroll-axis.contextOffset,waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment),wasBeforeScroll=oldTriggerPoint<axis.oldScroll,nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll,triggeredBackward=wasBeforeScroll&&nowAfterScroll,triggeredForward=!wasBeforeScroll&&!nowAfterScroll,!freshWaypoint&&triggeredBackward?(waypoint.queueTrigger(axis.backward),triggeredGroups[waypoint.group.id]=waypoint.group):!freshWaypoint&&triggeredForward?(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group):freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint&&(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group)}}return Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers()}),this},Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)},Context.refreshAll=function(){for(var contextId in contexts)contexts[contextId].refresh()},Context.findByElement=function(element){return contexts[element.waypointContextKey]},window.onload=function(){oldWindowLoad&&oldWindowLoad(),Context.refreshAll()},Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim;requestFn.call(window,callback)},Waypoint.Context=Context}(),function(){"use strict";function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}function Group(options){this.name=options.name,this.axis=options.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),groups[this.axis][this.name]=this}var groups={vertical:{},horizontal:{}},Waypoint=window.Waypoint;Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)},Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction],reverse="up"===direction||"left"===direction;waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint);for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i];(waypoint.options.continuous||i===waypoints.length-1)&&waypoint.trigger([direction])}}this.clearTriggerQueues()},Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints),isLast=index===this.waypoints.length-1;return isLast?null:this.waypoints[index+1]},Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);return index?this.waypoints[index-1]:null},Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)},Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);index>-1&&this.waypoints.splice(index,1)},Group.prototype.first=function(){return this.waypoints[0]},Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)},Waypoint.Group=Group}(),function(){"use strict";function JQueryAdapter(element){this.$element=$(element)}var $=window.jQuery,Waypoint=window.Waypoint;$.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments);return this.$element[method].apply(this.$element,args)}}),$.each(["extend","inArray","isEmptyObject"],function(i,method){JQueryAdapter[method]=$[method]}),Waypoint.adapters.push({name:"jquery",Adapter:JQueryAdapter}),Waypoint.Adapter=JQueryAdapter}(),function(){"use strict";function createExtension(framework){return function(){var waypoints=[],overrides=arguments[0];return framework.isFunction(arguments[0])&&(overrides=framework.extend({},arguments[1]),overrides.handler=arguments[0]),this.each(function(){var options=framework.extend({},overrides,{element:this});"string"==typeof options.context&&(options.context=framework(this).closest(options.context)[0]),waypoints.push(new Waypoint(options))}),waypoints}}var Waypoint=window.Waypoint;window.jQuery&&(window.jQuery.fn.elementorWaypoint=createExtension(window.jQuery)),window.Zepto&&(window.Zepto.fn.elementorWaypoint=createExtension(window.Zepto))}();
