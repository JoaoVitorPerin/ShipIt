import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagamentoModel } from './../model/pagamento.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private httpClient: HttpClient) { }

  salvar(pagamentoModel : PagamentoModel){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.post<any>("http://localhost:8080/pagamento", pagamentoModel, options);
  }

  listar(){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.get<PagamentoModel[]>("http://localhost:8080/pagamento/getPagamentoByIdOperador/"+localStorage.getItem('userId'), options);
  }

  deletar(idPagamento:number):Observable<number>{
    let httpheaders = new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.delete<number>("http://localhost:8080/pagamento"+ "/" + idPagamento, options);
  }


  listarPagamentoByid(idPagamento:string):Observable<PagamentoModel>{
    let httpheaders = new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.get<PagamentoModel>("http://localhost:8080/pagamento/"+ idPagamento, options);
  }


}
