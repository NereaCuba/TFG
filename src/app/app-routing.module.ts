import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalErrorHandler } from './error-handler';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full',
    data: {title: "Evaluación de un gráfico estadístico"}
  },
  {
    path: 'home-page',
    data: {title: "Evaluación de un gráfico estadístico"},
    loadChildren: () =>
      import(
        './modules/home/home.module'
      ).then( m => m.homeStatusModule),
  },
  {
    path: 'articles-list',
    data: {title: "Artículos | Evaluación de un gráfico estadístico"},
    loadChildren: () =>
      import(
        './modules/articles/articles.module'
      ).then( m => m.articlesStatusModule),
  },
  {
    path: 'heuristics-list',
    data: {title: "Heurísticas | Evaluación de un gráfico estadístico"},
    loadChildren: () =>
      import(
        './modules/heuristics/heuristics.module'
      ).then((m) => m.heuristicsStatusModule),
  },
  {
    path: 'evaluate',
    data: {title: "Evalúa | Evaluación de un gráfico estadístico"},
    loadChildren: () =>
      import(
        './modules/evaluate/evaluate.module'
      ).then( m => m.evaluateStatusModule),
  },
  {
    path: 'about',
    data: {title: "Contexto | Evaluación de un gráfico estadístico"},
    loadChildren: () =>
      import(
        './modules/about/about.module'
      ).then( m => m.aboutStatusModule),
  },
  {
    path: 'heuristic-detail',
    data: {title: "Evaluación de un gráfico estadístico"},
    loadChildren: () =>
      import(
        './modules/heuristic-detail/heuristic-detail.module'
      ).then((m) => m.heuristicsDetailStatusModule),
  },
  {
    path: 'articles-detail',
    data: {title: "Evaluación de un gráfico estadístico"},
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
