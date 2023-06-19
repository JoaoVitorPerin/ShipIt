import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CadastroItemModel } from '../model/cadastro_item.model';
import { PedidoModel } from 'src/app/pedido/model/pedido.model';
import { PedidoItemModel } from 'src/app/pedido/model/pedidoItem.model';
import { ItemService } from '../shared/item.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  public listProdutos: Array<CadastroItemModel> = [];

  constructor(private httpClient: HttpClient,
              private itemService : ItemService) { }

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

  public idPedido : string = '';
  comprar(idProduto: number | undefined){
      //Primeiro crio o meu pedido
      this.idPedido = ""+ localStorage.getItem('idPedido');
      alert(this.idPedido)
      if(this.idPedido != "" && this.idPedido != null && this.idPedido != "null"){
        console.log('entrei mas não deveria')
        this.addItemPedidoProduto(idProduto, this.idPedido);
      } else {
        let pedido = new PedidoModel();
        pedido.dataPedido = new Date();
        pedido.usuarioId = ""+localStorage.getItem('userId');
        this.itemService.salvarPedido(pedido).subscribe(result => {
          console.log('funcionou salvar');
          localStorage.setItem('idPedido', result.idPedido)
          this.addItemPedidoProduto(idProduto, result.idPedido);
        }, erro => {
          console.log(erro);
          console.log('fim salvar pedido erro');
        });
      }
  }

  //Depois adiciono meu pedidoItem ao carrinho
  addItemPedidoProduto(idProduto: number | undefined, idPedido: string ){
    let pedidoItemProduto = new PedidoItemModel();
    pedidoItemProduto.pedidoId = ""+idPedido;
    pedidoItemProduto.produtoId = ""+idProduto;

    this.itemService.salvarPedidoItem(pedidoItemProduto).subscribe(result => {
      console.log('funcionou salvar pedido item');
      window.location.href = "/carrinho";
    }, erro => {
      console.log(erro);
      console.log('fim salvar erro');
    });

  }

}
