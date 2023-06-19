import { ProdutoModel } from "src/app/produto/model/produto.model";

export class PedidoItemProdutoModel{
  idPedidoitem?: number;
  pedidoIdPedido? : string;
  categoriaProduto? : string;
  descricaoProduto? : string;
  idProduto? : number;
  idUsuario? : string;
  nomeProduto? : string;
  pathProduto? : string;
  quantidadeEstoqueProduto? : number;
  subTotalProduto?: number = 0.00;
  produtoId?: string;
  pedidoId? : string;
  quantidadeProduto? : number = 0.00;
}
