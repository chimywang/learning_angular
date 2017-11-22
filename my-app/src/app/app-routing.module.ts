import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './demo/not-found/not-found.component';
import {CanDeactivateGuard} from './demo/service/can-deactivate-guard.service';
import {AuthGuard} from './demo/service/auth-guard.service';
import {SelectivePreloadingStrategy} from './demo/service/selective-preloading-strategy';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: 'app/demo/login/login.module#LoginModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: 'app/demo/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/demo/crisis-center/crisis-center.module#CrisisCenterModule',
    data: {preload: true}
  },
  {
    path: 'heroes',
    loadChildren: 'app/demo/heroes/heroes.module#HeroesModule',
    data: {preload: true}
  },
  {
    path: 'ad',
    loadChildren: 'app/demo/dynamic/dynamic.module#DynamicModule',
    data: {preload: true}
  },
  {
    path: 'at_directive',
    loadChildren: 'app/demo/attri_directive/attri-directive.module#AttriDirectiveModule',
    // data: {preload: true}
  },
  {
    path: 'structural_directive',
    loadChildren: 'app/demo/structural_directive/structural-directive.module#StructuralDirectiveModule',
    // data: {preload: true}
  },
  {
    path: 'pipe',
    loadChildren: 'app/demo/pipe/my-pipe.module#MyPipeModule',
    // data: {preload: true}
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {
}
