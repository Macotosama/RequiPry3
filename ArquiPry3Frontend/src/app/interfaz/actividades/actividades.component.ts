import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Hoteles, RedesSociales, Horario, Direccion, HotelesBasic } from '../../logicaDeNegocios/hoteles/hotelesModel/hoteles';
import { HotelesService } from '../../logicaDeNegocios/hoteles/servicios/hotelesService';
import { MatTableDataSource } from '@angular/material/table';
import { HabitacionService } from '../../logicaDeNegocios/habitaciones/servicios/habitacionService';
import { AventurasService } from '../../logicaDeNegocios/aventuras/servicios/aventurasService';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { ActividadesService } from '../../logicaDeNegocios/actividades/actividadesService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  dataSource = new MatTableDataSource<HotelesBasic>([]);
  displayedColumns = ['cedula' ,'nombre', 'telefono', 'accion'];

  dataSource2 = new MatTableDataSource<HotelesBasic>([]);
  displayedColumns2 = ['cedula' ,'nombre', 'telefono'];

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


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  hoteles: string[];
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private _snackBar: MatSnackBar,
    private servicio: ActividadesService, private servicios2: AventurasService) { }

  ngOnInit(): void {
  }

  dialogVerInfo(item: number) {
    // const dialogRef = this.dialog.open(VerinfohabitacionComponent , {
    //   width: '400px', height: '250px', data: item
    // })
  }

  dialogEditarInfo(item: number) {
    // const dialogRef = this.dialog.open(EditarInfoHabitacionComponent, {
    //   width: '700px', height: '600px', data: item
    // })
  }

  dialogAgregarHotel() {
    const dialogRef = this.dialog.open(CrearActividadComponent, {
      width: '700px', height: '600px'
    })
  }

  verHoteles():void {
    if (this.hotel2.valid) {
      var pex = '';
      if (this.hotel2.value != null) {
        pex = this.hotel2.value;
      }
      this.servicios2.aventurasFiltro(pex).subscribe(res => {
        this.dataSource2.data = res;
      })
    }
  }

  
  clickHotel(nombre: string, id: number):void {
    this.idHotel = id;
    this.servicio.verTele(id).subscribe(res => {
      this.dataSource.data = res
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'cerrar', {
      duration: 4000,
    });
  }
}
