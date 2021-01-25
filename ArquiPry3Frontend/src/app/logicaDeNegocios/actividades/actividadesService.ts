import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption = {
    headers: new HttpHeaders({
      'Contend-Type': 'aplication/json'
    })
  };

  @Injectable({
    providedIn: 'root'
  })

  export class ActividadesService {
    private port = 'http://localhost:9000/';

    constructor(
        private _http: HttpClient
    ){}

    crearActividad(dato: any):Observable<any> {
        return this._http.post(`${this.port}`)
    }
  }