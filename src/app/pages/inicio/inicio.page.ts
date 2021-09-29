import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

}
