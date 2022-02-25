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
  empty: boolean = true; 
  displayConfiguration: boolean = true;
 

  @Input('nbrOfPins')
  nbrOfPins!: number;  

  @Input('gameOn')
  gameOn: boolean = true; 

  @Output('combinationPlayer')
  playerEmitter = new EventEmitter<Pin[]>(); 

  @Output('configurationToDisplay')
  configurationToDisplay = new EventEmitter<boolean>();

 


  combinationPlayer : Pin[] = []; 



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
    this.displayConfiguration = false; 
    this.configurationToDisplay.emit(this.displayConfiguration); 

    //Add chosen pin to the combinationPlayer 
    if(this.combinationPlayer.length < this.nbrOfPins){
      this.combinationPlayer.push({
        color: param, 
        status: undefined
        })
      this.empty = false; 
      } else{
        alert("Vous avez déjà choisis toutes les couleurs, veuillez valider ou réinitialiser")
      }

    //Display "enter" button when needed 
    if(this.combinationPlayer.length == this.nbrOfPins){
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
  }

  validation(){
    this.playerEmitter.emit(this.combinationPlayer); 
    this.reset(); 
  }
}


