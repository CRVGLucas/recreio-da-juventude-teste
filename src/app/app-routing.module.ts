import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaComponent } from './reservas/reserva/reserva.component';
import { InformacoesDeUsoComponent } from './informacoes-de-uso/informacoes-de-uso.component';

const routes: Routes = [
  {
    path: '',
    component: ReservasComponent
  },
  {
    path:  'reserva/:id',
    component: ReservaComponent
  },
  {
    path: 'info',
    component: InformacoesDeUsoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
