import { Books } from './books.model';
import { Subject } from 'rxjs';

export class BooksService {

  private booksLista: Books[] = [
    {
      libroId: 1,
      titulo: 'Algoritmos',
      descripcion: 'Libro Basico',
      autor: 'Vaxi Drez',
      precio: 18,
    },
    {
      libroId: 2,
      titulo: 'Angular',
      descripcion: 'Libro Intermedio',
      autor: 'Heli Arcila',
      precio: 25,
    },
    {
      libroId: 3,
      titulo: 'ASP.NET',
      descripcion: 'Master',
      autor: 'Juan Arevalo',
      precio: 30,
    },
    {
      libroId: 4,
      titulo: 'Java',
      descripcion: 'Agile Libro',
      autor: 'John Ortiz',
      precio: 99,
    },
  ];

  bookSubject = new Subject<Books>(); //observable

  obtenerLibros() {
    return this.booksLista.slice();
  }

  guardarLibro(book: Books){
    this.booksLista.push(book);
    this.bookSubject.next(book);
  }
}
