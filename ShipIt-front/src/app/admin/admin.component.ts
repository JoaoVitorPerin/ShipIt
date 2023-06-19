import { AccountService } from 'src/app/account/shared/account.service';
import { Component } from '@angular/core';
import { UsuarioModel } from '../account/model/usuario.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private accountService : AccountService) { }

  isAdmin = false;

  mensagem : string = '';

  ngOnInit(): void {
    var idUser = ""+ localStorage.getItem('userId');
    this.accountService.getUsuarioById(idUser).subscribe(result => {
      if(result.admin === "admin"){
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    }, erro => {
      console.log(erro);
      this.isAdmin = false;
    })
  }
}
