import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DisplayDataComponent} from "./1_display_data/display-data.component";

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule // *ngFor   *ngIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
