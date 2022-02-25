import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/model/color.model';
import { Pin } from 'src/app/model/pin.model';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.nbtriesEmitter.emit(this.chosenNbrOfTries); 
    this.nbrPinEmitter.emit(this.nbrOfPins); 
  }

  chosenNbrOfTries: number = 4; 
  nbrOfPins: number = 4;  

  multiplayer: boolean = false; 
  enterDisplayed: boolean = false; 
  resetDisplayed: boolean = false; 

  combinationSolution: Pin[] =[]; 

  @Output('nbTries')
  nbtriesEmitter = new EventEmitter<number>(); 

  @Output('nbPin') 
  nbrPinEmitter = new EventEmitter<number>();

  @Input()
  displayConfiguration!: boolean; 
  
  onChangeTries(){
    this.nbtriesEmitter.emit(this.chosenNbrOfTries); 
  }

  onChangePins(){
    this.nbrPinEmitter.emit(this.nbrOfPins); 
  }




}
