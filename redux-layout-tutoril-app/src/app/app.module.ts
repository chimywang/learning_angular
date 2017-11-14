import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {metaReducer} from './common/index';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(metaReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
