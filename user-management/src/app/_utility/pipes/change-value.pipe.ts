import { Pipe, PipeTransform } from '@angular/core';
import { Role } from 'src/app/_models/role';

@Pipe({
  name: 'changeValue'
})
export class ChangeValuePipe implements PipeTransform {

  transform(value: Role): string {

    return value === Role.Admin ? 'Admin' : 'User';
  }

}
