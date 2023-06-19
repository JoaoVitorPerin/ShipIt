import { UsuarioModel } from './../../account/model/usuario.model';
export class CadastroItemModel{
    idProduto: number | undefined;
    descricaoProduto: string = '';
    nomeProduto: string = '';
    categoriaProduto: String = '';
    valorProduto: number = 0;
    quantidadeEstoqueProduto: number = 0;
    pathProduto: string = '';
    idUsuario: string = '';
}
