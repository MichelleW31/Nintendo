$(document).ready(function(){
  //-------------------------
$(".playbuttons").on("click",function(){
  var push = $(this).addClass("push");
  setTimeout(function() {
    push.removeClass("push");
}, 200);
})

$("i").on("click", function(){
  console.log("pad clicked");
})
  //-------------------------
});
