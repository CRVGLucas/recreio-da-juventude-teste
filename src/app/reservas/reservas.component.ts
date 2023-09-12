import { Component, OnInit } from '@angular/core';
import { ReservasService } from './reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent  implements OnInit {
  protected reservas: any = []
  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
    this.reservas = this.reservasService.getReservas()
  }

}
