import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { VerinfohotelComponent } from './verinfohotel/verinfohotel.component';
import { EditarInfoHotelComponent } from './editar-info-hotel/editar-info-hotel.component';
import { CrearHotelComponent } from './crear-hotel/crear-hotel.component';
import { Hoteles, RedesSociales, Horario, Direccion, HotelesBasic } from '../../logicaDeNegocios/hoteles/hotelesModel/hoteles';
import { HotelesService } from '../../logicaDeNegocios/hoteles/servicios/hotelesService';
import { MatTableDataSource } from '@angular/material/table';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {
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

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private servicio: HotelesService) { }

  ngOnInit(): void {
  }

  verHoteles():void {
    if (this.hotel.valid) {
      var pex = '';
      if (this.hotel.value != null) {
        pex = this.hotel.value;
      }
      this.servicio.getHotelesFiltro(pex).subscribe(res => {
        this,this.dataSource.data = res;
      })
    }
  }

  dialogVerInfo(item: number) {
    const dialogRef = this.dialog.open(VerinfohotelComponent, {
      width: '1000px', height: '700px', data: item
    })
  }

  dialogEditarInfo(item: number) {
    const dialogRef = this.dialog.open(EditarInfoHotelComponent, {
      width: '1300px', height: '800px', data: item
    })
  }

  dialogAgregarHotel() {
    const dialogRef = this.dialog.open(CrearHotelComponent, {
      width: '1300px', height: '800px'
    })
  }

}
