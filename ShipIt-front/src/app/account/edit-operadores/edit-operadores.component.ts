import { Component } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../model/usuario.model';

@Component({
  selector: 'app-edit-operadores',
  templateUrl: './edit-operadores.component.html',
  styleUrls: ['./edit-operadores.component.scss']
})
export class EditOperadoresComponent {

  ngOnInit(): void {
    //Ajusta o bg theme
    if(localStorage.getItem("theme") == "dark"){
      const body = document.body;
      body.classList.toggle('bg-dark');
    }
    //faz a pesquisa do produto a ser exibido em tela
    this.listar();
  }

  constructor(
    private accountService: AccountService,
    private http: HttpClient,
  ) { }

  listar(){
    this.accountService.getUsuarioById(""+localStorage.getItem('idToUpdate')).subscribe(result => {
      console.log(result);
      this.idUsuario = result.idUsuario;
      this.nomeUsuario = result.nomeUsuario;
      this.emailUsuario = result.emailUsuario;
      this.senhaUsuarioHide = result.senhaUsuario;
      this.adminUsuario = result.adminUsuario;
    })
  }



  public idUsuario: number | undefined;
  public nomeUsuario: string = '';
  public emailUsuario: string = '';
  public senhaUsuario: string = '';
  public senhaUsuarioConf: string = '';
  public senhaUsuarioHide: string = '';
  public adminUsuario: string = '';
  update() {
    //console.log('nome = ' + this.nomeUsuario)
    //console.log('email = ' + this.emailUsuario);
    //console.log('senha = ' + this.senhaUsuario);

    let usuario = new UsuarioModel();
    usuario.idUsuario = this.idUsuario;
    usuario.emailUsuario = this.emailUsuario;
    usuario.nomeUsuario = this.nomeUsuario;
    if(this.senhaUsuario != ''){
      usuario.senhaUsuario = this.senhaUsuario;
    } else {
      usuario.senhaUsuario = this.senhaUsuarioHide;
    }
    usuario.adminUsuario = this.adminUsuario;
    this.accountService.update(usuario).subscribe(result => {
        console.log('funcionou salvar');
        localStorage.setItem("userNome", result.nomeUsuario);
        localStorage.setItem('idPagamentoToUpdate', '');
        window.location.href = "/operadores";
      }, erro => {
        console.log(erro);
        console.log('fim salvar erro');
      });
  }




}
