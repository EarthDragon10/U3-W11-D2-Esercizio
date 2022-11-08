import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormNgModelComponent } from './form-ng-model/form-ng-model.component';
import { FormNgFormComponent } from './form-ng-form/form-ng-form.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [AppComponent, FormNgModelComponent, FormNgFormComponent, FormReactiveComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
