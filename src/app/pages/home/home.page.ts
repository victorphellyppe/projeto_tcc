import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD:src/app/pages/home/home.page.ts
// import { Question } from '../../models/question';
import { AuthService } from '../../services/auth.service';
=======
import { Platform } from '@ionic/angular';
import { Question } from '../models/question';
>>>>>>> main:src/app/home/home.page.ts

/* 
Autor Victor Oliveira 
*/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
<<<<<<< HEAD:src/app/pages/home/home.page.ts
  constructor(private router:Router, private authService: AuthService) {   }
=======
  constructor(private router:Router, private platform: Platform) {   }

>>>>>>> main:src/app/home/home.page.ts

  navegarQuestao(){
    this.router.navigate(['/question']);
  }

<<<<<<< HEAD:src/app/pages/home/home.page.ts
  signOut(){
    this.authService.logout();
  }
=======
  /* 
    Função sair do app
  */ 
  sairAplicativo(){
    }
>>>>>>> main:src/app/home/home.page.ts
}
