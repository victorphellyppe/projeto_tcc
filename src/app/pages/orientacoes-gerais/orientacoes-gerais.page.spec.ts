import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrientacoesGeraisPage } from './orientacoes-gerais.page';

describe('OrientacoesGeraisPage', () => {
  let component: OrientacoesGeraisPage;
  let fixture: ComponentFixture<OrientacoesGeraisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientacoesGeraisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrientacoesGeraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
