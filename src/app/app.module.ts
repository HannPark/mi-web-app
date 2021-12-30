import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio.component';
import { LibroComponent } from './libro/libro.component';
import { LibrosComponent } from './libros/libros.component';
import { LibrosService } from './services/libros.service';
import { UsuarioComponent } from './usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
    RegistrarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
