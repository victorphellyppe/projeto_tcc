import { Component, OnInit } from '@angular/core';
import { Question, QuestionAnswer } from 'src/app/models/question';

@Component({
  selector: 'app-parar',
  templateUrl: './parar.page.html',
  styleUrls: ['./parar.page.scss'],
})
export class PararPage implements OnInit {

  constructor(private questions: Question, private questionCount: QuestionAnswer) { }

  ngOnInit() {
    
  }

}
