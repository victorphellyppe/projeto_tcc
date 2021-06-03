import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'register',loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)},
  {path: 'login',loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)},
  {path: 'question',loadChildren: () => import('./perguntas/question/question.module').then( m => m.QuestionPageModule)},
  {path: 'inicio',loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)},
  {path: 'rank',loadChildren: () => import('./rank/rank.module').then( m => m.RankPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
