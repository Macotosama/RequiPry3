import { Component, OnInit, Injectable } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HotelesService } from '../../../logicaDeNegocios/hoteles/servicios/hotelesService';
import { Hoteles, RedesSociales } from '../../../logicaDeNegocios/hoteles/hotelesModel/hoteles';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-crear-hotel',
  templateUrl: './crear-hotel.component.html',
  styleUrls: ['./crear-hotel.component.scss']
})
export class CrearHotelComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  cedula = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10),
    Validators.pattern('[0-9]+')
  ]);

  nombre = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
  ]);

  telefono = new FormControl('', [
    Validators.required,
    Validators.maxLength(8),
    Validators.minLength(8),
    Validators.pattern('[0-9]+')
  ]);

  sitioWep = new FormControl('', [
    Validators.required,
    Validators.maxLength(500),
    Validators.minLength(2)
  ]);

  correoElectronico = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(4),
    Validators.email
  ]);

  facebook = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(4),
  ]);

  gps = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(100),
  ]);

  provincia = new FormControl('', [
    Validators.required,
    Validators.maxLength(8),
    Validators.minLength(5),
  ]);

  canton = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(5),
  ]);

  distrito = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(5),
  ]);

  sennas = new FormControl('', [
    Validators.required,
    Validators.maxLength(300),
    Validators.minLength(5),
  ]);

  lunes = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(5),
  ]);

  martes = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(5),
  ]);

  miercoles = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(5),
  ]);

  jueves = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(5),
  ]);

  viernes = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(5),
  ]);

  sabado = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(5),
  ]);

  domingo = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(5),
  ]);

  urlRedSocia = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(5),
  ]);

  nombreRedSocial = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(5),
  ]);

  idiomas = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(100),
  ]);

  pet: string = 'true';
  ley7600: string = 'true';

  redesSociles: RedesSociales[];
  redesSocialesColumnas = ['nombre', 'url', 'accion'];

  constructor(public dialogRef: MatDialogRef<CrearHotelComponent>, private servicio: HotelesService) {
   }

  ngOnInit(): void {
  }

  crearHOtel():void {

    // this.servicio.crearHotel().subscribe(res => {

    // });
  }

}
