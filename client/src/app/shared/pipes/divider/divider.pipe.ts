import { Pipe, PipeTransform } from '@angular/core';
import { Divider } from '@app/data/shared/divider.enum';

/**
 * Note to code reviewer:
 *
 * For demo purpose, pipe in book.component.ts uses divider SLASH,
 * in book-detail.component.ts uses divider COMMA.
 */

@Pipe({
  name: 'divider',
})
export class DividerPipe implements PipeTransform {
  transform(data: string[], divider: Divider): unknown {
    switch (divider) {
      case Divider.SLASH: {
        return data.join(' / ');
      }

      case Divider.COMMA: {
        return data.join(', ');
      }
    }
  }
}
