import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { TransporteService } from '../../../logicaDeNegocios/transporte/TransporteService';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-actualizar-transporte',
  templateUrl: './actualizar-transporte.component.html',
  styleUrls: ['./actualizar-transporte.component.scss']
})
export class ActualizarTransporteComponent implements OnInit {
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

  constructor(private servicio: TransporteService, private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<ActualizarTransporteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.nombre.setValue(data.nombre);
    this.apellido1.setValue(data.apellido1);
    this.apellido2.setValue(data.apellido2);
    this.placa.setValue(data.placa);
    this.telefono.setValue(data.telefono);
   }

  ngOnInit(): void {
  }

  crearTransporte():void {
    if (this.validarTransporte()) {
      this.servicio.editar(this.crearMaqueta()).subscribe(res => {
        this.openSnackBar('Se actualizo correctamente');
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
      telefono: this.telefono.value,
      idConductor: this.data.idConductor
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
