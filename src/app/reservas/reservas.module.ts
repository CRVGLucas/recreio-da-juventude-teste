import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasComponent } from './reservas.component';
import { IonicModule } from '@ionic/angular';
import { ReservasService } from './reservas.service';
import { ReservaComponent } from './reserva/reserva.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ReservasComponent,
    ReservaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    ReservasService
  ],
  exports: [
    ReservasComponent,
    ReservaComponent
  ]
})
export class ReservasModule { }
