/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi

Use:
===
$('#form_id').ajaxchimp(options);

- Form should have one <input> element with attribute 'type=email'
- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
- All options are optional.

Options:
=======
options = {
    language: 'en',
    callback: callbackFunction,
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
}

Notes:
=====
To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
*/
!function(e){"use strict";e.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(t,a){e(t).ajaxChimp(a)}},e.fn.ajaxChimp=function(t){return e(this).each(function(a,l){var n=e(l),s=n.find("input[type=email]"),o=n.find("label[for="+s.attr("id")+"]"),i=e.extend({url:n.attr("action"),language:"en"},t),r=i.url.replace("/post?","/post-json?").concat("&c=?");n.attr("novalidate","true"),s.attr("name","EMAIL"),n.submit(function(){function t(t){if("success"===t.result)a="We have sent you a confirmation email",o.removeClass("error").addClass("valid"),s.removeClass("error").addClass("valid");else{s.removeClass("valid").addClass("error"),o.removeClass("valid").addClass("error");var l=-1;try{var n=t.msg.split(" - ",2);if(void 0===n[1])a=t.msg;else{var r=parseInt(n[0],10);r.toString()===n[0]?(l=n[0],a=n[1]):(l=-1,a=t.msg)}}catch(c){l=-1,a=t.msg}}"en"!==i.language&&void 0!==e.ajaxChimp.responses[a]&&e.ajaxChimp.translations&&e.ajaxChimp.translations[i.language]&&e.ajaxChimp.translations[i.language][e.ajaxChimp.responses[a]]&&(a=e.ajaxChimp.translations[i.language][e.ajaxChimp.responses[a]]),o.html(a),o.show(2e3),i.callback&&i.callback(t)}var a,l={},c=n.serializeArray();e.each(c,function(e,t){l[t.name]=t.value}),e.ajax({url:r,data:l,success:t,dataType:"jsonp",error:function(e,t){console.log("mailchimp ajax submit error: "+t)}});var u="Submitting...";return"en"!==i.language&&e.ajaxChimp.translations&&e.ajaxChimp.translations[i.language]&&e.ajaxChimp.translations[i.language].submit&&(u=e.ajaxChimp.translations[i.language].submit),o.html(u).show(2e3),!1})}),this}}(jQuery),/*!
 * jQuery Smooth Scroll - v1.5.4 - 2014-11-17
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2014 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return e.replace(/(:|\.|\/)/g,"\\$1")}var a="1.5.4",l={},n={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},s=function(t){var a=[],l=!1,n=t.dir&&"left"===t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var t=e(this);t[n]()>0?a.push(this):(t[n](1),l=t[n]()>0,l&&a.push(this),t[n](0))}}),a.length||this.each(function(){"BODY"===this.nodeName&&(a=[this])}),"first"===t.el&&a.length>1&&(a=[a[0]]),a};e.fn.extend({scrollable:function(e){var t=s.call(this,{dir:e});return this.pushStack(t)},firstScrollable:function(e){var t=s.call(this,{el:"first",dir:e});return this.pushStack(t)},smoothScroll:function(a,l){if(a=a||{},"options"===a)return l?this.each(function(){var t=e(this),a=e.extend(t.data("ssOpts")||{},l);e(this).data("ssOpts",a)}):this.first().data("ssOpts");var n=e.extend({},e.fn.smoothScroll.defaults,a),s=e.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(a){var l=this,o=e(this),i=e.extend({},n,o.data("ssOpts")||{}),r=n.exclude,c=i.excludeWithin,u=0,h=0,f=!0,m={},d=location.hostname===l.hostname||!l.hostname,p=i.scrollTarget||e.smoothScroll.filterPath(l.pathname)===s,g=t(l.hash);if(i.scrollTarget||d&&p&&g){for(;f&&u<r.length;)o.is(t(r[u++]))&&(f=!1);for(;f&&h<c.length;)o.closest(c[h++]).length&&(f=!1)}else f=!1;f&&(i.preventDefault&&a.preventDefault(),e.extend(m,i,{scrollTarget:i.scrollTarget||g,link:l}),e.smoothScroll(m))}),this}}),e.smoothScroll=function(t,a){if("options"===t&&"object"==typeof a)return e.extend(l,a);var n,s,o,i,r,c=0,u="offset",h="scrollTop",f={},m={};"number"==typeof t?(n=e.extend({link:null},e.fn.smoothScroll.defaults,l),o=t):(n=e.extend({link:null},e.fn.smoothScroll.defaults,t||{},l),n.scrollElement&&(u="position","static"===n.scrollElement.css("position")&&n.scrollElement.css("position","relative"))),h="left"===n.direction?"scrollLeft":h,n.scrollElement?(s=n.scrollElement,/^(?:HTML|BODY)$/.test(s[0].nodeName)||(c=s[h]())):s=e("html, body").firstScrollable(n.direction),n.beforeScroll.call(s,n),o="number"==typeof t?t:a||e(n.scrollTarget)[u]()&&e(n.scrollTarget)[u]()[n.direction]||0,f[h]=o+c+n.offset,i=n.speed,"auto"===i&&(r=f[h]-s.scrollTop(),0>r&&(r*=-1),i=r/n.autoCoefficient),m={duration:i,easing:n.easing,complete:function(){n.afterScroll.call(n.link,n)}},n.step&&(m.step=n.step),s.length?s.stop().animate(f,m):n.afterScroll.call(n.link,n)},e.smoothScroll.version=a,e.smoothScroll.filterPath=function(e){return e=e||"",e.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},e.fn.smoothScroll.defaults=n}),$(document).ready(function(){$("#mc-form").ajaxChimp()});