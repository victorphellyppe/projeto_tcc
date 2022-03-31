import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(private router: Router, private auth:AuthService) { }

  async ngOnInit() {
    try {
      await this.auth.getAuth();
      setTimeout(() => {
          if (this.auth.getAuth() != null)
            this.router.navigateByUrl('/home');
          else
            this.router.navigateByUrl('/inicial');
      }, 4000)
    } catch (e) {
      this.router.navigateByUrl('/login');
    }

  }

}
