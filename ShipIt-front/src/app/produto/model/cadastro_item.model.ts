import { UsuarioModel } from './../../account/model/usuario.model';
export class CadastroItemModel{
    id: number | undefined;
    nomeProduto: string = '';
    descricaoProduto: string = '';
    cartogoriaProduto: String = '';
    valorProduto: number = 0;
    quantidadeEstoqueProduto: number = 0;
    pathProduto: string = '';
    UsuarioModel?: UsuarioModel;
}
