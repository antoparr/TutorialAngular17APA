import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>
      games works!
    </p>
    <p> Los juegos favoritos de {{nombreUsuario}} son éstos:</p>
    <ul>
        @for (game of games; track game.id){
          <li (click)="juegoFavorito(game.name)">{{ game.name }}</li>
        }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() nombreUsuario: string = '';
  @Output() comunicadorEventoDeHijoAPadre = new EventEmitter<string>();
  games = [
    {id: 1,
    name: "Alone in the dark"},
    {
      id: 2,
      name: "Need for speed 3"
    },
    {
      id: 3,
      name: "Out run"
    }
  ]

  juegoFavorito(j: string): void {
    alert("A" + this.nombreUsuario + "le gusta jugar a " + j);
    this.comunicadorEventoDeHijoAPadre.emit(j);
}
}
