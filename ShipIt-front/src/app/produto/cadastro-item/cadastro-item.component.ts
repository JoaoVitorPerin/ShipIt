import { UsuarioModel } from './../../account/model/usuario.model';
import { CadastroItemModel } from '../model/cadastro_item.model';
import { ItemService } from '../shared/item.service';
import { HttpClient, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { AccountService } from 'src/app/account/shared/account.service';
@Component({
  selector: 'app-cadastro-item',
  templateUrl: './cadastro-item.component.html',
  styleUrls: ['./cadastro-item.component.scss']
})
export class CadastroItemComponent implements OnInit {
  ngOnInit(): void {
    if(localStorage.getItem("theme") == "dark"){
      const body = document.body;
      body.classList.toggle('bg-dark');
    }

  }

  //Atributos para cadastro de produto
  public nomeProduto: string = '';
  public descricaoProduto: string = '';
  public valorProduto: number = 0;
  public quantidadeEstoqueProduto: number = 0;
  public mensagem: string = '';
  public nomeArquivo: string = '';
  public formData = new FormData;
  public pathProduto : string = '';
  public idUsuario: string = '';
  public UsuarioModel? : UsuarioModel;
  constructor(
    private itemService: ItemService,
    private accountService: AccountService,
    private http: HttpClient,
  ) { }

  // @ts-ignore
  onFileSelected(event) {
    const arquivoSelecionado: File = <File>event.target.files[0];
    if (arquivoSelecionado) {
      this.uploadArquivo(arquivoSelecionado);
    }
  }

  private uploadArquivo(arquivoSelecionado: File) {
    console.log(arquivoSelecionado)
    this.formData.append("file", arquivoSelecionado, arquivoSelecionado.name);
    console.log(this.formData)
  }

  salvar() {
    console.log('nome = ' + this.nomeProduto)
    console.log('descricao = ' + this.descricaoProduto);
    console.log('valor = ' + this.valorProduto);
    console.log('produto = ' + this.quantidadeEstoqueProduto);
    console.log('img = ' + this.pathProduto);
    console.log('img = ' + this.pathProduto);
    this.idUsuario = ""+ localStorage.getItem('userId');

    let produto = new CadastroItemModel();
    produto.nomeProduto = this.nomeProduto;
    produto.descricaoProduto = this.descricaoProduto;
    produto.categoriaProduto = "varejo";
    produto.valorProduto = this.valorProduto;
    produto.quantidadeEstoqueProduto = this.quantidadeEstoqueProduto;

    //pego meu usuário do banco

      produto.idUsuario = "" +this.idUsuario;
      console.log(UsuarioModel)
      console.log('funcionou user');
      //Salvo meu arquivo no Firebase
      this.itemService.upload(this.formData).subscribe(uploadRetorno => {
        console.log(uploadRetorno.path);
        this.pathProduto = uploadRetorno.path;
        produto.pathProduto = this.pathProduto;
        console.log('funcionou upload');
        //Salvo o meu produto
        console.log(produto)
        this.itemService.salvar(produto).subscribe(produtoRetorno => {
          console.log('funcionou salvar');
          window.location.href = "/produtos";
        }, erro => {
          console.log(erro);
          console.log('fim salvar erro');
        });
      }, erro => {
        console.log(erro);
        console.log('fim upload erro');
      });





  }

  listar(){
    this.itemService.listar().subscribe(produtoRetorno => {
      console.log(produtoRetorno);
    })
  }



}
