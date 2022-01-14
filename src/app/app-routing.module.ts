import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { BooksComponent } from './books/books.component';
import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { seguridadRouter } from './seguridad/seguridad.router';

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [seguridadRouter] },
  { path: 'libros', component: LibrosComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent, canActivate: [seguridadRouter]},
  { path: 'autores', component: AutoresComponent, canActivate: [seguridadRouter] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [seguridadRouter],
})
export class AppRoutingModule {}
