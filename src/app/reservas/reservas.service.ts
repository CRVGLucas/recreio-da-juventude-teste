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
        preco: 120,
        sede: 'Juventude',
        dataReservada: '11/09/2022 às 20h30',
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        id: 2,
        nome: 'Quadra de tênis',
        imagem: 'https://s2-ge.glbimg.com/PDV4QjcST79VbbXPPRtwaQC0AWM=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/5/j/XdI1cNTZeuEfGCjpnbOQ/whatsapp-image-2021-04-22-at-19.22.46.jpeg',
        capacidade: 2,
        preco: 80,
        sede: 'Juventude',
        dataReservada: '12/09/2022 às 15h',
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      }
    ]
  }

  getReservaById(id: any){
    let reservas = this.getReservas();
    return reservas.filter((reserva: any) => reserva.id == id)
  }

  constructor() { }
}
