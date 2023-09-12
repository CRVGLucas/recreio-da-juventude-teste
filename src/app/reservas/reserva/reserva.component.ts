import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservasService } from './../reservas.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent  implements OnInit {
  protected reserva: any = null
  private id = null
  constructor(route: ActivatedRoute, private reservasService: ReservasService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.reserva = this.reservasService.getReservaById(this.id);
  }

}
