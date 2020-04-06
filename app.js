'use strict';

// personalized greeting

let theirName = prompt('Hi, welcome to the project! What is your name?');
var bio = 'Now that we are acquainted I\'ll tell you a bit about myself. I was born in Auburn Washington we moved to Iowa when I was young and I mostly grew up in Guthrie Center. Even though we didn\'t own a computer until I was almost out of the house I played Ken\'s Labrynth on my aunt\'s computer, this was before we had things like streaming or CD\'s! I started working as a cook at a restaurant when I was 16, and after moving back to Washington a few years ago I started a business with a former boss as the managing partner; This ended up being a good opportunity for self-evaluation and careful re-adjusting of my career direction. I decided to become a software developer back in mid 2018 and it took me a while to put my life in order before I enrolled at Code Fellows'


if(theirName){
  alert('We\'re glad to have you with us ' + theirName + " " + bio);
  
} else if(theirName = ''){
  theirName = prompt(' I\'m sorry, I din\'t catch that, please enter your name');

} else {
  theirName = alert('Welcome, we\'re glad to have you with us ' + bio);

}

var correctcount = 0;

/////////////Quiz Begins Here/////////////////

function homeTown(){
  var guthrie = prompt('Please enter (y) for Yes or (n) for No; Did I grow up in Auburn?');
  
  if(guthrie === true){
    let reply = guthrie.toLowerCase;
    if(reply === 'n'){
    alert('Correct! I grew up in Guthrie Center!');
    
    correctcount ++;
    }
  } else {
    if(theirName === true){
      alert('I\m sorry, that is not correct, we\'ll come back to that ');
      
    } else {
      alert('I\m sorry, that is not correct');
      
    }
  }
}

function firstGame(){

  var kenLab = prompt('Please enter (y) for Yes and (n) for No; Was my first game on a 3 1/2" floppy drive?');
  
  if(kenLab === true){
    let reply = kenLab.toLowerCase

    if(reply === 'y'){
    alert('Correct! Ken\'s Labrynth was heavily pixelated and on a 3 1/2" floppy drive');
    correctcount ++;
    
    }
  } else {
    if(theirName === true){
      alert('I\m sorry,'+ theirName + ' that is not correct, we\'ll come back to that ');
     
    } else {
      alert('I\m sorry, that is not correct');      

    }
  }
}

function career(){
  var career = confirm('click "ok" for true and "cancel" for false; I\'m 32, and started my career in hospitality 16 years ago. ');
  
  if(career === true){
    alert('Awesome! I started in hospitality as a cook half my life ago!');
    correctcount ++;    
  } else {
    alert('I\m sorry, that is not correct we\'ll come back to that');
  }  
}

function bizSuccess(){
  var bizSuccess = confirm('click "ok" for true and "cancel" for false; I was super happy when my first business venture as a managing partner was a hit and we sold the company for a big profit! ');
  
  if(bizSuccess === false){
    alert('Awesome! While my first experience as an entrepreneur taught me a lot about where I need to grow, it was not a financial success');
    correctcount ++;

  } else {
    alert('I\m sorry, that is not correct we\'ll come back to that');    
  }

}

function noobieDev(){
  var noobieDev = confirm('click "ok" for true and "cancel" for false; It took me a year and a half to enroll @CodeFellows after I decided to become a Software Developer.')
  
  if(noobieDev === true){
    alert('Awesome! As excited as I was to start my journey as a dev, I knew it was important to set myself up for success first! ');
  } else {
    alert('thats ok we\'ll come back to that');
    
  }

}

function myNumber(){
  let guess = prompt('how many of my NerdyQuirks are movie/show related?');
  
  for(var attempts = 0; attempts < 3; attempts ++){
    var movieQuirk = '2';
    if(guess === movieQuirk){
      alert('Great you got it!');
      correctcount ++;
      break;
    } else if(guess != movieQuirk && attempts < 3){      
        guess = prompt('how many of my NerdyQuirks are movie/show related? you have ' + attempts + ' remaining');
        if(guess === movieQuirk){
          alert('Great you got it!');
          correctcount ++;
        }
    } else if(guess > movieQuirk && attempts < 3){ 
      guess = prompt('I\'m sorry, you guessed too high, you have ' + (3 - attempts) + ' attempts remaining ');
      
    } else if(guess < movieQuirks && attempts < 3){
      guess = prompt(' I\'m sorry, you guessed too low, you have ' + (3 - attempts) + ' attempts remaining ')
    } else {     
      guess = alert('I\'m sorry, the number was 3');        
    }
          break;
    
  }   
          
}

function favBands() {
  var favBands = ['Cradle of Filth', 'Aesthetic Perfection', 'Wardruna'];
  
  alert(favBands);
  
  var bandChoice = prompt('type your answer: which of the following is one of my favorite bands: Wardruna, Decoded Feedback, Justin Beiber, Maroon 5, Aesthetic Perfection, Combichrist, Shadows in the Dark, Cradle of Filth, And One. answers ARE CASE SENSITIVE');
  
  for(var attempts = 0; attempts < 5; attempts ++){
    if(bandChoice === favBands[0] || bandChoice === favBands[1] || bandChoice === favBands[2]){
      alert('Excellent memory! ');      
      correctcount ++;
      break;
    } else if(attempts < 5){
        bandChoice = prompt('I\'m sorry, that is not correct, you have: ' + (5 - attempts) + ' attempts remainingtype your answer: which of the following is one of my favorite bands: Wardruna, Decoded Feedback, Justin Beiber, Maroon 5, Aesthetic Perfection, Combichrist, Shadows in the Dark, Cradle of Filth, And One. answers ARE CASE SENSITIVE');
        break;
    } else {
        alert('You\'ve run out of guesses, correct possible answers were: ' + favBands);  
        
    }
  }

}

function fareWell(){
  if(theirName === true){
    alert('It has been a pleasure chatting with you ' + theirName + ' thank you for helping with my project, I hope we get to work together again soon! ');
    
  } else {
    alert('It has been a pleasure chatting with you thank you for helping with my project, I hope we get to work together again soon! ');
    
  }
}

// /////// Function Invocations////////

homeTown();

firstGame();

career();

bizSuccess();

noobieDev();

myNumber();

favBands();

var results = alert('Awesome! you got, ' + correctcount + ' out of ' + 7 + ' possible');

fareWell();




