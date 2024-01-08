import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorGenericComponent } from './error-generic.component';

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
