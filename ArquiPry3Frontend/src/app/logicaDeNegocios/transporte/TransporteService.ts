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

  export class TransporteService {
    private port = 'http://localhost:9000/';

    private crear = 'conductores/crear';
    private verTele = 'conductores/ver';
    private actualizar = 'conductores/actualizar';

    constructor(
        private _http: HttpClient
    ){}

    crearTransporte(dato: any):Observable<any> {
        return this._http.post(`${this.port}${this.crear}`,dato,httpOption);
    }

    VerTransporte(nombre: string):Observable<any> {
        var xd = {
            filtroNombre: nombre
        }
        console.log('paso por aqui', xd)
        return this._http.post(`${this.port}${this.verTele}`,xd,httpOption);
    }

    editar(dato: any):Observable<any> {
      return this._http.put(`${this.port}${this.actualizar}`, dato, httpOption);
    }
  }