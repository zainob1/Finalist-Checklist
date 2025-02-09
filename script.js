//Add your global variables here
let pattern = [2, 2, 4, 3, 2, 1, 2, 4];
let progress = 0;
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;
let guessCounter = 0;
const clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
// storing start and top buttons
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function startGame() {
  // initializing the game variables
  progress = 0;
  gamePlaying = true;
  // swapping start and stop buttons 
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");
  // calling the function to play the first clue
  playClueSequence();
}
function stopGame() {
    gamePlaying = false;
    //swapping stop and start buttons
    startBtn.classList.remove("hidden");
    stopBtn.classList.add("hidden");
  }
  // Sound Synthesis Functions for Steps 6-8
  // You do not need to edit the below code
  const freqMap = {
    1: 600,
    2: 580,
    3: 392,
    4: 300
  }
function playTone(btn, len) {
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
    setTimeout(function() {
      stopTone()
    }, len)
  }
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
    }
}
function stopTone() {
    g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
    tonePlaying = false
  }
  // Page Initialization
  // Init Sound Synthesizer
  let AudioContext = window.AudioContext || window.webkitAudioContext
  let context = new AudioContext()
  let o = context.createOscillator()
  let g = context.createGain()
  g.connect(context.destination)
  g.gain.setValueAtTime(0, context.currentTime)
  o.connect(g)
  o.start(0)
  function lightButton(btn) {
    document.getElementById("button" + btn).classList.add("lit")
  }
  function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit")
  }
  function playSingleClue(btn) {
    if (gamePlaying) {
      lightButton(btn);
      playTone(btn, clueHoldTime);
      setTimeout(clearButton, clueHoldTime, btn);
    }
  }
function playClueSequence() {
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) { // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}
function loseGame() {
  stopGame();
  alert("You lost, press start to play again!")
}
function winGame() {
  stopGame();
  alert("You won, press start to play again!")
}
function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
}
  if (pattern[guessCounter] == btn) {
    // the user guessed correctly
    if (guessCounter == progress) {
      if (progress == pattern.length - 1 ){
        // the user won!
        winGame()
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    loseGame();
  }
}







































// let pattern = [2, 2, 4, 3, 2, 1, 2, 4];
// let progress = 0;
// let gamePlaying = false;
// let tonePlaying = false;
// let volume = 0.5;
// let guessCounter = 0;
// const clueHoldTime = 1000;
// const cluePauseTime = 333; //how long to pause in between clues
// const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
// // storing start and top buttons
// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");

// function startGame() {
//   // initializing the game variables
//   progress = 0;
//   gamePlaying = true;
//   // swapping start and stop buttons 
//   startBtn.classList.add("hidden");
//   stopBtn.classList.remove("hidden");
//   // calling the function to play the first clue
//   playClueSequence();
// }
// function stopGame() {
//     gamePlaying = false;
//     //swapping stop and start buttons
//     startBtn.classList.remove("hidden");
//     stopBtn.classList.add("hidden");
//   }
//   // Sound Synthesis Functions for Steps 6-8
//   // You do not need to edit the below code
//   const freqMap = {
//     1: 600,
//     2: 580,
//     3: 392,
//     4: 300
//   }
// function playTone(btn, len) {
//     o.frequency.value = freqMap[btn]
//     g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
//     context.resume()
//     tonePlaying = true
//     setTimeout(function() {
//       stopTone()
//     }, len)
//   }
// function startTone(btn){
//   if(!tonePlaying){
//     context.resume()
//     o.frequency.value = freqMap[btn]
//     g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
//     context.resume()
//     tonePlaying = true
//     }
// }
// function stopTone() {
//     g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
//     tonePlaying = false
//   }
//   // Page Initialization
//   // Init Sound Synthesizer
//   let AudioContext = window.AudioContext || window.webkitAudioContext
//   let context = new AudioContext()
//   let o = context.createOscillator()
//   let g = context.createGain()
//   g.connect(context.destination)
//   g.gain.setValueAtTime(0, context.currentTime)
//   o.connect(g)
//   o.start(0)
//   function lightButton(btn) {
//     document.getElementById("button" + btn).classList.add("lit")
//   }
//   function clearButton(btn) {
//   document.getElementById("button" + btn).classList.remove("lit")
//   }
//   function playSingleClue(btn) {
//     if (gamePlaying) {
//       lightButton(btn);
//       playTone(btn, clueHoldTime);
//       setTimeout(clearButton, clueHoldTime, btn);
//     }
//   }
// function playClueSequence() {
//   context.resume()
//   let delay = nextClueWaitTime; //set delay to initial wait time
//   guessCounter = 0;
//   for (let i = 0; i <= progress; i++) { // for each clue that is revealed so far
//     console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
//     setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
//     delay += clueHoldTime
//     delay += cluePauseTime;
//   }
// }
// function loseGame() {
//   stopGame();
//   alert("You lost, press start to play again!")
// }
// function winGame() {
//   stopGame();
//   alert("You won, press start to play again!")
// }
// function guess(btn) {
//   console.log("user guessed: " + btn);
//   if(!gamePlaying){
//     return;
// }
//   if (pattern[guessCounter] == btn) {
//     // the user guessed correctly
//     if (guessCounter == progress) {
//       if (progress == pattern.length - 1 ){
//         // the user won!
//         winGame()
//       } else {
//         progress++;
//         playClueSequence();
//       }
//     } else {
//       guessCounter++;
//     }
//   } else {
//     loseGame();
//   }
// }