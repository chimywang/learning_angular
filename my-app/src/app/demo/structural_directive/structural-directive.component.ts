

import {Component} from "@angular/core";
import { Hero, heroes } from './hero';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.template.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {

  heroes = heroes;
  hero = this.heroes[0];

  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number { return hero.id; }
}
