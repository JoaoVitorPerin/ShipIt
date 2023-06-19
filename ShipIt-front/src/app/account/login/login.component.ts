import { Autenticacao } from '../model/login.model';
import { AccountService } from '../shared/account.service';
import { Component } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { Router } from '@angular/router';
import { UsuarioRequestModel } from '../model/usuarioRequest.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {

  //Atributos para cadastro
  public idUsuario: number | undefined;
  public nomeUsuario: string = '';
  public emailUsuario: string = '';
  public senhaUsuario: string = '';
  public confirmaSenha: string = '';

  public mensagem: string = '';
  //Atributos para login
  public nomeUsuarioLogin: string = '';
  public senhaUsuarioLogin:  string = '';

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("theme") == "dark"){
      const body = document.body;
      body.classList.toggle('bg-dark');
    }
  }

  login(){
    let autenticacao = new Autenticacao();
    autenticacao.login = this.nomeUsuarioLogin;
    autenticacao.senha = this.senhaUsuarioLogin;
    this.accountService.login(autenticacao).subscribe(result => {
      console.log(result);
      localStorage.setItem("token",result.token);
      localStorage.setItem("userId", result.usuario.idUsuario);
      localStorage.setItem("userNome", result.usuario.nomeUsuario);
      // navego para a rota vazia novamente
      this.router.navigate(['admin']);
    }, erro => {
      var texto = "";
      texto += "<div class='alert alert-danger' role='alert'>";
      texto += "Usuário e/ou senha inválidos. ";
      texto += "</div>";
      this.mensagem = texto;
      console.log(erro);
    });
  }

  salvar() {
    //console.log('id = ' + this.idUsuario)
    console.log('nome = ' + this.nomeUsuario);
    console.log('login = ' + this.emailUsuario);
    console.log('senha = ' + this.senhaUsuario);
    let usuario = new UsuarioRequestModel();
    if(this.senhaUsuario == this.confirmaSenha){
      //usuario.idUsuario = this.idUsuario;
      usuario.nome = this.nomeUsuario;
      usuario.login = this.emailUsuario;
      usuario.senha = this.senhaUsuario;
    } else{
      var texto = "";
      texto += "<div class='alert alert-danger' role='alert'>";
      texto += "As senhas não são iguais";
      texto += "</div>";
      this.mensagem = texto;
      return;
    }

    if(this.senhaUsuario.length < 8){
      var texto = "";
      texto += "<div class='alert alert-danger' role='alert'>";
      texto += "A senha deve ter ao menos 8 caracteres";
      texto += "</div>";
      this.mensagem = texto;
      return;
    }

    this.accountService.salvar(usuario).subscribe(usuarioRetorno => {
      console.log(usuarioRetorno);
      localStorage.setItem("userId", usuarioRetorno.idUsuario);
      localStorage.setItem("userNome", usuarioRetorno.nomeUsuario);

      window.location.href = "/login";
      var texto = "";
      texto += "<div class='alert alert-info' role='alert'>";
      texto += "Cadastro realizado com sucesso";
      texto += "</div>";
      this.mensagem = texto;

    }, erro => {
      var texto = "";
      texto += "<div class='alert alert-danger' role='alert'>";
      texto += "Não foi possível realizar o cadastro, favor validar os dados preenchidos e/ou verificar se já possúi uma conta vinculada a plataforma. ";
      texto += "</div>";
      this.mensagem = texto;
      console.log(erro);
    })
  }

  listar(){
    this.accountService.listar().subscribe(usuarios => {
      console.log(usuarios);
    })
  }
}
