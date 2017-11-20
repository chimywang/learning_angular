import {Component} from "@angular/core";
import {Hero} from "../1_display_data/hero";

@Component({
  selector: 'app-component-template',
  templateUrl: './component_template.template.html'
})
export class ComponentTemplateComponent {

  title = '这是hero组件';
  heroes = [
    new Hero(1, 'windstorm'),
    new Hero(12, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
  ];
  currentHero = this.heroes[0];
  heroImageUrl = '../../assets/image/pic.ipg';


  getVal() {
    return 2;
  }
}
