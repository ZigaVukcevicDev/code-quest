import { Pipe, PipeTransform } from '@angular/core';
import { Divider } from '@app/data/shared/divider.enum';

@Pipe({
  name: 'divider',
})
export class DividerPipe implements PipeTransform {
  transform(data: string[], divider: Divider): unknown {
    let joinedDataByDivider;

    switch (divider) {
      case Divider.SLASH:
        joinedDataByDivider = data.join(' / ');
        break;
      case Divider.COMMA:
        joinedDataByDivider = data.join(', ');
        break;
      default:
      /**
       * NOTE
       *
       * Default case should never happen as divider uses Enum. It is here
       * because of reason that switch requires default behavior.
       */
    }

    return joinedDataByDivider;
  }
}
