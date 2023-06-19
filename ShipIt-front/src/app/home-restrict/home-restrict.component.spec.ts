import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRestrictComponent } from './home-restrict.component';

describe('HomeRestrictComponent', () => {
  let component: HomeRestrictComponent;
  let fixture: ComponentFixture<HomeRestrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRestrictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRestrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
