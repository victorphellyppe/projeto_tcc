import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)},
  {path: 'login',loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),  canActivate: [LoginGuard]},
  {path: 'home',loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]},
  {path: 'question',loadChildren: () => import('./pages/question/question.module').then( m => m.QuestionPageModule)},
  {path: 'parar',loadChildren: () => import('./pages/parar/parar.module').then( m => m.PararPageModule)},
  {path: 'rank',loadChildren: () => import('./pages/rank/rank.module').then( m => m.RankPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
