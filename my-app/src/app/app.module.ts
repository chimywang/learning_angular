import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from '@angular/router';

import {PageNotFoundComponent} from './demo/not-found/not-found.component';

import {NavComponent} from "./demo/nav/nav.component";
import {AppComponent} from './app.component';


import {AppRoutingModule} from './app-routing.module';
import {AuthService} from "./demo/service/auth.service";
import {AuthGuard} from "./demo/service/auth-guard.service";
import {DialogService} from './demo/service/dialog.service';

import {HeroesModule} from './demo/heroes/heroes.module';
import {LoginModule} from "./demo/login/login.module";
import {CrisisCenterModule} from "./demo/crisis-center/crisis-center.module";
import {AdminModule} from "./demo/admin/admin.module";
import {DynamicModule} from "./demo/dynamic/dynamic.module";
import {AttriDirectiveModule} from "./demo/attribute_directive/attri-directive.module";
import {StructuralDirectiveModule} from "./demo/structural_directive/structural-directive.module";
import {MyPipeModule} from "./demo/pipe/my-pipe.module";
import {FormModule} from "./demo/form/form.module";

@NgModule({
  imports: [
    BrowserModule, // *ngFor   *ngIf
    FormsModule,
    HeroesModule,
    DynamicModule,
    AttriDirectiveModule,
    StructuralDirectiveModule,
    MyPipeModule,
    FormModule,
    // AdminModule,
    // CrisisCenterModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  providers: [
    DialogService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
