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
    produto1.nome = "Teclado Mecânico Gamer T-Dagger Bora";
    produto1.descricao = "RGB, Switch Outemu Blue, ABNT2";
    produto1.preco = 109.84;
    produto1.imagem = "https://images.kabum.com.br/produtos/fotos/108983/teclado-mecanico-gamer-t-dagger-bora-rgb-switch-outemu-blue-abnt2-t-tgk315-blue_1640725246_gg.jpg";

    let produto2 = new LivroModel(); 
    produto2.nome = "Teclado Mecânico Gamer Husky Gaming Blizzard";
    produto2.descricao = "Branco, 60%, Switch Gateron Red, ABNT2, RGB";
    produto2.imagem = "https://images.kabum.com.br/produtos/fotos/114587/teclado-mecanico-gamer-husky-blizzard-rgb-switch-gateron-red-abnt2-branco-tc-hbl-br_1619467058_gg.jpg";
    produto2.preco = 259;

    let produto3 = new LivroModel(); 
    produto3.nome = "Logitech G203 LIGHTSYNC RGB";
    produto3.descricao = "6 Botões Programáveis e Até 8.000 DPI, Branco";
    produto3.imagem = "https://images.kabum.com.br/produtos/fotos/112947/mouse-gamer-logitech-g203-rgb-lightsync-6-botoes-8000-dpi-branco-910-005794_1591126854_gg.jpg";
    produto3.preco = 99.99;

    let produto4 = new LivroModel(); 
    produto4.nome = "G PRO Wireless LIGHTSPEED";
    produto4.descricao = "Ambidestro, 6 Botões Programáveis, HERO 25K";
    produto4.imagem = "https://images.kabum.com.br/produtos/fotos/107333/mouse-gamer-sem-fio-logitech-g-pro-wireless-lightspeed-rgb-lightsync-ambidestro-6-botoes-programaveis-hero-25k-910-005271_1644501564_gg.jpg";
    produto4.preco = 456;

    this.produtos.push(produto1);
    this.produtos.push(produto2);
    this.produtos.push(produto3);
    this.produtos.push(produto4);
  }
}
