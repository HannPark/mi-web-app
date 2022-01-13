import { Injectable } from '@angular/core';
import { Autor } from './autor.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutoresService {
  baseUrl = environment.baseUrl;
  private autoresLista: Autor[] = [];
  private autoresSubject = new Subject<Autor[]>();

  constructor(private http: HttpClient) {}

  obtenerAutores() {
    this.http.get<Autor[]>(this.baseUrl + 'api/libreriaAutor')
    .subscribe((data) => {
      this.autoresLista= data;
      this.autoresSubject.next([...this.autoresLista]);
      console.log(this.autoresSubject);

    })
  }

  obtenerActualListener(){
    return this.autoresSubject.asObservable();
  }
}
