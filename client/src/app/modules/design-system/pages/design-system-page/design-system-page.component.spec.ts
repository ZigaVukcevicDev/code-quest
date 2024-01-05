import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@app/shared/shared.module';
import { DesignSystemPageComponent } from '@modules/design-system/pages/design-system-page/design-system-page.component';

describe('DesignSystemPageComponent', () => {
  let component: DesignSystemPageComponent;
  let fixture: ComponentFixture<DesignSystemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSystemPageComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(DesignSystemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
