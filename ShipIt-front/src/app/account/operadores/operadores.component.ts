import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { AccountService } from '../shared/account.service';
@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.Component.scss']
})
export class OperadoresComponent implements OnInit {

  idUsuario: number | undefined;
  nomeUsuario: string = '';
  emailUsuario: string = '';
  isAdmin = false;

  constructor(private usuarioService : AccountService) { }

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.listar()

    var idUser = ""+ localStorage.getItem('userId');
    this.usuarioService.getUsuarioById(idUser).subscribe(result => {
      if(result.admin === "admin"){
        this.isAdmin = true;
        this.displayedColumns = ['idUsuario', 'nomeUsuario', 'emailUsuario', 'update', 'delete'];
      } else {
        this.isAdmin = false;
        this.displayedColumns = ['idUsuario', 'nomeUsuario', 'emailUsuario', 'update'];
      }
    }, erro => {
      console.log(erro);
      this.isAdmin = false;
    })

  }

  usuarios : UsuarioModel[] = [];

  listar(){
    this.usuarioService.listar().subscribe(usuarios => {
      console.log(usuarios);
      this.usuarios = usuarios;
    })
  }



  deletar(idUsuario : number){
    this.usuarioService.deletar(idUsuario).subscribe(usuario=>{
      this.listar();
    })
  }

  alterar(idUsuario : number){
    localStorage.setItem('idToUpdate', idUsuario+'');
    window.location.href = "/editOperador";
  }

}
