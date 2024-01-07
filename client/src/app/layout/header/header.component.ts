import { Component } from '@angular/core';
import { UrlPath } from '@app/data/shared/url-path.enum';

@Component({
  selector: 'cq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly UrlPath: typeof UrlPath = UrlPath;
}
