import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservasService } from './../reservas.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent  implements OnInit {
  protected reserva: any = ''
  constructor(route: ActivatedRoute, private reservasService: ReservasService) {
    const id = route.snapshot.params['id'];
    console.log("id: ", id)
    this.reserva = this.reservasService.getReservaById(id);
  }

  ngOnInit() {
    console.log("reserva: ", this.reserva[0])
  }

}
