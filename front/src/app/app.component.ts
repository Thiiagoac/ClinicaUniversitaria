import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Adicionar(){
    this.router.navigate(["add"]);
  }

  Editar(){
    this.router.navigate(["edit"]);
  }

  Remover(){
    this.router.navigate(["remove"])
  }
}
