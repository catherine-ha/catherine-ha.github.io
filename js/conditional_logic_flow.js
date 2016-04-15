/*//1. Write an if statement that always runs its code block

/*

var myName = "Catherine";
if (myName) {
  console.log('bravo');
}

//2. Write an if statement that never runs its code block

var myAge = "99";
if (myAge > 100) {
  console.log('you are old');
}

//3. Ask the visitor to enter their mood. If they say that they are ‘sad’, give them some words of encouragement. If they’re ‘happy’ tell them something else. Otherwise, just say “Oh, I’m feeling *that way* too” (With *that way* being the mood THEY input).

var mood = prompt("Enter Your Mood");
if (mood === 'sad') {
  console.log("Don't Worry Be Happy");
} else if (mood === 'happy') {
  console.log("What Are You On?!");
} else {
  console.log("Oh, I'm feeling " + mood + " too");
}

*/

//4. Give the user 3 tries to guess a number. If they guess the right number then tell them so (but don’t ask them to guess again).

var number = prompt("Guess a number between 1 and 1,000,000");

if (number == 9) {
  console.log('You are correct!');

} else {
//   console.log('Try Again');
  number = prompt("Guess Again. Pick a number between 1 and 1,000,000");
  if (number == 9) {
    console.log('You are correct!');
  } else {
//     console.log('Try Again');
    number = prompt("Guess one last time. Pick a number between 1 and 1,000,000");
    if (number == 9) {
      console.log('You are correct!');

    } else {
      console.log('You Lose');
    }
  }
}



/*
var startNum = 1;
var endNum = 100;
while (startNum <= endNum) {
  if (startNum % 3 === 0 && startNum % 5 === 0) {
    console.log("FizzBuzz");
  } else if (startNum % 3 === 0) {
    console.log("Fizz");
  } else if (startNum % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(startNum);
  }
  startNum++;
}
*/


/*
var startNum = 1;
var endNum = 100;
while (startNum <= endNum) {
  if (startNum % 3 === 0 && startNum % 5 === 0) {
    console.log("FizzBuzz");
  } else if (startNum % 3 === 0) {
    console.log("Fizz");
  } else if (startNum % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(startNum);
  }
  startNum++;
}
*/



var min = 1, max = 6;

var userGuess = -1;

var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

while (randomNumber !== userGuess) {
  userGuess = parseInt(prompt("What's your guess (between 1 and 6?)"));
  if (randomNumber === userGuess) {
    alert('You guessed right!');
  } else {
    alert('WRONG!');
  }
}

// noprotect



// while loops

var counter = 1;
var maxGuesses = 5;
var guess;
while (count <= maxGuesses) {
  guess = parseInt(prompt("What's your guess?"));
  if (guess === 7) {
    console.log('You win!');
    break;
  }
  console.log('incorrect');
  counter++;
}






// noprotect


var age = 109;
if (age <= 50) {
  console.log('you are 50 or younger');
} else if (age > 50 && age <= 100) {
  console.log('you are older than 50 but not older than 100');
} else {
  console.log('you are older than 100');
}


//5. Prompt the visitor to enter a password when they visit your site. If it is correct, welcome them. Otherwise, direct them elsewhere using this line of code:
window.location = "http://www.google.com"; (This code will not work in repl.it, you'll need to use a <script> tag or the JavaScript console)


var age = 109;
if (age <= 50) {
  console.log('you are 50 or younger');
} else if (age > 50 && age <= 100) {
  console.log('you are older than 50 but not older than 100');
} else {
  console.log('you are older than 100');
}




var today = "Friday";
today = today.toLowerCase();

var date = 13;

if (today === "monday") {
  console.log('Get to work');
} else if (today === "tuesday") {
  console.log('It\'s Tuesday');
} else if (today === "wednesday") {
  console.log('It\'s hump day!');
} else if (today === "thursday") {
  console.log('Thursty Thursday');
} else if (today === "friday") {

  console.log('Freaky Friday!');

  if (date === 13) {
    console.log('It\'s Friday the 13th!');
  }

} else if (today === "saturday") {
  console.log('Sexy Saturday');
} else if (today === "sunday") {
  console.log('Sunday Funday!');
} else {
  console.log('incorrect day’);


/*
//1. Write an if statement that always runs its code block

/*

var myName = "Catherine";
if (myName) {
  consol
  e.log('bravo');
}

//2. Write an if statement that never runs its code block

var myAge = "99";
if (myAge > 100) {
  console.log('you are old');
}

//3. Ask the visitor to enter their mood. If they say that they are ‘sad’, give them some words of encouragement. If they’re ‘happy’ tell them something else. Otherwise, just say “Oh, I’m feeling *that way* too” (With *that way* being the mood THEY input).

var mood = prompt("Enter Your Mood");
if (mood === 'sad') {
  console.log("Don't Worry Be Happy");
} else if (mood === 'happy') {
  console.log("What Are You On?!");
} else {
  console.log("Oh, I'm feeling " + mood + " too");
}

*/

//4. Give the user 3 tries to guess a number. If they guess the right number then tell them so (but don’t ask them to guess again).

var number = prompt("Guess a number between 1 and 1,000,000");

if (number == 9) {
  console.log('You are correct!');

} else {
//   console.log('Try Again');
  number = prompt("Guess Again. Pick a number between 1 and 1,000,000");
  if (number == 9) {
    console.log('You are correct!');
  } else {
//     console.log('Try Again');
    number = prompt("Guess one last time. Pick a number between 1 and 1,000,000");
    if (number == 9) {
      console.log('You are correct!');

    } else {
      console.log('You Lose');
    }
  }
}
*/



/*
var startNum = 1;
var endNum = 100;
while (startNum <= endNum) {
  if (startNum % 3 === 0 && startNum % 5 === 0) {
    console.log("FizzBuzz");
  } else if (startNum % 3 === 0) {
    console.log("Fizz");
  } else if (startNum % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(startNum);
  }
  startNum++;
}


// functions

// function definition
function printSomething() {
  console.log('Hello there!');
}

// invoke printSomething (with the "invocation operator" "()")
// printSomething();
// console.log(printSomething()); // prints the "function definition"

// function declaration
function returns3() {
  return 3;
}

// the entire function call (returns3()) gets replaced by the "return" value (3)
var x = returns3();
// console.log(x);

function getGreeting() {
  var firstSent = "Hello, how is you?";
  return firstSent + " I'm so happy to see you!";
  console.log('I shall never be seen!!!!!');
}

console.log(getGreeting());


// parameters & arguments

// return the absolute value of a given number
function abs(monkey) {
  // if monkey is negative
  if (monkey < 0) {
    // then make it positive
    // monkey = -1 * monkey;
    monkey = -monkey;
    // return -monkey;
  // else
  }
  return monkey;
  //   if (monkey < 0) monkey = -monkey;
  //   return monkey;
}

// console.log(Math.abs(-239));
console.log(abs(-239));

// what is on the right gets put into what is on the left
var x = 10;



      // sum(3, 2)
function sum(x, y, z, a, b) {
  return x + y + z + a + b;
}

console.log(sum(3, 2, 10, 5, 1)); // 21


1. Write a function called tripler that takes a number and returns triple the value.
2. Create a function multiply that takes two numbers as inputs and returns their product
3. Create a function remainder that takes two numbers as inputs and returns the result of modulo(%) the first by the second
4. Using only the functions you wrote above, and no operators, calculate the value of tripling 5, multiplying that by 12, and then finding the remainder of dividing that by 3.*/


function tripler(x){
  return x * 3;
}
console.log(tripler(3));


function multiply(x, y){
  return x * y;
}
console.log(multiply (4,6));


function remainder(x, y){
  return x % y;
}
console.log(remainder (8, 4));


var triple = tipler(5);
var product = multiply(triple, 12);
var remainder = remainder(product,3);

// objects aka JSON JavaScript Object Notation
var myObject = {};

myObject.shape = "squircle";

console.log(myObject["shape"]);
console.log(myObject.shape);

var prop = "shape";
console.log(myObject[prop]);

var user1 = {
  name: "McLovin'",
  username: "Secret Agent Lover Boy 70",
  password: "***********",
  isPaidAccount: false,
  age: 13
};

var user2 = {
  name: "Mac",
  username: "Mac Lovers 23",
  password: "*******",
  isPaidAccount: true,
  age: 23
};

for (var key in user2) {
  console.log(key + ": " + user2[key]);
}

// array
// var people = {"0": user1, "1": user2};
// console.log(people["0"]);

var people = [user1, user2];
console.log(people);

var user3 = {
  name: "Jimbo Slice",
  age: 48
};

// people[2] = user3;
// people[people.length-1] = user3;
var newLength = people.push(user3);

console.log(people);

console.log("newLength", newLength);




objects
1. var "name of object"
2. equals sign
3. curly braces

4. key-value pairs
5. key-value pairs are separated by commas
6. values can be ANYTHING!
7. use "dot-notation" to access values

JSON: JavaScript Object Notation
*/
// var fido = {
//   name: "Fido",
//   species: "dog",
//   isAdopted: true
// };

var rex = {
  name: "Rex",
  species: "cat",
  isAdopted: false,
  bestFriend: {
    name: "Fido",
    species: "dog",
    isAdopted: true,
    bestFriend: {
      name: "Tom",
      species: "mouse"
    },
    bark: function() {
      return "WOOFFFFF!";
    }
  }
};
console.log(rex.bestFriend.bark());
console.log(rex.bestFriend.bestFriend.name);

if (rex.bestFriend.isAdopted) {
  console.log('Fido is adopted');
} else {
  console.log('Fido is not adopted');
}
console.log('------------------');
// for in loop
for (var key in rex.bestFriend) {
  console.log(key);
  console.log(rex.bestFriend[key]);
}

var politicians = {
   secretary_of_state: 'hillary clinton',
   potus: 'barack obama',
   flotus: 'michelle obama',
   vice_prez: 'joe biden',
   gov_of_california: 'jerry brown'
};
Loop through the politicians object and concatenate everyone's names together, separated by a space. Final result should look something like this: 'hillary clinton barack obama michelle obama joe biden jerry brown'
Loop through the politicians object again, but this time print the data in the following format: position: name. The end result should look like this:
secretary_of_state: hillary clinton

potus: barack obama

flotus: michelle obama

vice_prez: joe biden

gov_of_california: jerry brown


*/

var politicians = {
   secretary_of_state: 'hillary clinton',
   potus: 'barack obama',
   flotus: 'michelle obama',
   vice_prez: 'joe biden',
   gov_of_california: 'jerry brown'
};

var names = "";
for (var position in politicians) {
  console.log('position: ' + position + ', name: ' + politicians[position]);

  var sentence = "The dog Rustie ran 1000 miles to his bed.";

  var delimiter = prompt("What letter would you like to split by?");

  var arrSentence = sentence.split(delimiter);

  console.log(arrSentence);

  arrSentence[2] = "Brownie";

  console.log(arrSentence.join(" 


*/
