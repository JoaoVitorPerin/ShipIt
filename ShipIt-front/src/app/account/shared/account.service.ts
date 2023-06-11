import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../model/usuario.model';
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

  salvar(usuarioModel : any){
    return this.httpClient.post<any>("http://localhost:8080/usuario/salvar",usuarioModel);
  }

  listar(){
    return this.httpClient.get<UsuarioModel[]>("http://localhost:8080/usuario/listarAll");
  }

  deletar(usuarioid:number):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.httpClient.delete<number>("http://localhost:8080/usuario"+ "/" + usuarioid);
  }

}




