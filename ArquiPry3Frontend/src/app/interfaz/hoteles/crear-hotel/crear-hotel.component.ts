import { Component, OnInit, Injectable } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HotelesService } from '../../../logicaDeNegocios/hoteles/servicios/hotelesService';
import { Hoteles, RedesSociales, Horario, Direccion } from '../../../logicaDeNegocios/hoteles/hotelesModel/hoteles';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';

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
    // Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
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

  gps = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(5),
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

  imagen = new FormControl('', [
    Validators.required,
    Validators.maxLength(300),
    Validators.minLength(5),
  ]);

  lunes = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(3),
  ]);

  martes = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(5),
  ]);

  miercoles = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(5),
  ]);

  jueves = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(5),
  ]);

  viernes = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(5),
  ]);

  sabado = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(5),
  ]);

  domingo = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
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
    Validators.maxLength(15),
    Validators.minLength(2),
  ]);

  pet: string = 'true';
  ley7600: string = 'true';

  redesSociles = new MatTableDataSource<RedesSociales>([]);
  redesSocialesColumnas = ['nombre', 'url', 'accion'];

  idioma= new MatTableDataSource<string>([]);
  tablaIdioma = ['nombre', 'accion'];

  constructor(public dialogRef: MatDialogRef<CrearHotelComponent>, private servicio: HotelesService, private _snackBar: MatSnackBar) {
   }

  ngOnInit(): void {
  }

  agregarIdioma():void {
    if(this.idiomas.valid) {
      if (this.validarNuevoIdioma) {
        this.idioma.data.push(this.idiomas.value);
        this.idioma.data = this.idioma.data;
        this.idiomas.setValue('');
        this.idiomas.reset();
      } else {
        this.openSnackBar('Ya existe el idioma ingresado');
      }
    }else {
      this.openSnackBar('Ingrese el nombre del idioma');
    }
  }

  eliminarIdioma(nombre: string):void {
    var redes = this.idioma.data;
    for (let i = 0; i < redes.length; i++) {
      if (nombre == redes[i]) {
        redes.splice(i,1);
        this.idioma.data = redes;
      }
    }
  }

  validarNuevoIdioma(idioma: string):boolean {
    var idio = this.idioma.data;
    var res = true;
    idio.forEach(item => {
      if(item == idioma) {
        res = false;
      }
    })
    return res
  }


  agregarRedSocial():void {
    if(this.nombreRedSocial.valid && this.urlRedSocia.valid) {
      if (this.validarNuevaRedSocial()) {
        var red: RedesSociales = {
          tipo: this.nombreRedSocial.value,
          url: this.urlRedSocia.value
        }
        this.nombreRedSocial.setValue('');
        this.nombreRedSocial.reset();
        this.urlRedSocia.setValue('');
        this.urlRedSocia.reset();
        this.redesSociles.data.push(red);
        this.redesSociles.data = this.redesSociles.data;
      } else {
        this.openSnackBar('Ya existe esa red social');
      }
    } else {
      this.openSnackBar('Ingrese los datos de la red social');
    }
  }

  eleimnarRedSocial(nombre: string):void {
    var redes:RedesSociales[] = this.redesSociles.data;
    for (let i = 0; i < redes.length; i++) {
      if (nombre == redes[i].tipo) {
        redes.splice(i,1);
        this.redesSociles.data = redes;
      }
    }
  }

  validarNuevaRedSocial():boolean {
    var res = true;
    var redes:RedesSociales[] = this.redesSociles.data;
    redes.forEach(item => {
      if (item.tipo == this.nombreRedSocial.value) {
        res = false;
      }}
    );
    return res;
  }

  crearHOtel():void {
    if(this.validarHotel()) {
      this.servicio.crearHotel(this.maquetaHotel()).subscribe(res => {
      })
      this.dialogRef.close();
    } else {
      this.openSnackBar('Ingrese todos los datos correctamente')
    }

    // this.servicio.crearHotel().subscribe(res => {

    // });
  }

  maquetaHotel():Hoteles {
    var x;
    var d;
    if (this.pet) {
      x = 1;
    } else {
      x = 0
    }

    if (this.ley7600) {
      d = 1;
    } else {
      d = 0;
    }

    return {
      idHotel: 0,
      cedulaJuridica: this.cedula.value,
      nombre: this.nombre.value,
      telefono: this.telefono.value,
      sitioWeb: this.sitioWep.value,
      correoElectronico: this.correoElectronico.value,
      petFriendly: x,
      ley7600: d,
      multimedia: this.imagen.value,
      idiomas: this.idioma.data,
      horario: {
        lunes: this.lunes.value,
        martes: this.martes.value,
        miercoles: this.miercoles.value,
        jueves: this.jueves.value,
        viernes: this.viernes.value,
        sabado: this.sabado.value,
        domingo: this.domingo.value
      },
      direccion: {
        gps: this.gps.value,
        provincia: this.provincia.value,
        canton: this.canton.value,
        distrito: this.distrito.value,
        senasExactas: this.sennas.value
      },
      redesSociales: this.redesSociles.data
    }
  }

  validarHotel():boolean {
    if(this.cedula.valid && this.nombre.valid && this.telefono.valid && this.sitioWep.valid && this.correoElectronico.valid && this.provincia.valid &&
      this.gps.valid && this.canton.valid && this.distrito.valid && this.sennas.valid && this.lunes.valid && this.martes.valid && this.miercoles.valid &&
      this.jueves.valid && this.viernes.valid && this.sabado.valid && this.domingo.valid) {
        return true;
      } else {
        return false;
      }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'cerrar', {
      duration: 4000,
    });
  }


}
