import { CadastroItemModel } from './model/cadastro_item.model';
import { ItemService } from './shared/item.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-item',
  templateUrl: './cadastro-item.component.html',
  styleUrls: ['./cadastro-item.component.css']
})
export class CadastroItemComponent {
  //Atributos para cadastro de produto
  public nomeProduto: string = '';
  public descricaoProduto: string = '';
  public valorProduto: number = 0;
  public quantidadeEstoqueProduto: number = 0;
  public pathImg: string = '';

  constructor(
    private itemService: ItemService,
  ) { }

  salvar() {
    console.log('nome = ' + this.nomeProduto)
    console.log('descricao = ' + this.descricaoProduto);
    console.log('valor = ' + this.valorProduto);
    console.log('produto = ' + this.quantidadeEstoqueProduto);
    console.log('img = ' + this.pathImg);

    let produto = new CadastroItemModel();
    produto.nomeProduto = this.nomeProduto;
    produto.descricaoProduto = this.descricaoProduto;
    produto.valorProduto = this.valorProduto;
    produto.quantidadeEstoqueProduto = this.quantidadeEstoqueProduto;
    produto.pathProduto = this.pathImg;

    this.itemService.salvar(produto).subscribe(produtoRetorno => {
      console.log('funcionou');
    }, erro => {
      console.log(erro);
    })
  }

  listar(){
    this.itemService.listar().subscribe(produtoRetorno => {
      console.log(produtoRetorno);
    })
  }
}
