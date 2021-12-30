import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: string[] = [];
  constructor(private librosService: LibrosService) {}
  private libroSuscripcion: Subscription;

  eliminarLibro(libro: string) {}

  guardarLibro(f: any) {
    if (f.valid) {
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit() {
    this.libros = this.librosService.obtenerLibro();

    this.libroSuscripcion = this.librosService.librosSubject.subscribe(() => {
      //te suscribes al Subject para que actualice datos
      this.libros = this.librosService.obtenerLibro();
    });
  }

  ngOnDestroy() {
    this.libroSuscripcion.unsubscribe();
  }
}
