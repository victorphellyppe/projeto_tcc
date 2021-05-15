import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../models/question';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router:Router) {   }

  navegarQuestao(){
    this.router.navigate(['/question']);
  }
}
