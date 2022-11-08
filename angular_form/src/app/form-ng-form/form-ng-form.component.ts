import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuperHero } from '../classes/super-hero';

@Component({
  selector: 'app-form-ng-form',
  templateUrl: './form-ng-form.component.html',
  styleUrls: ['./form-ng-form.component.scss'],
})
export class FormNgFormComponent implements OnInit {
  superHero: SuperHero = new SuperHero();
  controlValidation: boolean | null = false;

  @ViewChild('formHero') mySuperHeros!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  addUserHero() {
    // this.controlValidation = this.mySuperHeros.valid;
    console.log(this.mySuperHeros);
    console.log(this.mySuperHeros.value);
    console.log(this.mySuperHeros.valid);
  }
}
