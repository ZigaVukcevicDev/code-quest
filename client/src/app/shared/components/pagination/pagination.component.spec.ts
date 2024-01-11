import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumericListPipe } from '@app/shared/pipes/numeric-list/numeric-list.pipe';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent, NumericListPipe],
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
