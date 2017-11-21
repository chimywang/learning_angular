import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.template.html'
})
export class DisplayDataComponent implements OnInit {

  title = '这是hero组件';
  myHero = 'chimy';
  heroes = [
    new Hero(1, 'windstorm'),
    new Hero(12, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
  ];

  ngOnInit(): void {
  }

}
