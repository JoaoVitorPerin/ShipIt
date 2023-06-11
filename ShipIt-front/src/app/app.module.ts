import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { HomeComponent } from './home/home.component';
import { CadastroItemComponent } from './produto/cadastro-item/cadastro-item.component';
import { CardsComponent } from './produto/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarRestrictComponent } from './nav-bar-restrict/nav-bar-restrict.component';
import { AdminComponent } from './admin/admin.component';
import { OperadoresComponent } from './account/operadores/operadores.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    CarrouselComponent,
    HomeComponent,
    CadastroItemComponent,
    CardsComponent,
    NavBarRestrictComponent,
    AdminComponent,
    OperadoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
