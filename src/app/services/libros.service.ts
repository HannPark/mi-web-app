import { Subject } from 'rxjs';

export class LibrosService {
  librosSubject = new Subject();

  private libros = [
    'Libro de Jose',
    'Libro de Aritmetica',
    'El Grafico Revista',
  ];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next(undefined); //Captura cambios o ejecuciones de agregar libro()
  }

  obtenerLibro() {
    return [...this.libros];
  }
}
