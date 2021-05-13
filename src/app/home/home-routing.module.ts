import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPage } from '../perguntas/question/question.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {path: '',component: HomePage,},
  {path:'question', component: QuestionPage},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
