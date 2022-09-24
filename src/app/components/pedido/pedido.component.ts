import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/Pedido';
import { IProduto } from 'src/app/Produto'
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  opcProdutos!: IProduto[]

  produtos:  IProduto[] = []

  produto: IProduto = {
    id: 0,
    nameProduct: '',
    amount: ''
  }

  pedido: Pedido = {
    clientePedido: '',
    vendedorPedido: '',
    produtosPedido: this.produtos
  }


  constructor(private pedidoService:PedidoService, private produtoService:ProductServiceService) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedidos().subscribe(dado => console.log(dado))
    this.getProducts()
  }

  getProducts():void{
    this.produtoService.getAll().subscribe(dado => this.opcProdutos = dado)
   }

  adcProduto(){

    let produtoUm
    this.produtoService.getById(Number(this.produto.id)).subscribe(dado => this.produtos.unshift(produtoUm = {
      id: dado.id,
      nameProduct : dado.nameProduct,
      amount : this.produto.amount
    }))
  }

  deletProduct(name:any){
    let index = this.produtos.indexOf(name)
    this.produtos.splice(index,1)
   }

   adcPedido(){
    this.pedidoService.createPedido(this.pedido).subscribe()
    console.log('Pedido Add: ' + this.pedido.clientePedido + 'Produtos: ' +this.pedido.produtosPedido)
   }
}
