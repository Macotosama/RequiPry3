import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hoteles, RedesSociales, Horario, Direccion, HotelesBasic } from '../../../logicaDeNegocios/hoteles/hotelesModel/hoteles';
import { MatTableDataSource } from '@angular/material/table';
import { HotelesService } from '../../../logicaDeNegocios/hoteles/servicios/hotelesService';

@Component({
  selector: 'app-verinfohotel',
  templateUrl: './verinfohotel.component.html',
  styleUrls: ['./verinfohotel.component.scss']
})
export class VerinfohotelComponent implements OnInit {
  redesSociles = new MatTableDataSource<any>([]);
  redesSocialesColumnas = ['nombre', 'url'];

  idioma= new MatTableDataSource<any>([]);
  tablaIdioma = ['nombre'];

  infoHotel: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, public dialogRef: MatDialogRef<VerinfohotelComponent>,  private servicio: HotelesService) { }

  ngOnInit(): void {
    this.datosHotel();
    this.datosHotel2();
    this.datosHotel3();
  }

  datosHotel():void {
    this.servicio.getHotel(this.data).subscribe(res => {
      this.infoHotel = res[0];
    })
  }

  datosHotel2():void {
    this.servicio.getIdioma(this.data).subscribe(res2 => {
      this.idioma.data = res2;
    })
  }

  datosHotel3():void {
    this.servicio.getRede(this.data).subscribe(res3 => {
      this.redesSociles.data = res3;
    })
  }

  cancelar():void {
    this.dialogRef.close()
  }
}
