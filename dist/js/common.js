var csrf=document.getElementById("csrftoken"),headers={"X-CSRF-TOKEN":[csrf.getAttribute("name"),csrf.getAttribute("content")]};$.ajaxSetup({headers:headers}),$(window).scroll(function(){$(window).scrollTop()>=175?$("body").addClass("sticky-column"):$("body").removeClass("sticky-column")}),$(".accordion .acc-title").on("click",function(){$(this).toggleClass("open")}),$(function(){if(alertify.logPosition("right bottom"),"undefined"!=typeof alertify_message){var a=alertify_message;if(a instanceof Array)for(var b=a.length-1;b>=0;b--)"success"==a[b][0]?alertify.delay(0).closeLogOnClick(!0).success(a[b][1]):"error"==a[b][0]?alertify.delay(0).closeLogOnClick(!0).error(a[b][1]):alertify.delay(0).closeLogOnClick(!0).log(a[b][1])}}),document.addEventListener("DOMContentLoaded",function(){$(".navbar_toggle, .close_modal").on("click",function(){$("body").toggleClass("mobile_menu_active")}),$(".header_menu_list").click(function(a){a.stopPropagation()}),$(".header_menu").click(function(){this.classList.toggle("active")}),$("body").mousedown(function(a){for(var b=a.target;null!==b&&"ul"!==b.localName;)b=b.parentElement;if(b&&b.classList.contains("header_menu_list")||a.target.classList.contains("header_menu"))return!1;document.getElementsByClassName("header_menu")[0].classList.remove("active")})});