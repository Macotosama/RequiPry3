import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { TransporteService } from '../../../logicaDeNegocios/transporte/TransporteService';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-crear-tansporte',
  templateUrl: './crear-tansporte.component.html',
  styleUrls: ['./crear-tansporte.component.scss']
})
export class CrearTansporteComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  nombre = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(1),
    Validators.required
  ]);

  apellido1 = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(1),
    Validators.required
  ]);

  apellido2 = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(1),
    Validators.required
  ]);

  placa = new FormControl('', [
    Validators.maxLength(9),
    Validators.minLength(7),
    Validators.required
  ]);

  telefono = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(1),
    Validators.required
  ]);

  constructor(private servicio: TransporteService, private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<CrearTansporteComponent>) { }

  ngOnInit(): void {
  }

  crearTransporte():void {
    if (this.validarTransporte()) {
      this.servicio.crearTransporte(this.crearMaqueta()).subscribe(res => {
        this.openSnackBar('Se creo correctamente');
        this.dialogRef.close();
      });
    } else {
      this.openSnackBar('Ingrese correctamen todos los datos');
    }
  }

  crearMaqueta():any {
    return {
      nombre: this.nombre.value,
      apellido1: this.apellido1.value,
      apellido2: this.apellido2.value,
      placa: this.placa.value,
      telefono: this.telefono.value
    }
  }

  validarTransporte():boolean {
    if (this.nombre.valid && this.apellido1.valid && this.apellido2.valid && this.placa.valid && this.telefono.valid) {
      return true;
    } else {
      return false;
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'cerrar', {
      duration: 2000,
    });
  }

}
