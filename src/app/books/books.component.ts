import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { bookNuevoComponent } from './book-nuevo.component';
import { Books } from './books.model';
import { BooksService } from './books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {
  bookData: Books[] = [];
  desplegarColumnas = ['titulo', 'descripcion', 'autor', 'precio'];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort) ordenamiento: MatSort; //Ordenamiento
  @ViewChild(MatPaginator) paginacion: MatPaginator; //Paginación

  private bookSubscription: Subscription;

  constructor(private booksService: BooksService, private dialog: MatDialog) {}

  hacerFiltro(filtro: string) {
    this.dataSource.filter = filtro;
  }

  abrirDialog() {
    this.dialog.open(bookNuevoComponent, {
      width: '350px'
    });
  }

  ngOnInit(): void {
    this.dataSource.data = this.booksService.obtenerLibros();
    //Subscripcion a Agregar libros
    this.bookSubscription= this.booksService.bookSubject.subscribe(() => {
      this.dataSource.data = this.booksService.obtenerLibros();
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.paginacion;
  }

  ngOnDestroy(){
      this.bookSubscription.unsubscribe();
  }
}
