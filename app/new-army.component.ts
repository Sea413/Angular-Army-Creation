import {Component, EventEmitter} from 'angular2/core';
import {Army} from './army.model';

@Component({
  selector: 'new-army',
  outputs: ['onSubmitNewArmy'],
  template: `
  <div class="army-form">
    <h3>Create Army:</h3>
    <input placeholder="player" class="col-sm-8 input-lg" #newplayer>
    <input placeholder="unitName" class="col-sm-8 input-lg" #newunitName>
    <input placeholder="generalName" class="col-sm-8 input-lg" #newgeneralName>
    <input type="number" placeholder="unitSize" class="col-sm-8 input-lg" #newunitSize>
    <input placeholder="unitLocation" class="col-sm-8 input-lg" #newunitLocation>
    <button (click)="addArmy(newplayer,newunitName,newgeneralName,newunitSize,newunitLocation)">Add</button>
  </div>
  `
})
export class NewArmyComponent {
  public onSubmitNewArmy: EventEmitter<Army>;
  constructor(){
    this.onSubmitNewArmy = new EventEmitter();
  }
  addArmy(player: HTMLInputElement,userunitName: HTMLInputElement, usergeneralName: HTMLInputElement, userunitSize: HTMLInputElement, userunitLocation: HTMLInputElement){
    // var emptyArmy = [];
    var tempArmy = new Army(parseInt(player.value),userunitName.value,usergeneralName.value,parseInt(userunitSize.value),userunitLocation.value,0)
    // emptyArmy.push(tempArmy);
    this.onSubmitNewArmy.emit(tempArmy);
    userunitName.value = "";
    usergeneralName.value = "";
    userunitSize.value = "";
    userunitLocation.value= "";
  }
}
