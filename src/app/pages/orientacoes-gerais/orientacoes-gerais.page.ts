import { Component, OnInit } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-orientacoes-gerais',
  templateUrl: './orientacoes-gerais.page.html',
  styleUrls: ['./orientacoes-gerais.page.scss'],
})
export class OrientacoesGeraisPage implements OnInit {

  constructor(private fileOpener: FileOpener) { }

  ngOnInit() {
    this.fileOpener.open('/assets/pdf/materialApp.pdf', 'application/pdf')
    .then(() => { console.log('Abriu o arquivo')})
    .catch(err => { console.log(err)});
  }

}
