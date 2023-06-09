import { PedidoItemModel } from './../../pedido/model/pedidoItem.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CadastroItemModel } from '../model/cadastro_item.model';
import { Observable } from 'rxjs';
import { PedidoModel } from 'src/app/pedido/model/pedido.model';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  salvar(cadastroItemModel : CadastroItemModel){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.post<CadastroItemModel>("http://localhost:8080/produto/salvar", cadastroItemModel, options);
  }

  upload(formData : FormData){
    console.log("-------------------arquivoooooooooooooooo-----------------")
    let httpheaders=new HttpHeaders()
    //.set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.post<any>("http://localhost:8080/upload/salvar", formData, options);
  }

  listar(){
    return this.httpClient.get<CadastroItemModel[]>("http://localhost:8080/produto");
  }

  listarMeusProdutos(){
    return this.httpClient.get<CadastroItemModel[]>("http://localhost:8080/produto/getProdutoByUsuario/" + localStorage.getItem('userId'));
  }

  deletar(itemId:number):Observable<number>{
    let httpheaders=new HttpHeaders()
      .set('Content-type','application/Json')
      .set('Authorization','Bearer ' + localStorage.getItem('token'))
    let options={
      headers:httpheaders
    };
    return this.httpClient.delete<number>("http://localhost:8080/produto"+ "/" + itemId, options);
  }

  salvarPedido(pedidoModel : PedidoModel){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.post<any>("http://localhost:8080/pedido/salvar", pedidoModel, options);
  }


  salvarPedidoItem(pedidoItemModel : PedidoItemModel){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.post<any>("http://localhost:8080/pedidoItem/salvar", pedidoItemModel, options);
  }

}
