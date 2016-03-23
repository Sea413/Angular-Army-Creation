import { Component, EventEmitter } from 'angular2/core';
import { ArmyListComponent } from './army-list.component';
import { Army } from './army.model';

@Component({
  selector: 'my-app',
  directives: [ArmyListComponent],
  template: `
    <div class="container">
      <h1>Army List</h1>
      <army-list
        [armyList]="armies"
        (onArmySelect)="armyWasSelected($event)">
      </army-list>
    <div>
  `
})
export class AppComponent {
  public armies: Army[];
  constructor(){
    this.armies = [
      new Army("Jimmies Jamboree", "Jimmy", 660, 0),
      new Army("Green Salamanders", "Ender Wiggins", 8,1),
      new Army("Army of Men","Aragorn", 5000,2),
      new Army("Jerry Cool Men","Jerry", 123,3)
    ];
    console.log(this.armies);
  }
  taskWasSelected(clickedArmy: Army): void {
    console.log('parent', clickedArmy);
  }
}
