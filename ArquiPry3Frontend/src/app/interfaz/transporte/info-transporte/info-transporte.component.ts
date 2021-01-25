import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-transporte',
  templateUrl: './info-transporte.component.html',
  styleUrls: ['./info-transporte.component.scss']
})
export class InfoTransporteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<InfoTransporteComponent>) { }

  ngOnInit(): void {
  }

  cancelar():void {
    this.dialogRef.close()
  }


}
