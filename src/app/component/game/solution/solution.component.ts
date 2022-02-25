import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Color } from 'src/app/model/color.model';
import { Pin } from 'src/app/model/pin.model';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent{

  constructor() {}
 

  @Input('gameOn')
  gameOn!: boolean;

  @Input('solution')
  combinationSolution! : Pin[]; 

  

}
