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

    private crear = 'actividades/crear';
    private ver = 'actividades/ver';

    constructor(
        private _http: HttpClient
    ){}

    crearActividad(dato: any):Observable<any> {
        console.log(dato)
        return this._http.post(`${this.port}${this.crear}`, dato, httpOption);
    }

    verTele(dato: number):Observable<any> {
        var jo = {
            idEmpresaAventura: dato
        }
        return this._http.post(`${this.port}${this.ver}`, jo, httpOption);
    }
  }