$(document).ready(function() {

  console.clear();

  var randomNumber;


  var min = 65;
  var max = 90;
  var randomNum;
  var randomLetter;
  var text = "";

  for (var i = 1; i < 300; i++) {
    if (i % 110 === 0) {
      text += "<br>";
      i += 4;
    }

    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randomLetter = String.fromCharCode(randomNum);
    text += randomLetter;
  }

  console.log(text);
  $("#letters2").html(text);


});
