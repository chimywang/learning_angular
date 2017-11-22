import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UnlessDirective} from "./unless.directive";
import {StructuralDirectiveComponent} from "./structural-directive.component";
import {FormsModule} from "@angular/forms";
import {
  ConfusedHeroComponent, HappyHeroComponent, heroSwitchComponents, SadHeroComponent,
  UnknownHeroComponent
} from "./hero-switch.component";
import {StructuralDirectiveRoutingModule} from "./structural-directive-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StructuralDirectiveRoutingModule
  ],
  exports: [],
  providers: [],
  declarations: [
    StructuralDirectiveComponent,
    HappyHeroComponent,
    SadHeroComponent,
    ConfusedHeroComponent,
    UnknownHeroComponent,
    heroSwitchComponents,
    UnlessDirective
  ],
})
export class StructuralDirectiveModule {

}
