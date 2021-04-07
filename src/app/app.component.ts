import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directivas-personalizadas';
  // Para la directiva de Atributo
  color: string = '';
  // Para la directiva Estructural
  condicion = true;

  cambiarVisibilidad() {
    this.condicion = !this.condicion;
  }

}
