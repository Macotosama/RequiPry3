import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verinfoaventura',
  templateUrl: './verinfoaventura.component.html',
  styleUrls: ['./verinfoaventura.component.scss']
})
export class VerinfoaventuraComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<VerinfoaventuraComponent>) { }

  ngOnInit(): void {
  }

  cancelar():void {
    this.dialogRef.close()
  }

}
