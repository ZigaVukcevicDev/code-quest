import { ComponentFixture, TestBed } from '@angular/core/testing';
import { breadcrumbsMock1 } from '@app/data/shared/breadcrumbs/mocks/breadcrumbs.mock';
import { BreadcrumbsComponent } from '@app/shared/components/breadcrumbs/breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbsComponent],
    });
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.breadcrumbs = breadcrumbsMock1;

    expect(component).toBeTruthy();
  });
});
