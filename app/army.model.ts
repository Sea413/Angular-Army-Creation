export class Army {
  public broken: boolean = false;
  public retired: boolean =false;
  constructor(public player: number,public unitName: string, public unitGeneral: string, public unitSize: number, public id: number) {
    if(unitSize <11){
      this.broken = true;
    }
  }
}
