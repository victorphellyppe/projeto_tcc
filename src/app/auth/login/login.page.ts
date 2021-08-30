import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  public wavesDifference: number = 100;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public keyboard: Keyboard
  ) { }

  ngOnInit() { }

  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }

  async login() {
    await this.presentLoading();


    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      let message: string;
      //tratando os errors os erros de login
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'O email já está sendo usado';
          break;

        case 'auth/invalid-email':
          message = 'E-mail inválido';
          break;

        case 'auth/weak-password':
          message = "Sua senha deve ter pelo menos 6 caracteres ";
          break;
        
        case 'auth/wrong-password':
          message = "Senha invalída ou usuário não existe.";
          break;
      }

      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      let message: string;
      //tratando os errors
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'O email já está sendo usado';
          break;

        case 'auth/invalid-email':
          message = 'E-mail inválido';
          break;

        case 'auth/weak-password':
          message = "Sua senha deve ter pelo menos 6 caracteres ";
          break;
      }

      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  signOut() {
    return this.authService.logout();
  }

}