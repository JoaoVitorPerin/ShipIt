import { UsuarioModel } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Autenticacao } from '../model/login.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
    )
  { }

  login(autenticacao: Autenticacao) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };

    //let login = autenticacao.login;
    //let senha = autenticacao.senha;
    //let body = `login=${login}&senha=${senha}`;

    return this.httpClient.post<any>("http://localhost:8080/usuario/login",autenticacao);
  }

  salvar(UsuarioRequestModel : any){
    return this.httpClient.post<any>("http://localhost:8080/usuario/salvar",UsuarioRequestModel);
  }

  update(UsuarioModel : any){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.post<any>("http://localhost:8080/usuario/update",UsuarioModel, options);
  }

  listar(){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };

    return this.httpClient.get<UsuarioModel[]>("http://localhost:8080/usuario/getUsuarioByaccess/"+localStorage.getItem('userId'), options);
  }

  getUsuarioById(usuarioid:string){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.get<any>("http://localhost:8080/usuario/listar/" + usuarioid, options);
  }

  deletar(usuarioid:number):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
    let options={
      headers:httpheaders
    };
    return this.httpClient.delete<number>("http://localhost:8080/usuario/" + usuarioid, options);
  }

}




