import { Component, OnInit } from '@angular/core';
import { SeguridadService } from './seguridad/seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  abrirMenu = false;
  constructor(private seguridadService: SeguridadService) {}

  ngOnInit(): void {
      this.seguridadService.cargarUsuario();
  }

}
