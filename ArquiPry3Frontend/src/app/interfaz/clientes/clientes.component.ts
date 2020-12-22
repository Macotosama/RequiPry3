import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  dataSource = ['1','2','3','4','5','6','7','8','9','10'];
  displayedColumns = ['cedula' ,'nombre', 'telefono', 'salida', 'total', 'accion'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogVerInfo(item: number) {
    // const dialogRef = this.dialog.open(VerinforeservacionComponent, {
    //   width: '400px', height: '400px', data: item
    // })
  }
}
