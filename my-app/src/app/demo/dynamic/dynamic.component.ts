/**
 * Created by chimy on 2017/11/21.
 */
import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';

@Component({
  selector: 'app-ad',
  template: `
    <div>
      <app-add-banner [ads]="ads"></app-add-banner>
    </div>
  `
})
export class DynamicComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

