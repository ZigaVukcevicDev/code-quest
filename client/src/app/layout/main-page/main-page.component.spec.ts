import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '@layout/header/header.component';
import { MainPageComponent } from '@layout/main-page/main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        // Components
        HeaderComponent,
        // Pages
        MainPageComponent,
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
