import { Component, EventEmitter } from 'angular2/core';
import { ArmyComponent } from './army.component';
import { Army } from './army.model';
import { NewArmyComponent } from './new-army.component';
import {DonePipe} from './done.pipe';
import {RetiredPipe} from './retired.pipe';

@Component({
  selector: 'invasion',
  inputs: ['army','armyList'],
  template: `
    <div class="army-form">
    <select (change)="onChange($event.target.value)">
      <option value="northAmerica">North America</option>
      <option value="southAmerica">South America</option>
      <option value="africa">Africa</option>
      <option value="europe">Europe</option>
      <option value="asia">Asia</option>
      <option value="australia">Australia</option>
    </select>
      <button (click)="modifyMap(100)">Invade</button>
    </div>
  `
})
export class InvasionComponent {
public army: Army;
public armyList: Army[];
modifyMap(setUnit: number): void {
  for (var army of this.armyList) {
    if (army !== this.army) {
      army.unitSize-=setUnit;
    }
  }
  }
}
