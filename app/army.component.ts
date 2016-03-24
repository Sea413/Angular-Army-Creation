import { Component } from 'angular2/core';
import { Army } from './army.model';

@Component({
    selector: 'army-display',
    inputs: ['army'],
  template: `
  <div>
    <input *ngIf ="!army.retired && army.unitSize <11" type= "checkbox" (click)="toggleRetired(true)" />
    <input *ngIf="army.retired && army.unitSize <11" type="checkbox" checked (click)="toggleRetired(false)" />

    <label>Player Assignment:{{army.player}}</label>
    <label>Unit Name: {{ army.unitName }},</label>
    <label>General Name: {{ army.unitGeneral }},</label>
    <label>Unit Size: {{ army.unitSize }},</label>
    <label>Unit Location: {{army.unitLocation}}</label>
    <button (click)="changeUnit(army.unitSize-10)">Sue for Peace</button>
    <button (click)="changeUnit(army.unitSize+50)">Marshal for War</button>
  </div>
  `
  })
  export class ArmyComponent {
    public army: Army;
    toggleRetired(setState: boolean){
      this.army.retired = setState;
    }
    changeUnit(setUnit: number): void {
      this.army.unitSize= setUnit;
      if(setUnit < 11){
        this.army.broken =true;
      }
      else if(setUnit > 11){
        this.army.broken =false;
      }
    }
  }
