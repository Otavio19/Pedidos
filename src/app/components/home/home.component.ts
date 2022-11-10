import { Pedido } from './../../Pedido';
import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalVendas = 0
  faturamento = 0
  faturamentoFormatado!:String
  totalProdutos = 0

  constructor(private pedidoService:PedidoService, private produtoService:ProductServiceService) { }

  ngOnInit(): void {
    this.getFaturamento()
    this.getProdutos()
  }


  getFaturamento(){
    this.pedidoService.getAllPedidos().subscribe(dado =>{
      for(let i = 0 ; i < dado.length ; i++){
        this.faturamento += Number(dado[i].valorPedido)
        this.totalVendas += 1
        this.faturamentoFormatado = this.faturamento.toFixed(2)
      }
    })
    
  }

  getProdutos(){
    this.produtoService.getAll().subscribe(dado => this.totalProdutos = dado.length)
  }
}
