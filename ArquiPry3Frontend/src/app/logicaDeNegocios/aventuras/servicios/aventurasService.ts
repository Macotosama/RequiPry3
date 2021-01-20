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
    
    private crear = 'empresas/crear';
    private verFiltro = 'empresas/ver';

    constructor(
        private _http: HttpClient
    ){}

    crearAventura(aventura: Aventura):Observable<any> {
      console.log(aventura);
      return this._http.post(`${this.port}${this.crear}`,aventura, httpOption);
    }

    aventurasFiltro(aventura: string):Observable<any> {
      var dato = {
        filtroNombre: aventura,
      };
      return this._http.post(`${this.port}${this.verFiltro}`,dato,httpOption);
    }

    // verInfoAventura(aventura: number):Observable<any> {
    //   var dato = {

    //   }
    // }

    // getHotelesFiltro(hotel: string):Observable<any> {
    //     var dato = {
    //       filtroNombre: hotel,
    //     };
    //     return this._http.post(`${this.port}${this.getHoteles}`, dato, httpOption);
    //   }
  }