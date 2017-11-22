import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PowerBoosterComponent} from "./power-booster.component";


const structuralRoutes: Routes = [
  {path: '', component: PowerBoosterComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(structuralRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyPipeRoutingModule {
}
