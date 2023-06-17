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


  displayedColumns: string[] = ['idUsuario', 'nomeUsuario', 'emailUsuario', 'delete'];
  usuarios : UsuarioModel[] = [];

  constructor(private usuarioService : AccountService) { }

  ngOnInit(): void {
    this.listar()
  }

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

}
