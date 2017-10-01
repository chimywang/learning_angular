import {Component, Input, SimpleChanges, OnChanges, OnInit, DoCheck} from '@angular/core';

@Component({
    selector: 'exe-child',
    template: `
      <p>Child Component</p>  
      <p>{{ name }}</p>
    `
})
export class ChildComponent implements OnChanges ,OnInit,DoCheck{
    @Input() name: string;
    ngOnChanges(changes: SimpleChanges) {
        console.dir(changes);
    }
    constructor(){
        console.log('ChildComponent constructor', this.name); // Output：undefined
    }
    ngOnInit() {
        console.log('ChildComponent ngOnInit', this.name); // output: 输入的pname值
    }
    ngDoCheck() {
        console.log('ChildComponent ngDoCheck', this.name); // output: 输入的pname值
    }
}