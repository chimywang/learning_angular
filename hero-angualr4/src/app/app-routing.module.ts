import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './heros/dashboard.component';
import { HeroesComponent }      from './heros/heroes.component';
import { HeroDetailComponent }  from './heros/hero-detail.component';
import {LifeCycleComponent} from "./lifeCycleDemo/LifeCycleComponent";


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'lifeCycle',     component: LifeCycleComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
