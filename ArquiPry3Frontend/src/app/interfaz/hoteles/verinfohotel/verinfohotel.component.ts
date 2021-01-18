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
  redesSociles = new MatTableDataSource<RedesSociales>([]);
  redesSocialesColumnas = ['nombre', 'url'];

  idioma= new MatTableDataSource<string>([]);
  tablaIdioma = ['nombre'];

  infoHotel: Hoteles;

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, public dialogRef: MatDialogRef<VerinfohotelComponent>,  private servicio: HotelesService) { }

  ngOnInit(): void {
    this.datosHotel();
  }

  datosHotel():void {
    console.log(this.data)
    this.servicio.getHotel(this.data).subscribe(res => {
      console.log(res)
      this.infoHotel = res[0];
      this.idioma.data = this.infoHotel.idiomas;
      this.redesSociles.data = this.infoHotel.redesSociales;
    })
  }

  cancelar():void {
    this.dialogRef.close()
  }
}
