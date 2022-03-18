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
  displayInstruction: boolean = false; 
  player2message: boolean = false; 
  colorChanged: boolean = false; 

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

  @Output('colors')
  colorsEmitter = new EventEmitter<{
    [color: string] : Color, 
  }>(); 
 


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


  colorsBase:{ 
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
    this.displayInstruction = false; 

    //Add chosen pin to the combinationPlayer 
    if(this.combinationPlayer.length < this.nbrOfPins){
      this.combinationPlayer.push({
        color: param, 
        status: undefined
        })
      } else{
        alert("You already choosed all the pins color, please press enter or reset your combination")
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

  onChange(){
    this.colorsEmitter.emit(this.colors); 
    this.colorChanged = true; 
  }


  reset(){
    this.combinationPlayer = []; 
    this.enterDisplayed = false; 
    this.resetDisplayed = false; 
    this.displayValidationSolution = false; 
    this.displayConfiguration = true; 
  }

  start(){
    this.reset(); 
    this.started = false; 
    this.choosingSolution = false; 
    this.player2message = false;
    this.colorChanged = false; 
    this.displayInstruction = false; 
    this.colors = JSON.parse(JSON.stringify(this.colorsBase)); //réinitialise le tableau 
    this.startEmitter.emit();   
  }

  validation(){
    this.displayInstruction = true; 
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


