import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CadastroItemModel } from '../cadastro-item/model/cadastro_item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  public listProdutos: Array<CadastroItemModel> = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    this.listar();
  }

  listar() {
    this.httpClient.get<CadastroItemModel[]>("http://localhost:8080/produto")
      .subscribe(
        (produtos: CadastroItemModel[]) => {
          this.listProdutos = produtos;
          console.log(this.listProdutos);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}