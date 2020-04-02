'use strict';

// personalized greeting
// once correct answer is given, alert incorporates my bio. 

let theirName = prompt('Hi, welcome to the project! What is your name?');
var bio = 'Now that we are acquainted I\'ll tell you a bit about myself. I was born in Auburn Washington we moved to Iowa when I was young and I mostly grew up in Guthrie Center. Even though we didn\'t own a computer until I was almost out of the house I played Ken\'s Labrynth on my aunt\'s computer, this was before we had things like streaming or CD\'s! I started working as a cook at a restaurant when I was 16, and after moving back to Washington a few years ago I started a business with a former boss as the managing partner; This ended up being a good opportunity for self-evaluation and careful re-adjusting of my career direction. I decided to become a software developer back in mid 2018 and it took me a while to put my life in order before I enrolled at Code Fellows'

var i = 0; // allows 'i' to be referenced in a nested `while` loop that has no acess to parent declaration of 'i'. 


// console.log(theirName);

// use loop \&&|| switch to to account for "invalid input" and repromt with \altmsg

if(theirName){
  alert('We\'re glad to have you with us ' + theirName + " " + bio);
} else {
  theirName = prompt(' I\'m sorry, I din\'t catch that, please enter your name');
}

var correctcount = 0;

//Question 1 'Did I grow up in Auburn?'
var homeTown = prompt('Please enter (y) for Yes or (n) No; Did I grow up in Auburn?');
let reply = homeTown.toLowerCase(); // converts answer for validation and is re-assigned within each `final else`statement for the successive questions in the script. 
// console.log('reply:' + reply);

if(reply === 'n'){
  alert('Correct! I grew up in Guthrie Center!');
  // console.log('Correct! I grew up in Guthrie Center!');
  correctcount ++;
} else {
  alert('I\m sorry,'+ theirName + ' that is not correct, we\'ll come back to that ');
  // console.log('I\m sorry, that is not correct');
}
  
//Question 2 "was my first Game on a 3 1/2" floppy disc"

var firstGame = prompt('Please enter (y) for Yes and (n) for No; Was my first game on a 3 1/2" floppy drive?');
reply = firstGame.toLowerCase();

if(reply === 'y'){
  alert('Correct! Ken\'s Labrynth was heavily pixelated and on a 3 1/2" floppy drive');
  correctcount ++;
  // console.log('Correct! Ken\'s Labrynth was heavily pixelated and on a 3 1/2" floppy drive');
} else {
  alert('I\m sorry, that is not correct ' + theirName + ' we\'ll come back to that');
  // console.log('thats ok ' + theirName + ' we\'ll come back to that');
}

// question 3 begins use of confirm commands for validation 'click "ok" for true and "cancel" for false; I\'m 32, and started my career in hospitality 16 years ago. '

var career = confirm('click "ok" for true and "cancel" for false; I\'m 32, and started my career in hospitality 16 years ago. ');

if(career === true){
  alert('Awesome! ' + theirName + ' I started in hospitality as a cook half my life ago!');
  correctcount ++;
  // console.log('Awesome! ' + theirName + ' I started in hospitality as a cook half my life ago!');
} else {
  alert('I\m sorry, that is not correct ' + theirName + ' we\'ll come back to that');
  // console.log('I\m sorry, that is not correct ' + theirName + ' we\'ll come back to that');
}

// Question 4 "I was super happy when my first business venture as a managing partner was a hit and we sold the company for a big profit!"

var bizSuccess = confirm('click "ok" for true and "cancel" for false; I was super happy when my first business venture as a managing partner was a hit and we sold the company for a big profit! ');

if(bizSuccess === false){
  alert('Awesome!' + theirName + 'While my first experience as an entrepreneur taught me a lot about where I need to grow, it was not a financial success');
  correctcount ++;
  // console.log('Awesome! ' + theirName + ' While my first experience as an entrepreneur taught me a lot about where I need to grow, it was not a financial success');
} else {
  alert('I\m sorry, that is not correct ' + theirName + ' we\'ll come back to that');
  // console.log('I\m sorry, that is not correct ' + theirName + ' we\'ll come back to that');
}

//Question 5 'It took me a year and a half to enroll @CodeFellows after I decided to become a Software Developer.' 

var noobieDev = confirm('click "ok" for true and "cancel" for false; It took me a year and a half to enroll @CodeFellows after I decided to become a Software Developer.')

if(noobieDev === true){
  alert('Awesome! ' + theirName + ' As excited as I was to start my journey as a dev, I knew it was important to set myself up for success first! ');
  // console.log('Awesome! ' + theirName + ' As excited as I was to start my journey as a dev, I knew it was important to set myself up for success first! ');
} else {
  alert('thats ok ' + theirName + ' we\'ll come back to that');
  // console.log('thats ok ' + theirName + ' we\'ll come back to that');
}

// personalized farewell
// move to bottom of JS

// number guess loop 4 attempts means set the index limit @(<=3)
// Question, how many of my quirks are related to video cinema
// answer? 

var myNumber = '3';
var guess = prompt('I\'m thinking of a number between 1 and 10, can you guess it?');

// add theirName concat to console log message after debugging. 
for(i = 0; i < 3; i ++){
  if(guess === myNumber){
    alert('Great you got it!');
    // console.log('Great you got it!');
    correctcount ++;
    break;
  } else if(guess != myNumber && i < 3){      
    if(guess === myNumber){
      alert('Great you got it!');
      // console.log('Great you got it!');
      correctcount ++;
      break;
    } else if(guess > myNumber){
      guess = prompt('I\'m sorry, you guessed too high, you have ' + (3 - i) + ' attempts remaining ');
    } else {
      guess = prompt(' I\'m sorry, you guessed too low, you have ' + (3 - i) + ' attempts remaining ')
    }
    
  } else {
    
  }
  
}
if(guess != myNumber)guess = alert('I\'m sorry, the number was 3');

// if(guess != myNumber)guess = console.log('I\'m sorry, the number was 3');

// Alert List 3 favorite bands [x]
// array [band 1, band 2, band 3] [x]
// prompt(' type your answer: which of the following is one of my favorite bands. list 8 bands);[x]
// for loop to count the 6 attempts[x]
// if to check agains array, break if correct, alert if not.[x]
// 


var favBands = ['Cradle of Filth', 'Aesthetic Perfection', 'Wardruna'];

alert(favBands);

var bandChoice = prompt('type your answer: which of the following is one of my favorite bands: Wardruna, Decoded Feedback, Justin Beiber, Maroon 5, Aesthetic Perfection, Combichrist, Shadows in the Dark, Cradle of Filth, And One. answers ARE CASE SENSITIVE');

for(i = 0; i < 5; i ++){
  if(bandChoice === favBands[0] || bandChoice === favBands[1] || bandChoice === favBands[2]){
    alert('Excellent memory! ');
    // console.log('Excellent memory! ');
    correctcount ++;
    break;
  } else if(i < 5){
      bandChoice = prompt('I\'m sorry, that is not correct, you have: ' + (5 - i) + ' attempts remainingtype your answer: which of the following is one of my favorite bands: Wardruna, Decoded Feedback, Justin Beiber, Maroon 5, Aesthetic Perfection, Combichrist, Shadows in the Dark, Cradle of Filth, And One. answers ARE CASE SENSITIVE');
      break;
  } else {
      alert('You\'ve run out of guesses, correct possible answers were: ' + favBands);  
  }
}

  // console.log('You\'ve run out of guesses, correct possible answers were: ' + favBands);


//////////code above works////////////////////

// Track answers:
// how to track: store returns of each response in a variable or array
// homeTown   ---  return stored in --> homeTown
// firstGame ---   return stored in --> firstGame
// career  ---     return stored in --> career 
// bizSuccess ---  return stored in --> bizSuccess
// noobieDev ---   return stored in --> noobieDev
// myNumber   ---  return stored in --> myNumber
// favBand ---  return stored in -->  favBand

// evaluate each "stored in"-object as correct or incorrect where correct === true and incorrect === false. 
// sum true returns of "stored in"-object
// compare to total "?'s" as an array. 

alert('Awesome! you got, ' + correctcount + ' out of ' + 7 + ' possible');
var fareWell = alert('It has been a pleasure chatting with you ' + theirName + ' thank you for helping with my project, I hope we get to work together again soon! ');






