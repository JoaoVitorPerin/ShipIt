import { PagamentoService } from '../service/pagamento.service';
import { PagamentoModel } from './../model/pagamento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent {
  idPagamento: number | undefined;
  numeroCartao: string = '';
  formaPgtoPagamento: string = '';

  displayedColumns: string[] = ['idPagamento', 'numeroCartao', 'formaPgtoPagamento', 'delete', 'update' ];
  pagamentos : PagamentoModel[] = [];

  constructor(private pagamentoService : PagamentoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.pagamentoService.listar().subscribe(pagamentos => {
      //console.log(produtos);
      this.pagamentos = pagamentos;
    })
  }

  deletar(idPagamento : number){
    this.pagamentoService.deletar(idPagamento).subscribe(pagamento=>{
      this.listar();
    })
  }

  alterar(idPagamento : number){
    localStorage.setItem('idPagamentoToUpdate', ""+idPagamento);
    window.location.href = '/addpagamento';
  }
}
