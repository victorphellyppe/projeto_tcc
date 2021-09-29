import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: '',redirectTo: 'inicial',pathMatch: 'full'},

  {path: 'login',loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),  canActivate: [LoginGuard]},
  {path: 'inicial',loadChildren: () => import('./pages/inicial/inicial.module').then( m => m.InicialPageModule)},
  {path: 'home',loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]},
  {path: 'question',loadChildren: () => import('./pages/question/question.module').then( m => m.QuestionPageModule)},
  {path: 'parar',loadChildren: () => import('./pages/parar/parar.module').then( m => m.PararPageModule)},
  {path: 'regras',loadChildren: () => import('./pages/regras/regras.module').then( m => m.RegrasPageModule)},
  {path: 'orientacoes',loadChildren: () => import('./pages/orientacoes-gerais/orientacoes-gerais.module').then( m => m.OrientacoesGeraisPageModule)},
  {path: 'chat',loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
