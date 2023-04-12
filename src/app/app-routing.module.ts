import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalErrorHandler } from './error-handler';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: () =>
      import(
        './modules/home/home.module'
      ).then( m => m.homeStatusModule),
  },
  {
    path: 'articles-list',
    loadChildren: () =>
      import(
        './modules/articles/articles.module'
      ).then( m => m.articlesStatusModule),
  },
  {
    path: 'heuristics-list',
    loadChildren: () =>
      import(
        './modules/heuristics/heuristics.module'
      ).then((m) => m.heuristicsStatusModule),
  },
  {
    path: 'evaluate',
    loadChildren: () =>
      import(
        './modules/evaluate/evaluate.module'
      ).then( m => m.evaluateStatusModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import(
        './modules/about/about.module'
      ).then( m => m.aboutStatusModule),
  },
  {
    path: 'heuristic-detail',
    loadChildren: () =>
      import(
        './modules/heuristic-detail/heuristic-detail.module'
      ).then((m) => m.heuristicsDetailStatusModule),
  },
  {
    path: 'articles-detail',
    loadChildren: () =>
      import(
        './modules/articles-detail/articles-detail.module'
      ).then((m) => m.articlesDetailStatusModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    useHash: false
  })],
  exports: [RouterModule],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}]
})
export class AppRoutingModule { }
