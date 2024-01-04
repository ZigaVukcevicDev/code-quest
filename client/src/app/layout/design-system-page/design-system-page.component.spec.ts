import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignSystemPageComponent } from '@layout/design-system-page/design-system-page.component';

describe('DesignSystemPageComponent', () => {
  let component: DesignSystemPageComponent;
  let fixture: ComponentFixture<DesignSystemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSystemPageComponent],
    });
    fixture = TestBed.createComponent(DesignSystemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
