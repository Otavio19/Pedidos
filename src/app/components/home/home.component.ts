import { Pedido } from './../../Pedido';
import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalVendas = 0
  faturamento = 0

  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.getFaturamento()
  }


  getFaturamento(){
    this.pedidoService.getAllPedidos().subscribe(dado =>{
      for(let i = 0 ; i < dado.length ; i++){
        this.faturamento += Number(dado[i].valorPedido)
        this.totalVendas += 1
      }
    })
  }
}
