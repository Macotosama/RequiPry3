import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { VerinfoaventuraComponent } from './verinfoaventura/verinfoaventura.component';
import { EditarInfoAventuraComponent } from './editar-info-aventura/editar-info-aventura.component';
import { CrearAventuraComponent } from './crear-aventura/crear-aventura.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AventurasService } from '../../logicaDeNegocios/aventuras/servicios/aventurasService';
import { Aventura } from '../../logicaDeNegocios/aventuras/aventurasModel/aventuras';
import { MatTableDataSource } from '@angular/material/table';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-aventuras',
  templateUrl: './aventuras.component.html',
  styleUrls: ['./aventuras.component.scss']
})
export class AventurasComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['cedula' ,'nombre', 'telefono', 'accion'];
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  matcher = new MyErrorStateMatcher();

  hotel = new FormControl('', [
    Validators.maxLength(30),
    Validators.minLength(0),
  ]);

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private servicio: AventurasService) { }

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

  verAventuras():void {
    if (this.hotel.valid) {
      var pex = '';
      if (this.hotel.value != null) {
        pex = this.hotel.value;
      }
      this.servicio.aventurasFiltro(pex).subscribe(res => {
        this.dataSource.data = res;
      })
    }
  }

}
