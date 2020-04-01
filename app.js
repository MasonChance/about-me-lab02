'use strict'


// personalized greeting
// if/else to account for "invalid input"
// once correct answer is given, alert incorporates my bio. 

let theirName = prompt('Hi, welcome to the project! What is your name?');
var bio = 'Now that we are acquainted I\'ll tell you a bit about myself. I was born in Auburn Washington we moved to Iowa when I was young and I mostly grew up in Guthrie Center. Even though we didn\'t own a computer until I was almost out of the house I played Ken\'s Labrynth on my aunt\'s computer, this was before we had things like streaming or CD\'s! I started working as a cook at a restaurant when I was 16, and after moving back to Washington a few years ago I started a business with a former boss as the managing partner; This ended up being a good opportunity for self-evaluation and careful re-adjusting of my career direction. I decided to become a software developer back in mid 2018 and it took me a while to put my life in order before I enrolled at Code Fellows'
// console.log(theirName);


if(theirName === '' || theirName === null){
  let theirName = prompt('I\'m sorry, I din\'t catch that, please enter your name');
  // console.log('theirName:' + theirName);
}else{
  var greeting = alert('We\'re glad to have you with us ' + theirName + '! ');
  //   console.log(greeting + "bio");
  // }
  alert(greeting + " " + bio)
}
//Question 1 'Did I grow up in Auburn?'
var homeTown = prompt('Please enter (y) for Yes or (n) No; Did I grow up in Auburn?');
let reply = homeTown.toLowerCase(); // converts answer for validation and is re-assigned within each `final else`statement for the successive questions in the script. 
// console.log('reply:' + reply);

if(reply === '' || reply === 'y' || homeTown === null ){
    // console.log('I\m sorry, that is not correct');
    alert('I\m sorry, that is not correct');
}else if(reply === 'n'){
    // console.log('Correct! I grew up in Guthrie Center!');
    alert('Correct! I grew up in Guthrie Center!');
}else{
  
  // console.log('thats ok ' + theirName + ' we\'ll come back to that');
  alert('thats ok ' + theirName + ' we\'ll come back to that');
}
//Question 2 "was my first Game on a 3 1/2" floppy disc"

var firstGame = prompt('Please enter (y) for Yes and (n) for No; Was my first game on a 3 1/2" floppy drive?');
reply = firstGame.toLowerCase();
// console.log('reply:' + reply)

if(reply === '' || reply === 'n' || firstGame === null ){
  // console.log('I\m sorry, that is not correct');
  alert('I\m sorry, that is not correct');
}else if(reply === 'y'){
  // console.log('Correct! Ken\'s Labrynth was heavily pixelated and on a 3 1/2" floppy drive');
  alert('Correct! Ken\'s Labrynth was heavily pixelated and on a 3 1/2" floppy drive');
}else{
// console.log('thats ok ' + theirName + ' we\'ll come back to that');
alert('thats ok ' + theirName + ' we\'ll come back to that');
}

// question 3 begins use of confirm commands for validation 'click "ok" for true and "cancel" for false; I\'m 32, and started my career in hospitality 16 years ago. '

var career = confirm('click "ok" for true and "cancel" for false; I\'m 32, and started my career in hospitality 16 years ago. ');

if(career === false){
  // console.log('I\'m sorry That\'s not correct.');
  alert('I\'m sorry That\'s not correct.');
}else if(career === true){
  // console.log('Awesome! ' + theirName + ' I started in hospitality as a cook half my life ago!');
  alert('Awesome!' + theirName + 'I started in hospitality as a cook half my life ago!');
}else{
  // console.log('thats ok ' + theirName + ' we\'ll come back to that');
  alert('thats ok ' + theirName + ' we\'ll come back to that');
}

// Question 4 "I was super happy when my first business venture as a managing partner was a hit and we sold the company for a big profit!"

var bizSuccess = confirm('click "ok" for true and "cancel" for false; I was super happy when my first business venture as a managing partner was a hit and we sold the company for a big profit! ');

if(bizSuccess === true){
  // console.log('I\'m sorry That\'s not correct.');
  alert('I\'m sorry That\'s not correct.');
}else if(bizSuccess === false){
  // console.log('Awesome! ' + theirName + ' While my first experience as an entrepreneur taught me a lot about where I need to grow, it was not a financial success');
  alert('Awesome!' + theirName + 'While my first experience as an entrepreneur taught me a lot about where I need to grow, it was not a financial success');
}else{
  console.log('thats ok ' + theirName + ' we\'ll come back to that');
  //alert('thats ok ' + theirName + ' we\'ll come back to that');
}

//Question 5 'It took me a year and a half to enroll @CodeFellows after I decided to become a Software Developer.' 

var noobieDev = confirm('click "ok" for true and "cancel" for false;It took me a year and a half to enroll @CodeFellows after I decided to become a Software Developer.')

if(noobieDev === false){
  // console.log(' I\'m sorry That\'s not correct.');
  alert('I\'m sorry That\'s not correct.');
}else if(noobieDev === true){
  // console.log('Awesome! ' + theirName + ' As excited as I was to start my journey as a dev, I knew it was important to set myself up for success first! ');
  alert('Awesome!' + theirName + ' As excited as I was to start my journey as a dev, I knew it was important to set myself up for success first! ');
}else{
  // console.log('thats ok ' + theirName + ' we\'ll come back to that');
  alert('thats ok ' + theirName + ' we\'ll come back to that');
}
// personalized farewell

var fareWell = alert('It has been a pleasure chatting with you ' + theirName + ' thank you for helping with my project, I hope we get to work together again soon! ');