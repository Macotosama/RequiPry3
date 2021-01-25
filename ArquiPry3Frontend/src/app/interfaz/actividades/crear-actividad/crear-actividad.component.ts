import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HabitacionService } from '../../../logicaDeNegocios/habitaciones/servicios/habitacionService';
import { Habitacion } from '../../../logicaDeNegocios/habitaciones/habitacionesModel/habitacion';
import { Hoteles, RedesSociales, Horario, Direccion, HotelesBasic } from '../../../logicaDeNegocios/hoteles/hotelesModel/hoteles';
import { HotelesService } from '../../../logicaDeNegocios/hoteles/servicios/hotelesService';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AventurasService } from '../../../logicaDeNegocios/aventuras/servicios/aventurasService';
import { ActividadesService } from '../../../logicaDeNegocios/actividades/actividadesService'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.scss']
})
export class CrearActividadComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  foods: string[];

  riesgo = new FormControl('', [
    Validators.required,
    Validators.pattern('[1-5]+'),
    Validators.maxLength(1),
    Validators.minLength(1)
  ]);

  edadMin = new FormControl('', [
    Validators.required,
    Validators.maxLength(2),
    // Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
  ]);

  edadMax = new FormControl('', [
    Validators.required,
    Validators.maxLength(2),
  ]);

  descripcion = new FormControl('', [
    Validators.required,
    Validators.maxLength(500),
    Validators.minLength(2)
  ]);

  idHotel: number;

  hotel = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(1),
    Validators.required,
  ]);

  precio = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(1),
    Validators.required,
  ]);

  nombre = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(1),
    Validators.required,
  ]);


  hotel2 = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(0),
  ]);

  pet: string = 'true';
  ley7600: string = 'true';

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['cedula' ,'nombre', 'telefono'];

  constructor( public dialogRef: MatDialogRef<CrearActividadComponent>, private servicios: ActividadesService,
  private servicios2: AventurasService, private _snackBar: MatSnackBar) {
   };

  ngOnInit(): void {
  }

  crearHabitacion():void {
    if (this.validDatos()) {
      this.servicios.crearActividad(this.crearMaqueta()).subscribe(res => {
        this.openSnackBar('Se creo correctamente la habitación');
        this.dialogRef.close();
      })
    } else {
      this.openSnackBar('Ingrese todos los datos correctamente')
    }
  }

  crearMaqueta():any {
    return {
      nombre: this.nombre.value,
      descripcion: this.descripcion.value,
      precio: this.precio.value,
      idEmpresaAventura: this.idHotel,
      riesgo: this.riesgo.value,
      edadMin: this.edadMin.value,
      edadMax: this.edadMax.value,
      ley7600: this.ley7600
    }
  }

  validDatos():boolean {
    if(this.riesgo.valid && this.edadMin.valid && this.precio.valid && this.edadMax.valid && this.hotel.valid && this.descripcion.valid) {
      return true;
    } else {
      return false;
    }
  }

  verHoteles():void {
    if (this.hotel2.valid) {
      var pex = '';
      if (this.hotel2.value != null) {
        pex = this.hotel2.value;
      }
      this.servicios2.aventurasFiltro(pex).subscribe(res => {
        this.dataSource.data = res;
      })
    }
  }

  clickHotel(nombre: string, id: number):void {
    this.hotel.setValue(nombre);
    this.idHotel = id;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'cerrar', {
      duration: 4000,
    });
  }

}
