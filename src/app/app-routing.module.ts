import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalErrorHandler } from './error-handler';
import { AuthGuard } from './shared/guard/auth.guard';
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
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    data: {title: "Dashboard"},
    loadChildren: () =>
      import(
        './modules/dashboard/dashboard.module'
      ).then((m) => m.dashboardStatusModule),
  },
  {
    path: 'forgot-password',
    data: {title: "Contraseña olvidada"},
    loadChildren: () =>
      import(
        './modules/forgot-password/forgot-password.module'
      ).then((m) => m.forgotPasswordStatusModule),
  },
  {
    path: 'sign-up',
    data: {title: "Sign Up"},
    loadChildren: () =>
      import(
        './modules/sign-up/sign-up.module'
      ).then((m) => m.signUpStatusModule),
  },
  {
    path: 'sign-in',
    data: {title: "Sign In"},
    loadChildren: () =>
      import(
        './modules/sign-in/sign-in.module'
      ).then((m) => m.signInStatusModule),
  },
  {
    path: 'verify-email',
    data: {title: "Verifica tu correo"},
    loadChildren: () =>
      import(
        './modules/verify-email/verify-email.module'
      ).then((m) => m.verifyEmailStatusModule),
  },
  {
    path: 'evaluate-detail',
    canActivate: [AuthGuard],
    data: {title: "Detalle del resultado"},
    loadChildren: () =>
      import(
        './modules/evaluate-detail/evaluate-detail.module'
      ).then((m) => m.evaluateDetailStatusModule),
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
