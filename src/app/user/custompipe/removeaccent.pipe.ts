import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeaccent'
})
export class RemoveaccentPipe implements PipeTransform {

  transform(value: string): string {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

}
