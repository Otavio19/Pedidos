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
  pedidosFilter:Pedido[] = []
  totalFaturado = 0
  totalFaturadoFormatado!:String

  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedidos().subscribe(dado =>{
      this.pedidos = dado
      this.pedidosFilter = dado
      this.getFaturamento()
    })
  }

  search(e : Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value
    console.log(value)
    this.pedidos = this.pedidosFilter.filter(x =>
      x.cliente_name!.trim().toLowerCase().includes(value.trim().toLowerCase())
   )

   this.getFaturamento()
  }

  getFaturamento(){
   this.totalFaturado = 0
    for(let i = 0 ; i < this.pedidos.length ; i++){
      this.totalFaturado += Number(this.pedidos[i].price)
    }

    this.totalFaturadoFormatado = this.totalFaturado.toFixed(2)
  }
}
