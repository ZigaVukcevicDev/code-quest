import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';

/**
 * Note to code reviewer:
 *
 * For simplicity and demo purpose, this component assumes we have breadcrumbs
 * with only 2 levels. If there would be more levels (and not knowing
 * the depth of them), code would need to be refactored in a recurring way.
 */

@Component({
  selector: 'cq-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input({ required: true }) breadcrumbs: Breadcrumbs | undefined;
}
