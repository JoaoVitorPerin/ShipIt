import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from './../model/produto.model';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  idProduto: number | undefined;
  descricaoProduto: string = '';
  valorProduto: number = 0.00;
  quantidadeEstoqueProduto: number = 0.00;
  pathProduto: string = '';

  displayedColumns: string[] = ['idProduto', 'descricaoProduto', 'valorProduto', 'quantidadeEstoqueProduto', 'delete' ];
  produtos : ProdutoModel[] = [];

  constructor(private produtoService : ItemService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.produtoService.listarMeusProdutos().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;
    })
  }

  deletar(idProduto : number){
    this.produtoService.deletar(idProduto).subscribe(produto=>{
      this.listar();
    })
  }

}
