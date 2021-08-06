import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../models/question';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router:Router, private authService: AuthService) {   }

  navegarQuestao(){
    this.router.navigate(['/question']);
  }

  signOut(){
    this.authService.logout();
  }
}
