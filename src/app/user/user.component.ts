import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username:string = 'Antonio';
  estaLogado: boolean = false;
  juegoFavorito:string = '';

  saludar(): void {
    alert("Hola, " + this.username);
  }

  cambiarEstado(): void {
    this.estaLogado = !this.estaLogado;
  }
  getfavourite(g: string){
    this.juegoFavorito = g;
  }

}
