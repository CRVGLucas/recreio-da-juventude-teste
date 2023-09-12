import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacoesDeUsoComponent } from './informacoes-de-uso.component';

describe('InformacoesDeUsoComponent', () => {
  let component: InformacoesDeUsoComponent;
  let fixture: ComponentFixture<InformacoesDeUsoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesDeUsoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacoesDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
