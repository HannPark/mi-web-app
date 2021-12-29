import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {
  libros = ['Matematicas I', 'Algoritmos Basico', 'Algebra Nivel Basico'];

  eliminarLibro(libro: String) {
    this.libros = this.libros.filter((p) => p !== libro);
  }
}
