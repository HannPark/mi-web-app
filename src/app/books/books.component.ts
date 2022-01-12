import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Books } from './books.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit {
  bookData: Books[]= [];
  desplegarColumnas = ["titulo", "descripcion", "autor", "precio"];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort) ordenamiento: MatSort; //Ordenamiento

  constructor(private booksService: BooksService) { }

  hacerFiltro(filtro: string){
    this.dataSource.filter = filtro;
  }

  ngOnInit(): void {
    this.dataSource.data = this.booksService.obtenerLibros();
  }

  ngAfterViewInit(){
      this.dataSource.sort = this.ordenamiento;
  }

}
