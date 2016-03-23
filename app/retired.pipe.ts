import {Pipe, PipeTransform} from 'angular2/core';
import {Army} from './army.model';

@Pipe({
  name: "retired",
  pure: false
})
export class RetiredPipe implements PipeTransform {
  transform(input: Army[], args) {
    var desiredRetirementState = args[0];
    if(desiredRetirementState === "retired") {
      return input.filter((army) => {
        return army.retired;
      });
    } else if (desiredRetirementState === "notRetired") {
      return input.filter((army) => {
        return !army.retired;
      });
    } else {
      return input;
    }
  }
}
