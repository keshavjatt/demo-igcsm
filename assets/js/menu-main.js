$(document).ready(function(){"use strict";var e='<i class="fa fa-angle-down" aria-hidden="true"></i>',n='<span class="menu-parent">'+e+"</span>",s='<div class="sub-menu-close"><i class="fa fa-times" aria-hidden="true"></i>Close</div>';$(".nav-menu .mega-menu").append(n),$(".nav-menu > .menu-item-has-children").append(n),$(".nav-menu > .menu-item-has-children .sub-menu > .menu-item-has-children").append(n),$(".nav-menu .menu-item-has-children .sub-menu").append(s),$(".nav-menu .mega-menu .mega-menu").append(s),$("span.menu-parent").on("click",function(n){n.preventDefault();var s=$(this),a=s.siblings("ul"),i=s.parent("li"),l=i.siblings("li"),u="span.menu-parent";if(a.hasClass("sub-menu"))var a=s.siblings("ul.sub-menu");else if(a.hasClass("mega-menu"))var a=s.siblings("ul.mega-menu");a.hasClass("visible")?(setTimeout(function(){a.removeClass("visible")},10),s.html(e)):(setTimeout(function(){a.addClass("visible")},10),s.html('<i class="fa fa-angle-up" aria-hidden="true"></i>')),i.find("ul.visible").removeClass("visible"),i.siblings("li").children("ul").removeClass("visible"),l.find("ul.visible").removeClass("visible"),i.children("ul").find(u).html(e),l.children(u).html(e),l.find(u).html(e)}),$("ul.nav-menu div.sub-menu-close").on("click",function(n){n.preventDefault();var s=$(this).parent("ul");s.removeClass("visible"),s.siblings("span.menu-parent").html(e)}),$("a.menu-toggle").on("click",function(e){e.preventDefault();var n=$(".menu ul").height();$(this).hasClass("menu-toggle-open")?($(this).removeClass("menu-toggle-open").addClass("menu-toggle-close"),$(".menu").animate({height:"0px"},{queue:!1,duration:300}).addClass("menu-close")):($(this).removeClass("menu-toggle-close").addClass("menu-toggle-open"),$(".menu").animate({height:n},{queue:!1,duration:300}).removeClass("menu-close"))});var a=0;$(window).on("load",function(){a=$(window).width(),$(".menu").addClass("menu-close")}),$(window).resize(function(){a!==$(window).width()&&($(".visible").removeClass("visible"),$(".menu-toggle").removeClass("menu-toggle-open").addClass("menu-toggle-close"),$(".menu").css("height","0").addClass("menu-close"),$("span.menu-parent").html(e),a=$(window).width())})});