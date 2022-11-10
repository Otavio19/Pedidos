import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-relatorio-pedidos',
  templateUrl: './relatorio-pedidos.component.html',
  styleUrls: ['./relatorio-pedidos.component.css']
})
export class RelatorioPedidosComponent implements OnInit {

  pedidos:Pedido[] = []
  totalFaturado = 0

  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedidos().subscribe(dado =>{
      this.pedidos = dado
      for(let i = 0 ; i < this.pedidos.length ; i++){
        this.totalFaturado += Number(this.pedidos[i].valorPedido)
      }
    })
    
  }
}
