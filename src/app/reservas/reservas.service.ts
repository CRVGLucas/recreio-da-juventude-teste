import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../interface/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  getReservas() {
    return [
      {
        id: 1,
        nome: 'Recanto 1',
        imagem: 'https://blog.controlle.com/wp-content/uploads/2014/04/Refeitório-GSK-940x500.jpg',
        capacidade: 10,
        dataReservada: '11/09/2022 às 20h30'
      },
      {
        id: 2,
        nome: 'Quadra de tênis',
        imagem: 'https://s2-ge.glbimg.com/PDV4QjcST79VbbXPPRtwaQC0AWM=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/5/j/XdI1cNTZeuEfGCjpnbOQ/whatsapp-image-2021-04-22-at-19.22.46.jpeg',
        capacidade: 2,
        dataReservada: '12/09/2022 às 15h'
      }
    ]
  }

  constructor() { }
}
