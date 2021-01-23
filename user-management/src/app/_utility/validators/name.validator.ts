import { AbstractControl, ValidationErrors } from '@angular/forms';
  
export class NameValidator {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).substring(0, 1) === ' '){
            return {cannotContainSpace: true}
        }
  
        return null;
    }
}