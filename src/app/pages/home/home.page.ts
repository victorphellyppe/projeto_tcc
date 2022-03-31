import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
// import { Question } from '../../models/question';
import { AuthService } from '../../services/auth.service';

/*
Autor Victor Oliveira
*/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private authService: AuthService, private plt: Platform) {   }

  navegarQuestao(){
    this.router.navigate(['/question']);
  }

  signOut(){
    this.authService.logout();
    this.plt.backButton.subscribe(async () => {
      navigator['app'].exitApp();
    })
  }
}
