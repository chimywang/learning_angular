/**
 * Created by chimy on 2017/10/1.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'exe-parent',
    template: `
    <h4>Welcome to Angular World</h4>
    <input type="text" [(ngModel)] = "name">
    <exe-child [name] = 'name'></exe-child>
  `,
})
export class ParentComponent {
    private name = "exe-child-component";


}