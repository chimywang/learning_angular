import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DisplayDataComponent} from "./1_display_data/display-data.component";
import {ComponentTemplateComponent} from "./2_component_template/component_template.component";
import {LifecycleModule} from "./3_lifecycle/lifecycle.module";
import {LifeCycleComponet} from "./3_lifecycle/lifecycle.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ComponentTemplateComponent,
    DisplayDataComponent,
    // LifeCycleComponet
  ],
  imports: [
    LifecycleModule,
    // FormsModule,
    BrowserModule // *ngFor   *ngIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
