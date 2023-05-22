import { Autenticacao } from './model/login.model';
import { AccountService } from './shared/account.service';
import { Component } from '@angular/core';
import { UsuarioModel } from './model/usuario.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  //Atributos para cadastro
  public idUsuario: number | undefined;
  public nomeUsuario: string = '';
  public emailUsuario: string = '';
  public senhaUsuario: string = '';
  public confirmaSenha: string = '';

  //Atributos para login
  public nomeUsuarioLogin: string = '';
  public senhaUsuarioLogin:  string = '';

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
  }

  login(){
    let autenticacao = new Autenticacao();
    autenticacao.login = this.nomeUsuarioLogin;
    autenticacao.senha = this.senhaUsuarioLogin;
    this.accountService.login(autenticacao).subscribe(result => {
      console.log(result)
      localStorage.setItem("token",result.token);
    });
  }

  salvar() {
    console.log('id = ' + this.idUsuario)
    console.log('nome = ' + this.nomeUsuario);
    console.log('login = ' + this.emailUsuario);
    console.log('senha = ' + this.senhaUsuario);
    let usuario = new UsuarioModel();
    if(this.senhaUsuario == this.confirmaSenha){
      usuario.idUsuario = this.idUsuario;
      usuario.nome = this.nomeUsuario;
      usuario.login = this.emailUsuario;
      usuario.senha = this.senhaUsuario;
    } else{
      console.log('Senhas não são iguais!')
    }

    this.accountService.salvar(usuario).subscribe(usuarioRetorno => {
      console.log('funcionou');
      console.log(usuarioRetorno);
      localStorage.setItem('token',usuarioRetorno.token);
      window.location.href = "/login";
    }, erro => {
      console.log(erro);
    })
  }

  listar(){
    this.accountService.listar().subscribe(usuarios => {
      console.log(usuarios);
    })
  }
}
