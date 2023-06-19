import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePagamentoComponent } from './create-pagamento.component';

describe('CreatePagamentoComponent', () => {
  let component: CreatePagamentoComponent;
  let fixture: ComponentFixture<CreatePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePagamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
