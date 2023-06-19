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
import { PagamentoComponent } from './pagamento/pagamento/pagamento.component';
import { CreatePagamentoComponent } from './pagamento/create-pagamento/create-pagamento.component';
import { EditOperadoresComponent } from './account/edit-operadores/edit-operadores.component';
import { HomeRestrictComponent } from './home-restrict/home-restrict.component';
import { CarrinhoComponent } from './pedido/carrinho/carrinho.component';
import { CreateCompraComponent } from './pedido/create-compra/create-compra.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: NavBarRestrictComponent,
    children: [
      { path: 'home-restrict', title: 'ShipIt - Home' ,component: HomeRestrictComponent },
      { path: 'cadastro-produto', title: 'ShipIt - Cadastro Produtos' ,component: CadastroItemComponent },
      { path: 'admin', title: 'ShipIt - Configurações' ,component: AdminComponent },
      { path: 'operadores', title: 'ShipIt - Configurações' ,component: OperadoresComponent },
      { path: 'produtos', title: 'ShipIt - Configurações' ,component: ProdutosComponent },
      { path: 'pagamento', title: 'ShipIt - Configurações' ,component: PagamentoComponent },
      { path: 'addpagamento', title: 'ShipIt - Configurações' ,component: CreatePagamentoComponent },
      { path: 'editOperador', title: 'ShipIt - Configurações' ,component: EditOperadoresComponent },
      { path: 'carrinho', title: 'ShipIt - Configurações' ,component: CarrinhoComponent },
      { path: 'addCompra', title: 'ShipIt - Configurações' ,component: CreateCompraComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: NavBarComponent,
    children: [
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
