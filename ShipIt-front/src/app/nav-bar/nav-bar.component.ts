import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
  
export class NavBarComponent {

  public isIconsToggled: boolean = false;
  
  public toggleIcons() {
    this.isIconsToggled = !this.isIconsToggled;
    const logo = document.getElementById('logo') as HTMLImageElement;
    const imgPerfil = document.getElementById('img-perfil') as HTMLImageElement;
    const imgCarrinho = document.getElementById('img-carrinho') as HTMLImageElement;
    const imgTheme = document.getElementById('img-theme') as HTMLImageElement;

    if (this.isIconsToggled) {
      logo.src = '../../assets/images/logoBranca.png';
      imgPerfil.src = '../../assets/icons/user-light.svg';
      imgCarrinho.src = '../../assets/icons/cart-light.svg';
      imgTheme.src = '../../assets/icons/sun-light.svg';
    } else {
      logo.src = '../../assets/images/logoHorizontal.png';
      imgPerfil.src = '../../assets/icons/user-dark.svg';
      imgCarrinho.src = '../../assets/icons/cart-dark.svg';
      imgTheme.src = '../../assets/icons/moon-dark.svg';
    }
  }

  public toggle(){
    const body = document.body;
    const header = document.getElementById('header');
    const busca = document.getElementById('botao-busca');

    body.style.transition = 'background-color 200ms';
    body.classList.toggle('bg-dark');

    if (header) {
      header.style.transition = 'background-color 200ms';
      header.classList.toggle('bg-dark');
    }

    if (busca) {
      busca.style.transition = 'border-color 200ms';
      busca.classList.toggle('btn-outline-light');
    }
    this.toggleIcons();
  }
}
