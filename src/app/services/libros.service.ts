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
    this.librosSubject.next(null); //Captura cambios o ejecuciones de agregar libro()
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter(x => x !== libroNombre);
    this.librosSubject.next(null);
  }

  obtenerLibro() {
    return [...this.libros];
  }
}
