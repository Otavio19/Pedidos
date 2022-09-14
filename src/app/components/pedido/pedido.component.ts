import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Pedido';
import { IProduto } from 'src/app/Produto'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedido:Pedido ={} 

  produtos!: []

  constructor() { }

  ngOnInit(): void {
  }

  adcProduto(){
    this.produtos.push('Otavio')
  }
}
