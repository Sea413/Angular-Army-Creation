import {Component, EventEmitter} from 'angular2/core';
import {Army} from './army.model';

@Component({
  selector: 'new-army',
  outputs: ['onSubmitNewArmy'],
  template: `
  <div class="army-form">
    <h3>Create Army:</h3>
    <input placeholder="unitName" class="col-sm-8 input-lg" #newunitName>
    <input placeholder="generalName" class="col-sm-8 input-lg" #newgeneralName>
    <input type="number" placeholder="unitSize" class="col-sm-8 input-lg" #newunitSize>
    <button (click)="addArmy(newunitName,newgeneralName,newunitSize)">Add</button>
  </div>
  `
})
export class NewArmyComponent {
  public onSubmitNewArmy: EventEmitter<Army>;
  constructor(){
    this.onSubmitNewArmy = new EventEmitter();
  }
  addArmy(userunitName: HTMLInputElement, usergeneralName: HTMLInputElement, userunitSize: HTMLInputElement){
    // var emptyArmy = [];
    var tempArmy = new Army(userunitName.value,usergeneralName.value,parseInt(userunitSize.value), 0)
    // emptyArmy.push(tempArmy);
    this.onSubmitNewArmy.emit(tempArmy);
    userunitName.value = "";
    usergeneralName.value = "";
    userunitSize.value = "";
  }
}
