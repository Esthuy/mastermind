import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/model/color.model';
import { Pin } from 'src/app/model/pin.model';

@Component({
  selector: 'app-player-choice',
  templateUrl: './player-choice.component.html',
  styleUrls: ['./player-choice.component.css']
})
export class PlayerChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { this.configurationToDisplay.emit(this.displayConfiguration); 
  }

  enterDisplayed: boolean = false; 
  resetDisplayed: boolean = false;
  displayConfiguration: boolean = true;
  displayValidationSolution: boolean = false; 
  player2message: boolean = false; 
 

  @Input('nbrOfPins')
  nbrOfPins!: number;  

  @Input('gameOn')
  gameOn: boolean = true; 

  @Input('choosingSolution')
  choosingSolution: boolean = false; 

  @Input('started')
  started: boolean = false; 

  @Output('combinationPlayer')
  playerEmitter = new EventEmitter<Pin[]>(); 

  @Output('configurationToDisplay')
  configurationToDisplay = new EventEmitter<boolean>();

  @Output('solutionByPlayer')
  solutionEmitter = new EventEmitter<Pin[]>(); 

  @Output('start')
  startEmitter = new EventEmitter(); 
 


  combinationPlayer : Pin[] = []; 
  solutionByPlayer : Pin[] = []; 



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


  onColorClick(param: Color){
    this.player2message = false; 
    this.started = true; 
    this.displayConfiguration = false; 
    this.configurationToDisplay.emit(this.displayConfiguration); 

    //Add chosen pin to the combinationPlayer 
    if(this.combinationPlayer.length < this.nbrOfPins){
      this.combinationPlayer.push({
        color: param, 
        status: undefined
        })
      } else{
        alert("Vous avez déjà choisis toutes les couleurs, veuillez valider ou réinitialiser")
      }

    //Display "enter" button when needed 
    if(this.combinationPlayer.length == this.nbrOfPins &&  this.choosingSolution == true){
        this.displayValidationSolution = true; 
      }
      else if (this.combinationPlayer.length == this.nbrOfPins){
        this.enterDisplayed = true; 
      }

    //Display "reset" button when needed 
    if(this.combinationPlayer.length > 0){
      this.resetDisplayed = true; 
    }
  }


  reset(){
    this.combinationPlayer = []; 
    this.enterDisplayed = false; 
    this.resetDisplayed = false; 
    this.displayValidationSolution = false; 
  }

  start(){
    this.reset(); 
    this.startEmitter.emit(); 
    this.started = false; 
    this.choosingSolution = false; 
    this.player2message = false; 
  }

  validation(){
    this.playerEmitter.emit(this.combinationPlayer); 
    this.reset(); 
  }

  validationSolution(){
    this.solutionByPlayer = this.combinationPlayer; 
    this.solutionEmitter.emit(this.solutionByPlayer); 
    this.reset(); 
    this.player2message = true; 
  }
}


