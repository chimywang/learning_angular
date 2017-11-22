import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StructuralDirectiveComponent} from "./structural-directive.component";


const structuralRoutes: Routes = [
  {path: '', component: StructuralDirectiveComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(structuralRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StructuralDirectiveRoutingModule {
}
