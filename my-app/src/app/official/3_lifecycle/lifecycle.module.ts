import {NgModule} from "@angular/core";
import {LifeCycleComponet} from "./lifecycle.component";
import {ChildComponent} from "./child/child.component";
import {FormsModule} from "@angular/forms";
/**
 * Created by chimy on 2017/11/20.
 */


@NgModule({
  declarations: [
    LifeCycleComponet,
    ChildComponent
  ],
  imports: [
    FormsModule,
  ],
  exports:[LifeCycleComponet],
  providers: [],
  bootstrap: []
})
export class LifecycleModule {
}
