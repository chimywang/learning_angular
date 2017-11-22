import {NgModule} from "@angular/core";
import {AttriDirectiveComponent} from "./attri-directive.component";
import {HighlightDirective} from "./highlight.directive";
import {AttriDirectiveRoutingModule} from "./attri-directive-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    AttriDirectiveRoutingModule,
    CommonModule
  ],
  exports: [],
  providers: [],
  declarations: [
    AttriDirectiveComponent,
    HighlightDirective
  ],
})
export class AttriDirectiveModule {

}
