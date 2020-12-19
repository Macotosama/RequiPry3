import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-crear-aventura',
  templateUrl: './crear-aventura.component.html',
  styleUrls: ['./crear-aventura.component.scss']
})
export class CrearAventuraComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  cedula = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10),
    Validators.pattern('[0-9]+')
  ]);

  nombre = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
  ]);

  telefono = new FormControl('', [
    Validators.required,
    Validators.maxLength(8),
    Validators.minLength(8),
    Validators.pattern('[0-9]+')
  ]);

  correoElectronico = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(4),
    Validators.email
  ]);

  constructor(public dialogRef: MatDialogRef<CrearAventuraComponent>) {
   }

  ngOnInit(): void {
  }

}
