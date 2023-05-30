import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRestrictComponent } from './nav-bar-restrict.component';

describe('NavBarRestrict', () => {
  let component: NavBarRestrictComponent;
  let fixture: ComponentFixture<NavBarRestrictComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarRestrictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarRestrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
