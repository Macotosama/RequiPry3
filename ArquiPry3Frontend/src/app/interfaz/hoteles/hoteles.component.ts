import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { VerinfohotelComponent } from './verinfohotel/verinfohotel.component';
import { EditarInfoHotelComponent } from './editar-info-hotel/editar-info-hotel.component';
import { CrearHotelComponent } from './crear-hotel/crear-hotel.component';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {
  dataSource = ['1','2','3','4','5','6','7','8','9','10'];
  displayedColumns = ['cedula' ,'nombre', 'telefono', 'accion'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogVerInfo(item: number) {
    const dialogRef = this.dialog.open(VerinfohotelComponent, {
      width: '400px', height: '400px', data: item
    })
  }

  dialogEditarInfo(item: number) {
    const dialogRef = this.dialog.open(EditarInfoHotelComponent, {
      width: '400px', height: '600px', data: item
    })
  }

  dialogAgregarHotel() {
    const dialogRef = this.dialog.open(CrearHotelComponent, {
      width: '400px', height: '600px'
    })
  }

}
