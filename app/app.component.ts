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
      new Army(1,"Jimmies Jamboree","Jimmy", 660,"North America", 0),
      new Army(1,"Green Salamanders","Ender Wiggins",8,"Asia",1),
      new Army(2,"Army of Men","Aragorn", 5000,"Asia",2),
      new Army(2,"Jerry Cool Men","Jerry", 123,"Europe",3)
    ];
    console.log(this.armies);
  }
  armyWasSelected(clickedArmy: Army): void {
    console.log('parent', clickedArmy);
  }
}
