$(document).ready(function(){
  //-------------------------

//Red button click
$(".playbuttons").on("click",function(){
  var push = $(this).addClass("push");
  setTimeout(function() {
    push.removeClass("push");
}, 100);
})

//Select and start button click
$(".buttons").on("click",function(){
  var cpush = $(this).addClass("consolepush");
  setTimeout(function(){
    cpush.removeClass("consolepush");
},100);
})


//Dpad click
//right
var circle = $("#circle");
$("#pad2 i").on("click", function(){
  circle.css("box-shadow", "inset -2px -2px 2px 1px #100d0d");
  setTimeout(function() {
    circle.css("box-shadow", "inset 0px -2px 2px 1px #100d0d");
}, 200);
})

//left
$("#pad i").on("click", function(){

circle.css("box-shadow", "inset 2px -2px 2px 1px #100d0d");
setTimeout(function() {
  circle.css("box-shadow", "inset 0px -2px 2px 1px #100d0d");
}, 200);
})


  //-------------------------
});
