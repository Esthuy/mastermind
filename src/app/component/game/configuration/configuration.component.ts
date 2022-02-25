import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output('nbTries')
  nbtriesEmitter = new EventEmitter<number>(); 

  @Output('nbPin') 
  nbrPinEmitter = new EventEmitter<number>();

  chosenNbrOfTries: number = 4; 
  nbrOfPins: number = 4;  

  @Input()
  displayConfiguration!: boolean; 
  
  onChangeTries(){
    this.nbtriesEmitter.emit(this.chosenNbrOfTries); 
  }

  onChangePins(){
    this.nbrPinEmitter.emit(this.nbrOfPins); 
  }
}
