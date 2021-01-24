import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from '../habitacionesModel/habitacion';

const httpOption = {
    headers: new HttpHeaders({
      'Contend-Type': 'aplication/json'
    })
  };

  @Injectable({
    providedIn: 'root'
  })

  export class HabitacionService {
    private port = 'http://localhost:9000/';
    private crearHabi = 'habitaciones/crear';
    private verHabi = 'habitaciones/ver';
    private actiHabi = 'habitaciones/actualizar';

    constructor(
        private _http: HttpClient
    ){}

    crearHabitacion(dato: Habitacion):Observable<any> {
        return this._http.post(`${this.port}${this.crearHabi}`,dato, httpOption);
    }

    verHabitaciones(dato: number):Observable<any> {
      var xd = {
        idHotel: dato,
      }
      return this._http.post(`${this.port}${this.verHabi}`,xd, httpOption);
    }

    actualizar(data: any):Observable<any> {
      return this._http.put(`${this.port}${this.actiHabi}`, data, httpOption);
    }
  }