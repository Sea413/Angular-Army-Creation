import { Component } from 'angular2/core';
import { Army } from './army.model';

@Component({
    selector: 'army-display',
    inputs: ['army'],
  template: `
  <div>
    <input *ngIf ="!army.retired && army.unitSize <11" type= "checkbox" (click)="toggleRetired(true)" />
    <input *ngIf="army.retired && army.unitSize <11" type="checkbox" checked (click)="toggleRetired(false)" />

    <label>Unit Name: {{ army.unitName }}</label>
    <label>Unit Name: {{ army.unitGeneral }}</label>
    <label>Unit Size: {{ army.unitSize }}</label>
    <button (click)="testing(army.unitSize-10)"> Sue for Peace</button>
    <button (click)="testing(army.unitSize+50)">Marshal for War</button>
  </div>
  `
  })
  export class ArmyComponent {
    public army: Army;
    toggleRetired(setState: boolean){
      this.army.retired = setState;
    }
    testing(setUnit: number): void{
      this.army.unitSize= setUnit;
    }
  }
