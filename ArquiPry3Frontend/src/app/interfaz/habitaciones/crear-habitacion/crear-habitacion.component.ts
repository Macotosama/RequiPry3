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

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-crear-habitacion',
  templateUrl: './crear-habitacion.component.html',
  styleUrls: ['./crear-habitacion.component.scss']
})
export class CrearHabitacionComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  foods: string[];

  numeroHabitacion = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]+')
  ]);

  categoria = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    // Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
  ]);

  precio = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]+')
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

  hotel2 = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(0),
  ]);

  dataSource = new MatTableDataSource<HotelesBasic>([]);
  displayedColumns = ['cedula' ,'nombre', 'telefono'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CrearHabitacionComponent>, private servicios: HabitacionService,
  private servicios2: HotelesService, private _snackBar: MatSnackBar) {
    this.numeroHabitacion.setValue(data);
    this.precio.setValue(data);
    this.descripcion.setValue(data);
   };

  ngOnInit(): void {
  }

  crearHabitacion():void {
    if (this.validDatos()) {
      this.servicios.crearHabitacion(this.crearMaqueta()).subscribe(res => {
        this.openSnackBar('Se creo correctamente la habitación');
        this.dialogRef.close();
      })
    } else {
      this.openSnackBar('Ingrese todos los datos correctamente')
    }
  }

  crearMaqueta():Habitacion {
    return {
      numeroHabitacion: this.numeroHabitacion.value,
      dsecripcion: this.descripcion.value,
      precio: this.precio.value,
      idHotel: this.idHotel
    }
  }

  validDatos():boolean {
    if(this.numeroHabitacion.valid && this.categoria.valid && this.precio.valid && this.descripcion.valid && this.hotel.valid) {
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
      this.servicios2.getHotelesFiltro(pex).subscribe(res => {
        this,this.dataSource.data = res;
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
