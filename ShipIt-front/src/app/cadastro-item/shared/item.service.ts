import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CadastroItemModel } from '../model/cadastro_item.model';
import{Observable } from 'rxjs';

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

  listar(){
    return this.httpClient.get<CadastroItemModel[]>("http://localhost:8080/produto");
  } 

  deletar(itemId:number):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.httpClient.delete<number>("http://localhost:8090/produto"+ "/" + itemId);
  }
}