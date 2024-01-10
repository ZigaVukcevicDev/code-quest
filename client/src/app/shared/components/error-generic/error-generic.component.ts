import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cq-error-generic',
  templateUrl: './error-generic.component.html',
  styleUrls: ['./error-generic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorGenericComponent {}
