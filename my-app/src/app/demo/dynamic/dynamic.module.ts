import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AdDirective} from "./ad.directive";
import {AdBannerComponent} from "./ad-banner.component";
import {HeroProfileComponent} from "./hero-profile.component";
import {HeroJobAdComponent} from "./hero-job-ad.component";
import {AdRoutingModule} from "./ad-routing.module";
import {AdService} from "./ad.service";
import {DynamicComponent} from "./dynamic.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdRoutingModule
  ],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  declarations: [
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    DynamicComponent

  ],
  providers: [
    AdService,
  ]
})
export class DynamicModule {
}
