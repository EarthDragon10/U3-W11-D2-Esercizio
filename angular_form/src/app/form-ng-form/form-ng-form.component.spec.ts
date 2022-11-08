import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNgFormComponent } from './form-ng-form.component';

describe('FormNgFormComponent', () => {
  let component: FormNgFormComponent;
  let fixture: ComponentFixture<FormNgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNgFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
