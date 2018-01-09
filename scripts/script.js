$(document).ready(function(){
  //-------------------------
$(".playbuttons").on("click",function(){
  var push = $(this).addClass("push");
  console.log(push);
  setTimeout(function() {
    push.removeClass("push");
}, 200);
})

var circle = $("#circle")

$("i").on("click", function(){
  console.log("pad clicked");
})
  //-------------------------
});
