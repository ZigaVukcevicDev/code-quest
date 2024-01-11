import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '@app/layout/footer/footer.component';
import { MainPageComponent } from '@app/layout/main-page/main.page.component';
import { HeaderComponent } from '@layout/header/header.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        // Components
        HeaderComponent,
        FooterComponent,
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
