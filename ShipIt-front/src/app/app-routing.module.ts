import { NgModule } from '@angular/core';
import { AuthGuard } from './account/shared/auth.guard';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroItemComponent } from './produto/cadastro-item/cadastro-item.component';
import { NavBarRestrictComponent } from './nav-bar-restrict/nav-bar-restrict.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin.component';
import { OperadoresComponent } from './account/operadores/operadores.component';
import { ProdutosComponent } from './produto/produtos/produtos.component';
const routes: Routes = [
  {
    path: '',
    component: NavBarRestrictComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'cadastro-produto', title: 'ShipIt - Cadastro Produtos' ,component: CadastroItemComponent },
      { path: 'admin', title: 'ShipIt - Configurações' ,component: AdminComponent },
      { path: 'operadores', title: 'ShipIt - Configurações' ,component: OperadoresComponent },
      { path: 'produtos', title: 'ShipIt - Configurações' ,component: ProdutosComponent },

    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', title: 'ShipIt - Home' ,component: HomeComponent },
      { path: 'login', title: 'ShipIt - Login' ,component: LoginComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
