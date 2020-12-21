import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss']
})
export class HabitacionesComponent implements OnInit {
  dataSource = ['1','2','3','4','5','6','7','8','9','10'];
  displayedColumns = ['cedula' ,'nombre', 'telefono', 'accion'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  hoteles: string[];
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogVerInfo(item: number) {
    // const dialogRef = this.dialog.open(VerinfohotelComponent, {
    //   width: '400px', height: '400px', data: item
    // })
  }

  dialogEditarInfo(item: number) {
    // const dialogRef = this.dialog.open(EditarInfoHotelComponent, {
    //   width: '400px', height: '600px', data: item
    // })
  }

  dialogAgregarHotel() {
    // const dialogRef = this.dialog.open(CrearHotelComponent, {
    //   width: '400px', height: '600px'
    // })
  }
}