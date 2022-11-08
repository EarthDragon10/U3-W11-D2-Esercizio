import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SuperHero } from '../classes/super-hero';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss'],
})
export class FormReactiveComponent implements OnInit {
  superHero: SuperHero = new SuperHero();
  controlValidation: boolean | null = false;

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      // name: new FormControl(null, [Validators.required, this])
    });
  }

  addUserHero() {}
}
