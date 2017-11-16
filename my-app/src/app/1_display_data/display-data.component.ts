import {Component} from "@angular/core";
import {Hero} from "./hero";
import {BaseHrefWebpackPlugin} from "@angular/cli/lib/base-href-webpack";

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.template.html'
})
export class DisplayDataComponent {
  title = '这是hero组件';
  myHero = 'chimy';
  heroes = [
    new Hero(1, 'windstorm'),
    new Hero(12, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
  ];

}
