import { UsuarioModel } from "src/app/account/model/usuario.model";

export class ProdutoModel{
  idProduto?: number;
  nomeProduto? : string;
  categoriaProduto? :String;
  descricaoProduto?: string;
  valorProduto?: number = 0.00;
  quantidadeEstoqueProduto?: number = 0;
  pathProduto?: string;
  usuario? : string;
}
