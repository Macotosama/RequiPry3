import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { VerinfoaventuraComponent } from './verinfoaventura/verinfoaventura.component';
import { EditarInfoAventuraComponent } from './editar-info-aventura/editar-info-aventura.component';
import { CrearAventuraComponent } from './crear-aventura/crear-aventura.component';

@Component({
  selector: 'app-aventuras',
  templateUrl: './aventuras.component.html',
  styleUrls: ['./aventuras.component.scss']
})
export class AventurasComponent implements OnInit {
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
    const dialogRef = this.dialog.open(VerinfoaventuraComponent, {
      width: '400px', height: '250px', data: item
    })
  }

  dialogEditarInfo(item: number) {
    const dialogRef = this.dialog.open(EditarInfoAventuraComponent, {
      width: '400px', height: '600px', data: item
    })
  }

  dialogAgregar() {
    const dialogRef = this.dialog.open(CrearAventuraComponent, {
      width: '1300px', height: '400px'
    })
  }

}
