import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasecustom'
})
export class UpperCase implements PipeTransform{
  transform(title: string) : string {
    return title.toUpperCase();
}
}
