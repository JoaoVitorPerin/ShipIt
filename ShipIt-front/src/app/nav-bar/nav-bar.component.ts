import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
  
export class NavBarComponent {
  public isDarkTheme = false;
  public isIconsToggled: boolean = false;
  public body = document.body;

  ngOnInit() {
    var theme = localStorage.getItem("theme");
    if(theme === 'dark'){
      this.isDarkTheme = true;
      this.body.classList.remove('bg-light');
      this.body.classList.add('bg-dark');
    }else{
      this.isDarkTheme = false;
      this.body.classList.remove('bg-dark');
      this.body.classList.toggle('bg-light');
    }
  }

  public toggle(){
    this.body.style.transition = 'background-color 200ms';
    this.body.classList.toggle('bg-dark');

    if (localStorage.getItem("theme") == "light"){
      localStorage.setItem("theme", "dark");
    }else{
      localStorage.setItem("theme", "light");
    }

    this.isDarkTheme = !this.isDarkTheme;
  }
}
