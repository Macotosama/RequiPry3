import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  nameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(1)
  ])

  apellid1Control = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(1)
  ])

  apellido2Control = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(1)
  ])

  fechaNacimientoControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(1)
  ])

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  contrasenaControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.minLength(1)
  ])

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
