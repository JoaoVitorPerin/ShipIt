import { Component } from '@angular/core';
import { PedidoService } from '../service/pedido.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PedidoItemProdutoModel } from '../model/pedidoItemProduto.model';
import { PedidoItemModel } from '../model/pedidoItem.model';
import { ProdutoModel } from 'src/app/produto/model/produto.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {

  public listPedidoProdutoItem: Array<PedidoItemProdutoModel> = [];
  public listPedidoItem: Array<PedidoItemModel> = [];


  constructor(private httpClient: HttpClient,
    private pedidoService : PedidoService) { }

    ngOnInit(){
      this.listarPedidoItem();
    }

    listarPedidoItem(){
      let httpheaders=new HttpHeaders()
      .set('Content-type','application/Json')
      .set('Authorization','Bearer ' + localStorage.getItem('token'));
      let options={
        headers:httpheaders
      };
      this.httpClient.get<PedidoItemModel[]>("http://localhost:8080/pedidoItem/getPedidoItemByPedidoId/"+localStorage.getItem('idPedido'), options)
      .subscribe(
        (pedidos: PedidoItemModel[]) => {
          this.listPedidoItem = pedidos;
          console.log(this.listPedidoItem);

          this.listPedidoItem.forEach(element => {
            this.httpClient.get<ProdutoModel>("http://localhost:8080/produto/"+element.produtoId, options).subscribe(produto => {
              let pedidoItem = new PedidoItemProdutoModel();
              pedidoItem.idPedidoitem = element.idPedidoitem;
              pedidoItem.idPedidoitem = element.idPedidoitem;
              pedidoItem.pedidoIdPedido  = element.pedidoIdPedido;
              pedidoItem.subTotalProduto = element.subTotalProduto;
              pedidoItem.produtoId = element.produtoId;
              pedidoItem.pedidoId = element.pedidoId;
              pedidoItem.quantidadeProduto = element.quantidadeProduto;
              pedidoItem.categoriaProduto = ""+produto.categoriaProduto;
              pedidoItem.descricaoProduto =  produto.descricaoProduto;
              pedidoItem.idProduto = produto.idProduto;
              pedidoItem.idUsuario = "" + produto.usuario;
              pedidoItem.nomeProduto = produto.nomeProduto;
              pedidoItem.pathProduto = produto.pathProduto;
              pedidoItem.quantidadeEstoqueProduto = produto.quantidadeEstoqueProduto;
              this.listPedidoProdutoItem.push(pedidoItem);
            });
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }

    deletar(idPedidoItem:number | undefined):Observable<number>{
      console.log("entrei");
      let httpheaders = new HttpHeaders()
      .set('Content-type','application/Json')
      .set('Authorization','Bearer ' + localStorage.getItem('token'));
      let options={
        headers:httpheaders
      };
      return this.httpClient.delete<number>("http://localhost:8080/pedidoItem/"+ idPedidoItem, options);
    }

}
