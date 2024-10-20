import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'logout',
    redirectTo: 'logout',
    pathMatch: 'full',
  },
  {
    path: 'register',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'alumno',
    redirectTo: 'alumno',
    pathMatch: 'full',
  },
  {
    path: 'docente',
    redirectTo: 'docente',
    pathMatch: 'full',
  },
  {
    path: 'reset-password',
    redirectTo: 'reset-password',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
