import { Component, OnInit } from '@angular/core';
import { ReservasService } from './reservas.service';
import { Reserva } from '../interface/Reserva';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent  implements OnInit {
  protected reservas: Reserva[] = []
  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
    this.reservas = this.reservasService.getReservas()
  }

}
