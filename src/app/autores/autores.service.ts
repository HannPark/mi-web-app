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
<<<<<<< HEAD
=======
      console.log(this.autoresSubject);

>>>>>>> cfbd2fac56b3a4b55d74a799319487882908c3ad
    })
  }

  obtenerActualListener(){
    return this.autoresSubject.asObservable();
  }
}
