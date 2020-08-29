// Worked with: Andy, Diana, J. Macklin, J. Negron, Nicole
class GameBoard{
  constructor(){
    this.boxes = document.querySelectorAll('.box')
    this.counter = 0;
    this.playerOne = []; //Player1 = X
    this.playerTwo = []; //Player2 = O
    this.boxOne = document.getElementById('boxOne')
    this.boxTwo = document.getElementById('boxTwo')
    this.boxThree = document.getElementById('boxThree')
    this.boxFour = document.getElementById('boxFour')
    this.boxFive = document.getElementById('boxFive')
    this.boxSix = document.getElementById('boxSix')
    this.boxSeven = document.getElementById('boxSeven')
    this.boxEight = document.getElementById('boxEight')
    this.boxNine = document.getElementById('boxNine')
    this.playersTurn = document.querySelector('#playersTurn')
    this.container = document.querySelector('#container')
    this.resetAll = document.getElementById("reset")
  }

  changeTurn(){
    if(this.counter % 2 == 0){
      document.getElementById("turn").innerHTML = "1";
    }else{
      document.getElementById("turn").innerHTML = "2";
    }
  }

  // Worked with Gus
  clickOnBoard(){
    this.container.addEventListener("click",e=>{
      if (e.target.id && !this.playerOne.includes(e.target.id) && !this.playerTwo.includes(e.target.id) && e.target.id!="container"){
        if (this.counter%2===0) {
          this.playerOne.push(e.target.id);
          e.target.textContent= 'X';
        } else {
          this.playerTwo.push(e.target.id);
          e.target.textContent= 'O';
        }
        this.increment();
        this.checkWin();
        this.changeTurn();
      }
    });
  }

  increment(){
    console.log(this.counter);
    return this.counter++;
  }

  // Worked with Gus
  checkWin(){
    let text = "";
    if ((this.boxOne.textContent === this.boxTwo.textContent && this.boxTwo.textContent === this.boxThree.textContent ) && (this.boxOne.textContent)){
      (this.boxOne.textContent=== 'X')? this.textContent='Player One is the Winner!': this.textContent='Player Two is the Winner!'
      alert(this.textContent);
    }
    else if ((this.boxFour.textContent === this.boxFive.textContent && this.boxFive.textContent === this.boxSix.textContent) && (this.boxFour.textContent)){
      (this.boxFour.textContent=== 'X')? this.textContent='Player One is the Winner!': this.textContent='Player Two is the Winner!'
      alert(this.textContent);
    }
    else if ((this.boxSeven.textContent === this.boxEight.textContent && this.boxEight.textContent === this.boxNine.textContent) && (this.boxNine.textContent)){
      (this.boxSeven.textContent=== 'X')? this.textContent='Player One is the Winner!': this.textContent='Player Two is the Winner!'
      alert(this.textContent);
    }
    else if ((this.boxOne.textContent === this.boxFour.textContent && this.boxFour.textContent=== this.boxSeven.textContent) && (this.boxSeven.textContent)){
      (this.boxOne.textContent=== 'X')? this.textContent='Player One is the Winner!': this.textContent='Player Two is the Winner!'
      alert(this.textContent);
    }
    else if ((this.boxTwo.textContent === this.boxFive.textContent && this.boxFive.textContent === this.boxEight.textContent) && (this.boxEight.textContent)){
      (this.boxTwo.textContent=== 'X')? this.textContent='Player One is the Winner!': this.textContent='Player Two is the Winner!'
      alert(this.textContent);
    }
    else if ((this.boxThree.textContent === this.boxSix.textContent && this.boxSix.textContent === this.boxNine.textContent) && (this.boxNine.textContent)){
      (this.boxThree.textContent=== 'X')? this.textContent='Player One is the Winner!': this.textContent='Player Two is the Winner!'
      alert(this.textContent);
    }
    else if ((this.boxOne.textContent === this.boxFive.textContent && this.boxFive.textContent === this.boxNine.textContent) && (this.boxNine.textContent)){
      (this.boxOne.textContent=== 'X')? this.textContent='Player One is the Winner!': this.textContent='Player Two is the Winner!'
      alert(this.textContent);
    }
    else if ((this.boxThree.textContent === this.boxFive.textContent && this.boxFive.textContent === this.boxSeven.textContent) && (this.boxSeven.textContent)){
      (this.boxThree.textContent=== 'X')? this.textContent='Player One is the Winner!': this.textContent='Player Two is the Winner!'
      alert(this.textContent);
    }
    else if(this.playerOne.length + this.playerTwo.length === 9){
      alert(this.textContent='Boo, a tie');
    }
  }

  play(){
    this.clickOnBoard()
      if (this.resetAll){
        this.resetBoard();
      }
  }

  resetBoard(){
    this.resetAll.addEventListener("click", () => {
      for (let i = 0; i < this.boxes.length; i ++) {
        this.boxes[i].innerHTML = "";
      }
      this.playerOne =[];
      this.playerTwo =[];

      this.innerHTML = "";
    });
  }
}

let TicTacToe = new GameBoard()
TicTacToe.play();
