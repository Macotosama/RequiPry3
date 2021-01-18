import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hoteles, RedesSociales, HotelesBasic } from '../hotelesModel/hoteles';

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
    private getHotelU = 'hoteles/get';

    constructor(
        private _http: HttpClient
    ){}

    getHotelesFiltro(hotel: string):Observable<any> {
      var dato = {
        filtroNombre: hotel,
      };
      return this._http.post(`${this.port}${this.getHoteles}`, dato, httpOption);
    }

    getHotel(hotelId: number):Observable<any> {
      var dato = {
        idHotel: hotelId,
      };
      return this._http.post(`${this.port}${this.getHotelU}`, dato, httpOption);
    }
      

    crearHotel(hotel: Hoteles):Observable<any> {
        return this._http.post(`${this.port}${this.newHotel}`, hotel, httpOption);
    }
  }