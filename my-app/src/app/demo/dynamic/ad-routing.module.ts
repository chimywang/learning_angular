import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DynamicComponent} from "./dynamic.component";

const adRoutes: Routes = [
  {path: '', component: DynamicComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(adRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdRoutingModule {
}
