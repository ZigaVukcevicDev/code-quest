import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UrlPath } from '@app/data/shared/url-path.enum';
import { environment } from '@environments/environment';

@Component({
  selector: 'cq-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly UrlPath: typeof UrlPath = UrlPath;
  readonly environment = environment;
}
