import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verinforeservacion',
  templateUrl: './verinforeservacion.component.html',
  styleUrls: ['./verinforeservacion.component.scss']
})
export class VerinforeservacionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<VerinforeservacionComponent>) { }

  ngOnInit(): void {
  }

  cancelar():void {
    this.dialogRef.close()
  }

}
