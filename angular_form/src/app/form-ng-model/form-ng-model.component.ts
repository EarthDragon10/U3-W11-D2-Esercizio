import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../classes/super-hero';

@Component({
  selector: 'app-form-ng-model',
  templateUrl: './form-ng-model.component.html',
  styleUrls: ['./form-ng-model.component.scss'],
})
export class FormNgModelComponent implements OnInit {
  superHero: SuperHero = new SuperHero();

  constructor() {}

  ngOnInit(): void {}

  addSuperHero(): void {
    console.log(this.superHero);
  }
}
