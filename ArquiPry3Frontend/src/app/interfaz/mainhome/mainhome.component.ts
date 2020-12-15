import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarComponent } from '../registrar/registrar.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.scss']
})
export class MainhomeComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
    Validators.minLength(8)
  ])

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogRegisterClientes() {
    const dialogRef = this.dialog.open(RegistrarComponent, {
      width: '300px', height: '550px',
    })
  }

}
