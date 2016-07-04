$(document).ready(function(){
 
 $("#home").click(function(){
 	$("#home").addClass("active");
 	$("#about").removeClass("active");
 	$("#projects").removeClass("active");
 	$("#contact").removeClass("active");
 	$(window).scrollTo($("section#home"),800);
 });
 
 $("#to-about").click(function(){
 	$("#about").addClass("active");
 	$("#home").removeClass("active");
 	$("#projects").removeClass("active");
 	$("#contact").removeClass("active");
 	$(window).scrollTo($("section#about"),800);
 });

 $("#about").click(function(){
 	$("#about").addClass("active");
 	$("#home").removeClass("active");
 	$("#projects").removeClass("active");
 	$("#contact").removeClass("active");
 	$(window).scrollTo($("section#about"),800);
 });
 
$("#to-projects").click(function(){
 	$("#projects").addClass("active");
 	$("#about").removeClass("active");
 	$("#home").removeClass("active");
 	$("#contact").removeClass("active");
 	$(window).scrollTo($("section#projects"),800);
 });

 $("#projects").click(function(){
 	$("#projects").addClass("active");
 	$("#about").removeClass("active");
 	$("#home").removeClass("active");
 	$("#contact").removeClass("active");
 	$(window).scrollTo($("section#projects"),800);
 });
 
$("#to-contact").click(function(){
 	$("#contact").addClass("active");
 	$("#about").removeClass("active");
 	$("#projects").removeClass("active");
 	$("#home").removeClass("active");
 	$(window).scrollTo($("section#contact"),800);

 });
 

 $("#contact").click(function(){
 	$("#contact").addClass("active");
 	$("#about").removeClass("active");
 	$("#projects").removeClass("active");
 	$("#home").removeClass("active");
 	$(window).scrollTo($("section#contact"),800);

 });
 
 $("#to-home").click(function(){
 	$("#home").addClass("active");
 	$("#about").removeClass("active");
 	$("#projects").removeClass("active");
 	$("#contact").removeClass("active");
 	$(window).scrollTo($("nav"),800);
 });
 
});
