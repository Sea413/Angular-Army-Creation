import {Component} from 'angular2/core';
import {Army} from './army.model';

@Component({
  selector: 'edit-army-details',
  inputs: ['army'],
  template: `
    <div class="army-form">
      <h3>Edit Unit Name: </h3>
      <img (click)="modifyMap(army.unitSize-200)" src="../img/risk-colored-small.jpg" alt="Risk Map">

    </div>
  `
})
export class EditArmyDetailsComponent {
public army: Army;
modifyMap(setUnit: number): void {
  this.army.unitSize= setUnit;
  if(setUnit < 11){
    this.army.broken =true;
  }
}
}
