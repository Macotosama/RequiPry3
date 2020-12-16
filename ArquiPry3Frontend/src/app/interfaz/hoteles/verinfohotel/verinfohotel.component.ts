import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verinfohotel',
  templateUrl: './verinfohotel.component.html',
  styleUrls: ['./verinfohotel.component.scss']
})
export class VerinfohotelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<VerinfohotelComponent>) { }

  ngOnInit(): void {
  }

  cancelar():void {
    this.dialogRef.close()
  }
}
