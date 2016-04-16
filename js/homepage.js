$(document).ready(function() {

  console.clear();

  var randomNumber;


  var min = 65;
  var max = 90;
  var randomNum;
  var randomLetter;
  var text = "";

  for (var i = 1; i < 20000; i++) {
    if (i % 110 === 0) {
      text += "<br>";
      i += 4;
    }

    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randomLetter = String.fromCharCode(randomNum);
    text += randomLetter;
  }

  console.log(text);
  $("#letters").html(text);


});

function randomColor(){
 r = Math.floor(Math.random() * (256));
 g = Math.floor(Math.random() * (256));
 b = Math.floor(Math.random() * (256));
 jQuery('body').css('background-color','rgb('+r+','+g+','+b+')');
}

jQuery(document).ready(function(){
 randomColor();
 var t = setInterval(randomColor,3000);
});
