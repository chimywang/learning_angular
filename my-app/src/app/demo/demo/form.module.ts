/**
 * Created by chimy on 2017/11/22.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form.component";
import {FormRoutingModule} from "./form-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule
  ],
  declarations: [
    FormComponent,
  ]
})
export class FormModule {
}
