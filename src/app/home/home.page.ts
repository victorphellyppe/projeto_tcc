import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Question } from '../models/question';

/* 
Autor Victor Oliveira 
*/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router:Router, private platform: Platform) {   }


  navegarQuestao(){
    this.router.navigate(['/question']);
  }

  /* 
    Função sair do app
  */ 
  sairAplicativo(){
    }
}
