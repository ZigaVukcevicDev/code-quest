import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numericList',
})
export class NumericListPipe implements PipeTransform {
  transform(length: number): number[] {
    // `_` stands as a placeholder for an unused parameter
    return Array.from({ length }, (_, index) => index + 1);
  }
}
