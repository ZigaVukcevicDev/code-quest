import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorGenericComponent } from '@shared/components/error-generic/error-generic.component';

describe('ErrorGenericComponent', () => {
  let component: ErrorGenericComponent;
  let fixture: ComponentFixture<ErrorGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorGenericComponent],
    });
    fixture = TestBed.createComponent(ErrorGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
