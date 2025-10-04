import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarToggleTheme } from './navbar-toggle-theme';

describe('NavbarToggleTheme', () => {
  let component: NavbarToggleTheme;
  let fixture: ComponentFixture<NavbarToggleTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarToggleTheme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarToggleTheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
