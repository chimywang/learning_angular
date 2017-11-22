import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PowerBoosterComponent} from "./power-booster.component";
import {MyPipeRoutingModule} from "./my-pipe-routing.module";
import {ExponentialStrengthPipe} from "./exponential-strength.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyPipeRoutingModule
  ],
  exports: [],
  providers: [],
  declarations: [
    PowerBoosterComponent,
    ExponentialStrengthPipe
  ],
})
export class MyPipeModule {

}
