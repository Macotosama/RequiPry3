import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.scss']
})
export class MainhomeComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
    Validators.minLength(8)
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
