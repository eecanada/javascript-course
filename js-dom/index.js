/////////////////////DOM Manipulation/////////////////////////

// DOM: structured representation of an HTML document, that I am going to use to webpages to scripts like JS

// For each HTML box there is an object in the DOM that I access and interact with. The DOM and JS are NOT the same thing
 
/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

//GOALS
// create game variables
// generate random number 
// manipulate the DOM 
// read from the DOM 
// change CSS Style 

////////////////////////////////////////////////// create game variables
let scores, roundScore, activePlayer
scores = [0,0]
roundScore = 0
activePlayer = 0 // 0 first player, 1 second player 

////////////////////////////////////////////////// generate random number in my dice from 1 - 6
// dice = Math.floor(Math.random() * 6) + 1 
// console.log(dice)

///////////////////////////////////////////////// manipulate the DOM, document is object giving me access to the DOM,
//querySelector selects first element that is finds. To change text in the element I use .textContent (plain text, NO HTML)
// document.querySelector(`#current-${activePlayer}`).textContent = dice 
 
// using innerHTML to add HTML tags, something .textContent cannot do 
// document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}<em/>` 

///////////////////////////////////////////////// read from the DOM 
// const globalScore = document.querySelector('#score-0').textContent
// console.log(globalScore) //---> 

///////////////////////////////////////////////// change CSS Style 
// dice does not appear at the begining of the game
document.querySelector('.dice').style.display = 'none' 



/////////////////////////////////////////////Events/////////////////////////////////////////////
// Events: notifications that are sent to notify the code that something happened  on the webpage (clicking on a button, resizing a window, scrolling up or down)
// Event Listener: a function that performs an action based on a certain event. It waits for a specific event to happen 

//GOALS
// set up event handler 
// callback function 
// anonymous functions
// select element by ID
// change the image in <img> tag 

// Both the global and current score are set to 0
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'


///////////////////////////////////////////////////////// set up event handler && callback funtion 
// btn is the callback function, because the function is not called by me, but another function, a function that I pass onto another fucntion as an arguement so in this case addEventListener('click', btn), and the addEventListener function will call my btn function

// function btn(){

// }
// document.querySelector('.btn-roll').addEventListener('click', btn)

//////////////////////////////////////////////////////////anonymous functions
// can only be within the context 
document.querySelector('.btn-roll').addEventListener('click', function(){
  // set random number
  const dice = Math.floor(Math.random() * 6) + 1 
  // display random number as dice image
  const diceDOM = document.querySelector('.dice')
  diceDOM.style.display = 'block' 
  // change the image in <img> tag 
  diceDOM.src =  `dice-${dice}.png`
  // update current score on the DOM or switch active player
  if(dice !== 1){
    roundScore += dice
    document.getElementById(`current-${activePlayer}`).textContent = roundScore 
  } else {
    // switch players and set the roundScore which is current score to 0 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0
    // after a player gets a 1, the current score gets set to 0 
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
  }
})

//GOALS
// Ternary operator 
// add,remove and toggel HTML classes

