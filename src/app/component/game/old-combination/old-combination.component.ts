import { Component, Input, OnInit } from '@angular/core';
import { Pin } from 'src/app/model/pin.model';

@Component({
  selector: 'app-old-combination',
  templateUrl: './old-combination.component.html',
  styleUrls: ['./old-combination.component.css']
})
export class OldCombinationComponent{

  constructor() { }

  @Input('oldCombination')
  oldCombination : [Pin[]] = [[]]; 
  
}
