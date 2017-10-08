import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styles: []
})
export class DemoFormSkuComponent implements OnInit {

  value: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
