import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
