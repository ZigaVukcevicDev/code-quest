import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cq-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingIndicatorComponent {
  @Input({ required: true }) type: 'data' | 'button' = 'data';
}
