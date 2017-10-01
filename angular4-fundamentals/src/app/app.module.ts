import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SimpleForm1Component } from './simple-form1/simple-form1.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    SimpleForm1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
