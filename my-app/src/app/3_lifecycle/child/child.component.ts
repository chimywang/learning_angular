import {
  Component, OnInit, OnChanges, AfterViewChecked, AfterViewInit, AfterContentChecked,
  AfterContentInit, OnDestroy, DoCheck, SimpleChanges, Input
} from "@angular/core";
/**
 * Created by chimy on 2017/11/20.
 * 指令和组件的实例有一个生命周期：新建、更新和销毁
 */

@Component({
  selector: 'lifecycle-child',
  templateUrl: './child.template.html'
})
export class ChildComponent implements OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  @Input() a: any;

  constructor() {
    console.log('constructor');
    console.dir(this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.dir(this);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.dir(this);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    console.dir(this);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    console.dir(this);
  }


  // 组件特有

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.dir(this);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    console.dir(this);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.dir(this);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    console.dir(this);
  }


}
