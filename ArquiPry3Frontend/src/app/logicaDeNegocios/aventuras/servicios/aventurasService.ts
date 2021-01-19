import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aventura } from '../aventurasModel/aventuras';

const httpOption = {
    headers: new HttpHeaders({
      'Contend-Type': 'aplication/json'
    })
  };

  @Injectable({
    providedIn: 'root'
  })

  export class AventurasService {
    private port = 'http://localhost:9000/';
    
    private crear = 'habitaciones/crear';

    constructor(
        private _http: HttpClient
    ){}

    crearAventura(aventura: Aventura):Observable<any> {
      return this._http.post(`${this.port}${this.crear}`,aventura, httpOption);
    }

    // getHotelesFiltro(hotel: string):Observable<any> {
    //     var dato = {
    //       filtroNombre: hotel,
    //     };
    //     return this._http.post(`${this.port}${this.getHoteles}`, dato, httpOption);
    //   }
  }