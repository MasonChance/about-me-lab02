'use strict'




// personalized greeting
// if/else to account for "invalid input"
// once correct answer is given, alert incorporates my bio. 

// let theirName = prompt('Hi, welcome to the project! What is your name?');
// console.log(theirName);

// if(theirName === '' || theirName === null){
//   let theirName = prompt('I\'m sorry, I din\'t catch that, please enter your name');
//   console.log('theirName:' + theirName);
// }else{
//   var greeting = alert('We're glad to have you with us ' + theirName + '! ');
//   console.log(greeting + bio);
//   alert(greeting + bio)
  
// }

// total of exatly 5 yes no questions
// answer to question is  a prompt with if/else and to.lowercase() for first two questions. last 3 use confirm(). 

// variable containing prompt
// tolowercase() in prompt
// if else false: Correct! true: I'm sorry thats not correct
let theirName = 'Mason' //place holder to minimize runthrough duringcode testing
//Question 1 'Did I grow up in Auburn?'
var homeTown = prompt('Please enter (y) for Yes or (n) No; Did I grow up in Auburn?');
let reply = homeTown.toLowerCase(); // converts answer for validation and is re-assigned within each `final else`statement for the successive questions in the script. 
console.log('reply:' + reply);

if(reply === '' || reply === 'y' || homeTown === null ){
    console.log('I\m sorry, that is not correct');
    //alert('I\m sorry, that is not correct');
}else if(reply === 'n'){
    console.log('Correct! I grew up in Guthrie Center!');
    //alert('Correct! I grew up in Guthrie Center!');
}else{
  let reply = firstGame.toLowerCase();
  console.log('thats ok ' + theirName + ' we\'ll come back to that');
  //alert('thats ok ' + theirName + ' we\'ll come back to that');
}
//Question 2 "was my first Game on a 3 1/2" floppy disc"
var firstGame = prompt('Please enter (y) for Yes and (n) for No; Was my first game on a 3 1/2" floppy drive?');
console.log('reply:' + reply)

if(reply === '' || reply === 'n' || firstGame === null ){
  console.log('I\m sorry, that is not correct');
  //alert('I\m sorry, that is not correct');
}else if(reply === 'y'){
  console.log('Correct! Ken\'s Labrynth was heavily pixelated and on a 3 1/2" floppy drive');
  //alert('Correct! Ken\'s Labrynth was heavily pixelated and on a 3 1/2" floppy drive');
}else{
console.log('thats ok ' + theirName + ' we\'ll come back to that');
//alert('thats ok ' + theirName + ' we\'ll come back to that');
}

// question 3 begins use of confirm commands for validation



    // How long have I been in the service/hospitality industry?     ///did my first business succeed? When did I decide to become a Software developer?     TRANSLATE ALL OF THESE INTO A YES OR NO

// ensure validation of input accounting for Case sensitivity
// console log for each question, comment out prior to submission


// if/else statements for branched alerts
// alerts to indicate correct answers
// alerts requesting specific answer format for false return values. 
// personalized farewell