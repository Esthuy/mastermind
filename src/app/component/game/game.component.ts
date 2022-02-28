import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Color } from 'src/app/model/color.model';
import { Pin } from 'src/app/model/pin.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  constructor(private cdref: ChangeDetectorRef) { this.initializeSolution(); }

  enterDisplayed: boolean = false; 
  resetDisplayed: boolean = false;
  playerWin: boolean = false; 
  playerLose: boolean = false; 
  displayConfiguration!: boolean; 
  multiplayer!: boolean;
  startClicked! : boolean;  
  started! : boolean; 
  

 
  gameOn: boolean = true;

  nbrOfTries: number = 0; 
  chosenNbrOfTries!: number; 
  nbrOfPins!: number;  
  
  colors:{
    [color: string] : Color, 
  } = {
    "blue" : "#008CBA",
    "green" : "#4CAF50", 
    "red" : "#f44336", 
    "yellow" : "#e2d40b", 
    "brown" : "#4e380b", 
    "purple" : "#920cb4", 
    "pink" : "#e73981"
  }

  randomColors:{
    [indice: number] : string, 
  } = {
    0 : "blue",
    1 : "green", 
    2 : "red", 
    3 : "yellow", 
    4 : "brown", 
    5 : "purple", 
    6 : "pink",
  } 


  combinationSolution : Pin[] = []; 

  oldCombination : [Pin[]] = [[]]; 

 

  
  //Initialize the combinationSolution with random colors, and emit it to parent  
  initializeSolution(){
    this.combinationSolution = []; 
    for(let i = 0; i < this.nbrOfPins ; i++){
      let randomNumber = Math.floor(Math.random() * (7));
      this.combinationSolution.push({
         color: this.colors[this.randomColors[randomNumber]], 
         status: undefined
      });
    } 
  }


  start(){
    this.initializeSolution();  
    this.oldCombination = [[]]; 
    this.gameOn = true; 
    this.nbrOfTries = 0; 
    this.playerWin = false; 
    this.playerLose = false; 
    this.displayConfiguration = true; 
    this.startClicked = true; 
    this.multiplayer = false; 
    this.started = false; 
  }

 
  validation(combinationPlayer : Pin[]) {
    this.startClicked = false;
    console.log(combinationPlayer);
    let correctPin: number = 0; 
    const oneCombination = [];
  
    //reinitialise the status of combinationPLayer and combinationSolution 
    for(let i = 0; i < combinationPlayer.length; i++){
      this.combinationSolution[i].status = undefined; 
      combinationPlayer[i].status = undefined; 
    }


    //change the status of the pins to correct or wrong-color
    for(let i = 0; i < combinationPlayer.length; i++){
         if(combinationPlayer[i].color == this.combinationSolution[i].color){
            combinationPlayer[i].status = 'correct'; 
            this.combinationSolution[i].status = 'correct';
         } else {
            combinationPlayer[i].status = 'wrong-color';  
         }
      }

    //change the status of the pins to wrong-position if needed
    for(let i = 0; i < combinationPlayer.length; i++){
      if(combinationPlayer[i].status == "wrong-color"){  
        let stop = false;      
        for(let e = 0; e < this.combinationSolution.length; e++){
          if((this.combinationSolution[e].status == undefined) && (this.combinationSolution[e].color == combinationPlayer[i].color && !stop)){
              combinationPlayer[i].status = "wrong-position"; 
              this.combinationSolution[e].status = "wrong-position"; 
              stop = true; 
          }
        }
      }
    }


    //Transfer the combination player into oldCombination 
    for (let pinPlayer of combinationPlayer){
      oneCombination.push(pinPlayer); 
        if(pinPlayer.status == 'correct'){
            correctPin++;
        }
    }
    this.oldCombination.push(oneCombination); 


    //End game if user win 
    if(correctPin == this.nbrOfPins){
      this.gameOn = false; 
      this.playerWin = true; 
    }

    this.nbrOfTries++; 

    //End game if user lose 
    if(this.nbrOfTries == this.chosenNbrOfTries && correctPin < this.nbrOfPins){
      this.gameOn = false; 
      this.playerLose = true;
    }
  }

  multiplayerOn(multiplayerOn : boolean){
    this.multiplayer = multiplayerOn; 
  }

  validationSolution(solutionPlayer : Pin[]){
    this.combinationSolution = []; 
    this.combinationSolution = solutionPlayer; 
    this.multiplayer = false; 
  }

  configurationToDisplay(display: boolean){
    this.displayConfiguration = display; 
    this.cdref.detectChanges();
  }

  changeNbrPins(nbrPins : number){
    this.nbrOfPins = nbrPins; 
    this.initializeSolution();
  }

  changeNbrTries(nbrTries : number){
    this.chosenNbrOfTries = nbrTries;
    this.initializeSolution(); 
  }



}
