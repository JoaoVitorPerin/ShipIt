import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOperadoresComponent } from './edit-operadores.component';

describe('EditOperadoresComponent', () => {
  let component: EditOperadoresComponent;
  let fixture: ComponentFixture<EditOperadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOperadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
