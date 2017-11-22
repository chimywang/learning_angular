/**
 * Created by chimy on 2017/11/22.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from "./form.component";


const formRoutes: Routes = [
  {
    path: '',
    component:  FormComponent,
    // children: [
    //   {
    //     path: '',
    //     children: [
    //       {path: '', component:  FormComponent},
    //     ]
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(formRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class FormRoutingModule {
}
