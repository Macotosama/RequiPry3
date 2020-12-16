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
  selector: 'app-editar-info-hotel',
  templateUrl: './editar-info-hotel.component.html',
  styleUrls: ['./editar-info-hotel.component.scss']
})
export class EditarInfoHotelComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  cedula = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10),
    Validators.pattern('/^[+]?([0-9]$/')
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
    Validators.pattern('/^[+]?([0-9]$/')
  ]);

  sitioWep = new FormControl('', [
    Validators.required,
    Validators.maxLength(500),
    Validators.minLength(2)
  ]);

  correoElectronico = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(4),
    Validators.email
  ]);

  facebook = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(4),
  ]);

  pet: boolean = false;
  ley7600: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
