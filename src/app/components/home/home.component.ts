import { AppComponent } from './../../app.component';
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

  constructor(private pedidoService:PedidoService,
              private produtoService:ProductServiceService,
              private appComponent:AppComponent) { }

  ngOnInit(): void {
    this.getFaturamento()
    this.getProdutos()
    localStorage.setItem('token','eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.jP8NvJICppjJnhUM4-RZ44eLTkc4DidZ3-AET8UQlc_Virh2xKE7jcnMrq9mxrLhcinoaCgcveqjMZ45c9W3RtEXwg7iUWbP.-WbT_oSl8IRIOa8abaBcAw.sFjEVi_0LHvz_NSxbYFWYBMFwiWZJyR_MTfD7XC-aJhVct912IKd7paISNcu_daaOZClXKAYN6_1Mau23TvBgTKkYP5LCEdz706on_m0C9KsFCRvmks3-b_xZYbkhtSi6U1yZcJDyGvLnKLb2oyVhmS0O8aZ71cjItCeLTpVF6c.ZR-4NHsoTIkI00j9UUphKkiawBm7IIGgqQ-kIeedvDI')
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
