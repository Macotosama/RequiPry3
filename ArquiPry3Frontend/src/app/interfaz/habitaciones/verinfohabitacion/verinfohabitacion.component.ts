import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verinfohabitacion',
  templateUrl: './verinfohabitacion.component.html',
  styleUrls: ['./verinfohabitacion.component.scss']
})
export class VerinfohabitacionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<VerinfohabitacionComponent>) { }

  ngOnInit(): void {
  }

  cancelar():void {
    this.dialogRef.close()
  }


}
