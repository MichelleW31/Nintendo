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
$("#rightpad i").on("click", function(){
  circle.css("box-shadow", "inset -2px -2px 2px 1px #100d0d");
  setTimeout(function() {
    circle.css("box-shadow", "inset 0px -2px 2px 1px #100d0d");
}, 200);
})

//left
$("#leftpad i").on("click", function(){

circle.css("box-shadow", "inset 2px -2px 2px 1px #100d0d");
setTimeout(function() {
  circle.css("box-shadow", "inset 0px -2px 2px 1px #100d0d");
}, 200);
})

//up
$("#uppad i").on("click", function(){
  circle.css("box-shadow", "inset 0px 2px 2px 1px #100d0d");
  setTimeout(function(){
    circle.css("box-shadow", "inset 0px -2px 2px 1px #100d0d");
  }, 200);
})

//downpad
$("#downpad i").on("click", function(){
  circle.css("box-shadow", "inset 0px -4px 2px 1px #100d0d");
  setTimeout(function(){
    circle.css("box-shadow", "inset 0px -2px 2px 1px #100d0d");
  }, 200);
})

  //-------------------------
});
