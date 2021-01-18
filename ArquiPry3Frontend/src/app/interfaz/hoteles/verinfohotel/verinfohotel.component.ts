import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hoteles, RedesSociales, Horario, Direccion } from '../../../logicaDeNegocios/hoteles/hotelesModel/hoteles';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-verinfohotel',
  templateUrl: './verinfohotel.component.html',
  styleUrls: ['./verinfohotel.component.scss']
})
export class VerinfohotelComponent implements OnInit {
  redesSociles = new MatTableDataSource<RedesSociales>([]);
  redesSocialesColumnas = ['nombre', 'url'];

  idioma= new MatTableDataSource<string>([]);
  tablaIdioma = ['nombre'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<VerinfohotelComponent>) { }

  ngOnInit(): void {
  }

  cancelar():void {
    this.dialogRef.close()
  }
}
