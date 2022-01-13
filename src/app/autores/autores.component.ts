import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Autor } from './autor.model';
import { AutoresService } from './autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  desplegarColumnas = ['nombre', 'apellido', 'gradoAcademico'];
  dataSource = new MatTableDataSource<Autor>();

  constructor(private autoresService: AutoresService) { }

  ngOnInit(): void {
    this.dataSource.data = this.autoresService.obtenerAutores();
  }

}
