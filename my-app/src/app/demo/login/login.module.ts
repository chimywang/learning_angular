import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../service/auth-guard.service';
import {AuthService} from '../service/auth.service';
import {LoginComponent} from './login.component';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginModule {}
