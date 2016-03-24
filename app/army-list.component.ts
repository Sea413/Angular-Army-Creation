import { Component, EventEmitter } from 'angular2/core';
import { ArmyComponent } from './army.component';
import { Army } from './army.model';
import { InvasionComponent } from './invasion.component';
import { NewArmyComponent } from './new-army.component';
import {DonePipe} from './done.pipe';
import {RetiredPipe} from './retired.pipe';

@Component({
  selector: 'army-list',
  inputs: ['armyList'],
  outputs: ['onArmySelect'],
  pipes: [RetiredPipe, DonePipe],
  directives: [ArmyComponent, InvasionComponent, NewArmyComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="broken">Show Broken</option>
    <option value="notBroken">Not Broken</option>
    <option value="retired">Retired General</option>
    <option value="notRetired" selected="selected"> Still in service!</option>
  </select>
  <army-display *ngFor="#currentArmy of armyList | retired:filterRetired | broken:filterBroken"
    (click)="armyClicked(currentArmy)"
    [class.selected]="currentArmy === selectedArmy"
    [army]="currentArmy">
  </army-display>
  <invasion *ngIf="selectedArmy" [army]="selectedArmy" [armyList]="armyList">
  </invasion>
  <new-army (onSubmitNewArmy)="createArmy($event)"></new-army>
  <img src="../img/risk-colored-small.jpg" alt="Risk Map">
  `
})
export class ArmyListComponent {
  public armyList: Army[];
  public onArmySelect: EventEmitter<Army>;
  public selectedArmy: Army;
  public filterRetired: string = "notRetired";
  public filterBroken: string = "notBroken";
  constructor() {
    this.onArmySelect = new EventEmitter();
  }
  armyClicked(clickedArmy: Army): void {
    this.selectedArmy = clickedArmy;
    this.onArmySelect.emit(clickedArmy);
}
  createArmy(tempArmy: Army): void {
    this.armyList.push(tempArmy);
  }
  onChange(filterOption) {
    this.filterRetired = filterOption;
    this.filterBroken = filterOption;
  }
}
