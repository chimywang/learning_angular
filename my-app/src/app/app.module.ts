import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DisplayDataComponent} from "./1_display_data/display-data.component";
import {ComponentTemplateComponent} from "./2_component_template/component_template.component";

@NgModule({
  declarations: [
    AppComponent,
    ComponentTemplateComponent,
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
