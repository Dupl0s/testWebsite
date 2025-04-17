import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

transform(value: string, limit: number): string {
   if (!value || limit <= 0) {
   return value;
   }
   const regex = new RegExp(`.{1,${limit}}`, 'g');
   return value.match(regex)?.join('\n') || value;
   }
  

}
