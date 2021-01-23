import { Directive }  from '@angular/core';
import { 
    AsyncValidator,
    AbstractControl,
    ValidationErrors,
    NG_ASYNC_VALIDATORS,
    AsyncValidatorFn }
     from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

export function uniqueEmailValidator(userService: UserService): AsyncValidatorFn{
    return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return userService.getUsers().pipe(
            map((users: User[]) => {
                var user = users.filter(u => u.email == c.value);
               return user && user.length > 0 ? {'uniqueEmail': true}: null;
            })
        );
    };
}

@Directive({
    selector: '[uniqueEmail]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true}]
})
export class UniqueEmailValidatorDirective implements AsyncValidator {

    constructor(private userService: UserService){}

    validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
        return uniqueEmailValidator(this.userService)(control);
    }
    

}