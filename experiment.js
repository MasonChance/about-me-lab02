'use strict';

// //  break down parts of ea question into re-usable code.
// // correct counter counts results
        // // all results must end false. reasign var holding answer from true to false after alerting correct.
// // break down "correct"/"incorrect" alert cycle into a function that can be called within question input evaluation cycle

// // create var quizQ[];
// // crate var attemtsIndex = 0; as global
// // condense greeting cycle to include bio. 
// // use document.write(<element id=""><el>); in addition to console.log & alert within operations. (optional feature.)
// //  var correctCount = 0; 
// // names of functions should be questions, variable holding input prompt/confirm should be named after the answer

//////////////// Work-Space /////////////////////

var correctCount = 0;
var attemptIndex;   // // allows access within all functions. throughout. 

function welcome(){
  let userName = prompt('Hi, welcome to the project! What is your name?');
  var bio = ' Now that we are acquainted I\'ll tell you a bit about myself. I was born in Auburn Washington we moved to Iowa when I was young and I mostly grew up in Guthrie Center. Even though we didn\'t own a computer until I was almost out of the house I played Ken\'s Labrynth on my aunt\'s computer, this was before we had things like streaming or CD\'s! I started working as a cook at a restaurant when I was 16, and after moving back to Washington a few years ago I started a business with a former boss as the managing partner; This ended up being a good opportunity for self-evaluation and careful re-adjusting of my career direction. I decided to become a software developer back in mid 2018 and it took me a while to put my life in order before I enrolled at Code Fellows';

  if(theirName){
    // alert('We\'re glad to have you with us ' + theirName + " " + bio);
    console.log('We\'re glad to have you with us ' + theirName + " " + bio);
  } else if(theirName === ''){
    theirName = prompt(' I\'m sorry, I din\'t catch that, please enter your name');
  } else {
    console.log('We\'re glad to have you with us ' + bio);
    // alert('We\'re glad to have you with us ' + bio)
    // document.write(<p id="">'We\'re glad to have you with us ' + bio</p>)
  } 
}


