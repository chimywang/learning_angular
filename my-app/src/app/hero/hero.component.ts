import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.template.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title = '这是hero组件';
  myHero = 'chimy';
  heroes = ['tom', 'chimy', 'jack'];

  constructor() {
  }

  ngOnInit() {
  }

}
