import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './heros/in-memory-data.service';

import { AppComponent }         from './heros/app.component';
import { DashboardComponent }   from './heros/dashboard.component';
import { HeroesComponent }      from './heros/heroes.component';
import { HeroDetailComponent }  from './heros/hero-detail.component';
import { HeroService }          from './heros/hero.service';
import { HeroSearchComponent }  from './heros/hero-search.component';
import {LifeCycleComponent} from "./lifeCycleDemo/LifeCycleComponent";
import {ChildComponent} from "./lifeCycleDemo/ChildComponent";
import {ParentComponent} from "./lifeCycleDemo/ParentComponent";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    LifeCycleComponent,
    ParentComponent,
    ChildComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ LifeCycleComponent ]
})
export class AppModule { }
