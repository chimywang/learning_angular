import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from '@angular/router';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroesModule} from './heroes/heroes.module';
import {PageNotFoundComponent} from './not-found/not-found.component';
import {DialogService} from './service/dialog.service';
import {NavComponent} from "./nav/nav.component";
import {LoginModule} from "./login/login.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
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
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
