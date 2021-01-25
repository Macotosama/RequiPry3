import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Hoteles, RedesSociales, Horario, Direccion, HotelesBasic } from '../../logicaDeNegocios/hoteles/hotelesModel/hoteles';
import { HotelesService } from '../../logicaDeNegocios/hoteles/servicios/hotelesService';
import { MatTableDataSource } from '@angular/material/table';
import { CrearTansporteComponent } from './crear-tansporte/crear-tansporte.component';
import { TransporteService } from '../../logicaDeNegocios/transporte/TransporteService';
import { InfoTransporteComponent } from './info-transporte/info-transporte.component';
import { ActualizarTransporteComponent } from './actualizar-transporte/actualizar-transporte.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.scss']
})
export class TransporteComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  hotel = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(0),
  ]);

  dataSource = new MatTableDataSource<HotelesBasic>([]);
  displayedColumns = ['cedula' ,'nombre', 'telefono', 'accion'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private servicio: TransporteService) { }

  ngOnInit(): void {
  }

  verHoteles():void {
    if (this.hotel.valid) {
      var pex = '';
      if (this.hotel.value != null) {
        pex = this.hotel.value;
      }
      this.servicio.VerTransporte(pex).subscribe(res => {
        this.dataSource.data = res;
        console.log(res)
      })
    }
  }

  dialogVerInfo(item: any) {
    const dialogRef = this.dialog.open(InfoTransporteComponent, {
      width: '1000px', height: '250px', data: item
    })
  }

  dialogEditarInfo(item: any) {
    const dialogRef = this.dialog.open(ActualizarTransporteComponent, {
      width: '1300px', height: '300px', data: item
    })
  }

  dialogAgregarHotel() {
    const dialogRef = this.dialog.open(CrearTansporteComponent, {
      width: '1300px', height: '300px'
    })
  }
}
