import { Component } from '@angular/core';
import { PagamentoModel } from '../model/pagamento.model';
import { PagamentoService } from '../service/pagamento.service';
@Component({
  selector: 'app-create-pagamento',
  templateUrl: './create-pagamento.component.html',
  styleUrls: ['./create-pagamento.component.scss']
})
export class CreatePagamentoComponent {

  public idPagamento: number | undefined;
  public numeroCartao: string = '';
  public formaPgtoPagamento: string = '';
  public idPgto: string = '';
  constructor(private pagamentoService: PagamentoService) { }

  ngOnInit(): void {
    this.idPgto = ''+ localStorage.getItem('idPagamentoToUpdate');
    if(this.idPgto != '' && this.idPgto != null){
      this.doStartUpdatePagamento(this.idPgto);
    }
  }

  salvar(){
    console.log('idPagamento = ' + this.idPagamento)
    console.log('numeroCartao = ' + this.numeroCartao);
    console.log('formaPgtoPagamento = ' + this.formaPgtoPagamento);

    let pagamento = new PagamentoModel();
    pagamento.idPagamento = this.idPagamento;
    pagamento.numeroCartao = this.numeroCartao;
    pagamento.formaPgtoPagamento = this.formaPgtoPagamento;
    pagamento.idUsuario = "" + localStorage.getItem('userId');

    console.log(pagamento);
    this.pagamentoService.salvar(pagamento).subscribe(pagamentoRetorno => {
      console.log('funcionou');
      window.location.href = "/pagamento";
    }, erro => {
      console.log(erro);
    })
  }

  doStartUpdatePagamento(idPagamento : string){
    this.pagamentoService.listarPagamentoByid(idPagamento).subscribe(pagamento => {
      this.idPagamento = pagamento.idPagamento;
      this.numeroCartao = "" +pagamento.numeroCartao;
      this.formaPgtoPagamento = ""+pagamento.formaPgtoPagamento;
    }, erro => {
      console.log(erro);
    })
  }

}
