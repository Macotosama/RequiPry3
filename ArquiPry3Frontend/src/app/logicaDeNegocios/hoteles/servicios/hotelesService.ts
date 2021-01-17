import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hoteles, RedesSociales } from '../hotelesModel/hoteles';

const httpOption = {
    headers: new HttpHeaders({
      'Contend-Type': 'aplication/json'
    })
  };

  @Injectable({
    providedIn: 'root'
  })

  export class HotelesService {
    private port = 'http://localhost:9000/';

    private getHoteles = 'hoteles/ver';
    private newHotel = 'hoteles/crear';

    constructor(
        private _http: HttpClient
    ){}

    getFacturasLocales(hotel: Hoteles):Observable<any> {
        return this._http.post(`${this.port}${this.getHoteles}`, hotel, httpOption);
    }

    crearHotel(hotel: Hoteles):Observable<any> {
        return this._http.post(`${this.port}${this.newHotel}`, hotel, httpOption);
    }

//Funciones XD
    refreshIdiomas(redes: RedesSociales[]):RedesSociales[]{
      return redes;
    }
  }