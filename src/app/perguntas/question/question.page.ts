import { Component, OnInit } from '@angular/core';
import { Question, QuestionsAnswers } from 'src/app/models/question';
@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
    questions: Question[] = [
      {
        title:'Quem roeu a roupa do rei de roma ?',
        answers: [
          {description:'O gato', isRight:false},
          {description:'O rato', isRight:true},
          {description:'O cachorro', isRight:false},
          {description:'O camelo', isRight:false},
        ]
      },
      {
        title:'Quanto é 1 e 1 ?',
        answers: [
          {description:'Dois', isRight:false},
          {description:'Um', isRight:false},
          {description:'Quatro', isRight:false},
          {description:'Onze', isRight:true},
        ]
      },
      {
        title:'What siginifica o que?',
        answers: [
          {description:'Amor', isRight:false},
          {description:'Seis', isRight:false},
          {description:'O que', isRight:true},
          {description:'Vida', isRight:false},
        ]
      },
    ];
    curQuestion: Question;
    questionIndex: number = 0;
  ngOnInit():void{
    this.curQuestion = this.questions[this.questionIndex]
  }
  doAnswer(answer:QuestionsAnswers){
    if(answer.isRight){
      this.questionIndex++;
      this.curQuestion = this.questions[this.questionIndex];
    }
  }

}
