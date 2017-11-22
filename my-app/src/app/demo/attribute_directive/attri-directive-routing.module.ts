import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AttriDirectiveComponent} from "./attri-directive.component";

const attriRoutes: Routes = [
  {path: '', component: AttriDirectiveComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(attriRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AttriDirectiveRoutingModule {
}
