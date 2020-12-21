import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-crear-habitacion',
  templateUrl: './crear-habitacion.component.html',
  styleUrls: ['./crear-habitacion.component.scss']
})
export class CrearHabitacionComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  foods: string[];

  numeroHabitacion = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]+')
  ]);

  categoria = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
  ]);

  precio = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]+')
  ]);

  descripcion = new FormControl('', [
    Validators.required,
    Validators.maxLength(500),
    Validators.minLength(2)
  ]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CrearHabitacionComponent>) {
    this.numeroHabitacion.setValue(data);
    this.precio.setValue(data);
    this.descripcion.setValue(data);
   }

  ngOnInit(): void {
  }

}
