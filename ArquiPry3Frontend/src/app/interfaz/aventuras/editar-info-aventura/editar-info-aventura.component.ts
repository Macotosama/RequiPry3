import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AventurasService } from '../../../logicaDeNegocios/aventuras/servicios/aventurasService';
import { Aventura } from '../../../logicaDeNegocios/aventuras/aventurasModel/aventuras';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-editar-info-aventura',
  templateUrl: './editar-info-aventura.component.html',
  styleUrls: ['./editar-info-aventura.component.scss']
})
export class EditarInfoAventuraComponent implements OnInit {
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditarInfoAventuraComponent>, private servicio: AventurasService) {
    console.log(data)
    this.cedula.setValue(data.cedulaJuridica);
    this.nombre.setValue(data.nombre);
    this.telefono.setValue(data.contacto);
    this.correoElectronico.setValue(data.correoElectronico);
    this.gps.setValue(data.gps);
    this.provincia.setValue(data.provincia);
    this.canton.setValue(data.canton);
    this.distrito.setValue(data.distrito);
    this.sennas.setValue(this.data.sennasExactas);
   }

  ngOnInit(): void {
  }

  crearAventura() {
    if (this.validarAventuras()) {
      var XD:Aventura = {
        idEmpresaAventura: 0,
        cedulaJuridica: this.cedula.value,
        nombre: this.nombre.value,
        contacto: this.telefono.value,
        correoElectronico: this.correoElectronico.value,
          activo: 0,
          direccion: {
            gps: this.gps.value,
            provincia: this.provincia.value,
            canton: this.canton.value,
            distrito: this.distrito.value,
            senasExactas: this.sennas.value
          }
      }
      this.servicio.crearAventura(XD).subscribe(res => {
        this.dialogRef.close();
      });
    }
  }

  validarAventuras():boolean {
    if (this.cedula.valid && this.nombre.valid && this.correoElectronico.valid && this.telefono.valid && this.gps.valid
      && this.provincia.valid && this.canton.valid && this.distrito.valid && this.sennas.valid) {
        return true;
    } else {
      return false;
    }
  }

}
