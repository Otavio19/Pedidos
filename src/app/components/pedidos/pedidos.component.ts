import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = []

  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedidos().subscribe(dado =>{
      for(let i = 0 ; i < dado.length ; i++){
        this.pedidos.unshift(dado[i])
      }
    })
  }

}
