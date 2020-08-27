// Worked with: Andy, Diana, J. Macklin, J. Negron, Nicole
this.boxes = document.querySelectorAll('.box')
this.counter = 0;
this.playerOne =[]; // 'X'
this.playerTwo=[]; // 'O'

boxOne: document.getElementById('boxOne')
boxTwo: document.getElementById('boxTwo')
boxThree: document.getElementById('boxThree')
boxFour: document.getElementById('boxFour')
boxFive: document.getElementById('boxFive')
boxSix: document.getElementById('boxSix')
boxSeven: document.getElementById('boxSeven')
boxEight: document.getElementById('boxEight')
boxNine:document.getElementById('boxNine')
result: document.querySelector('#result')
playersTurn: document.querySelector('#playersTurn')
container: document.querySelector('#container')

function changeTurn(){
  if(this.counter % 2 == 0){
    document.getElementById("turn").innerHTML = "1";
  } else {
    document.getElementById("turn").innerHTML = "2";
  }
}

// Worked with Gus
container.addEventListener("click",e=>{
  if (e.target.id && !playerOne.includes(e.target.id) && !playerTwo.includes(e.target.id) && e.target.id!="container"){
    if (this.counter%2===0) {
      playerOne.push(e.target.id);
      e.target.textContent='X';
    } else {
      playerTwo.push(e.target.id);
      e.target.textContent='O';
    }
    increment();
    checkWin();
    changeTurn();
  }
});

function increment(){
  console.log(this.counter);
  return this.counter++;
}

// Worked with Gus
function checkWin(){
  let text = "";
  if ((boxOne.textContent === boxTwo.textContent && boxTwo.textContent === boxThree.textContent ) && (boxOne.textContent)){
    (boxOne.textContent=== 'X')? result.textContent='Player One is the Winner!': result.textContent='Player Two is the Winner!'
    alert(result.textContent);
  }
  else if ((boxFour.textContent === boxFive.textContent && boxFive.textContent === boxSix.textContent) && (boxFour.textContent)){
    (boxFour.textContent=== 'X')? result.textContent='Player One is the Winner!': result.textContent='Player Two is the Winner!'
    alert(result.textContent);
  }
  else if ((boxSeven.textContent === boxEight.textContent && boxEight.textContent === boxNine.textContent) && (boxNine.textContent)){
    (boxSeven.textContent=== 'X')? result.textContent='Player One is the Winner!': result.textContent='Player Two is the Winner!'
    alert(result.textContent);
  }
  else if ((boxOne.textContent === boxFour.textContent && boxFour.textContent=== boxSeven.textContent) && (boxSeven.textContent)){
    (boxOne.textContent=== 'X')? result.textContent='Player One is the Winner!': result.textContent='Player Two is the Winner!'
    alert(result.textContent);
  }
  else if ((boxTwo.textContent === boxFive.textContent && boxFive.textContent === boxEight.textContent) && (boxEight.textContent)){
    (boxTwo.textContent=== 'X')? result.textContent='Player One is the Winner!': result.textContent='Player Two is the Winner!'
    alert(result.textContent);
  }
  else if ((boxThree.textContent === boxSix.textContent && boxSix.textContent === boxNine.textContent) && (boxNine.textContent)){
    (boxThree.textContent=== 'X')? result.textContent='Player One is the Winner!': result.textContent='Player Two is the Winner!'
    alert(result.textContent);
  }
  else if ((boxOne.textContent === boxFive.textContent && boxFive.textContent === boxNine.textContent) && (boxNine.textContent)){
    (boxOne.textContent=== 'X')? result.textContent='Player One is the Winner!': result.textContent='Player Two is the Winner!'
    alert(result.textContent);
  }
  else if ((boxThree.textContent === boxFive.textContent && boxFive.textContent === boxSeven.textContent) && (boxSeven.textContent)){
    (boxThree.textContent=== 'X')? result.textContent='Player One is the Winner!': result.textContent='Player Two is the Winner!'
    alert(result.textContent);
  }
  else if(playerOne.length + playerTwo.length === 9){
    alert(result.textContent='Boo, a tie!');
  }
};

const resetAll = document.getElementById("reset")
resetAll.addEventListener("click", () => {
  for (let i = 0; i < this.boxes.length; i ++) {
    this.boxes[i].innerHTML = "";
  }
  playerOne =[];
  playerTwo =[];
  result.innerHTML = "";
});
