import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaComponent } from './reservas/reserva/reserva.component';

const routes: Routes = [
  {
    path: '',
    component: ReservasComponent
  },
  {
    path: 'reserva/:id',
    component: ReservaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
