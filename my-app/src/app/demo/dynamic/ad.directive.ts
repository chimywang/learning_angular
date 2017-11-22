import {Directive, ViewContainerRef} from "@angular/core";

/**
 * Created by chimy on 2017/11/21.
 */


@Directive({
  selector: '[ad-host]'
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
