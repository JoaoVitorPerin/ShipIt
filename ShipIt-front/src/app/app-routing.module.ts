import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroItemComponent } from './cadastro-item/cadastro-item.component';

const routes: Routes = [
  { path: 'login', title: 'ShipIt - Login' ,component: LoginComponent },
  { path: 'home', title: 'ShipIt - Home' ,component: HomeComponent },
  { path: 'cadastro-produto', title: 'ShipIt - Cadastro Produtos' ,component: CadastroItemComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
