import { Component, OnInit } from '@angular/core';
import { LivroModel } from './model/produto.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit{

  produtos: LivroModel[] = [];

  ngOnInit(): void {
    let produto1 = new LivroModel(); 
    produto1.nome = "Caneca do Thiago";
    produto1.descricao = "Caneca Preta e Bonita";
    produto1.preco = 223;

    let produto2 = new LivroModel(); 
    produto2.nome = "Caneca do Thiago 2";
    produto2.descricao = "Caneca Preta e Bonita";
    produto2.preco = 123;

    let produto3 = new LivroModel(); 
    produto3.nome = "Caneca do Thiago 3";
    produto3.descricao = "Caneca Preta e Bonita";
    produto3.preco = 321;

    let produto4 = new LivroModel(); 
    produto4.nome = "Caneca do Thiago 4";
    produto4.descricao = "Caneca Preta e Bonita";
    produto4.preco = 456;

    this.produtos.push(produto1);
    this.produtos.push(produto2);
    this.produtos.push(produto3);
    this.produtos.push(produto4);
  }
}
