import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarComponent } from '../registrar/registrar.component';
import { Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  
  @Output()
  ingreso = new EventEmitter<boolean>();

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

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.enviarSeccion(false);
  }

  enviarSeccion(f:boolean) {
    this.ingreso.emit(f);
  }

  dialogRegisterClientes() {
    const dialogRef = this.dialog.open(RegistrarComponent, {
      width: '300px', height: '550px',
    })
  }

}
