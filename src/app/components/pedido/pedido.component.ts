import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { delay, Observable, timeout } from 'rxjs';
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
    amount: '',
    priceProduct: ''
  }

  pedido: Pedido = {
    clientePedido: '',
    vendedorPedido: '',
    produtosPedido: this.produtos,
    valorPedido: ''
  }

  display ='none'

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
    this.produtoService.getById(Number(this.produto.id)).subscribe(dado =>{
      let found = this.produtos.find(element => element.id == dado.id)
       if(found == undefined){
        this.produtos.unshift(produtoUm = {
          id: dado.id,
          nameProduct : dado.nameProduct,
          amount : this.produto.amount,
          priceProduct: String(Number(dado.priceProduct) * Number(this.produto.amount))
        })

        this.pedido.valorPedido = String(Number(Number(this.pedido.valorPedido)+Number(produtoUm.priceProduct)).toFixed(2))
        console.log(this.pedido.valorPedido)

      } else{
        this.display = 'block'
      }
    })

    this.calcularTotal()
  }

  deletProduct(name:any){
    let index = this.produtos.indexOf(name)
    console.log('Valor para excluir: '+this.produtos[index].priceProduct)

    let aux = this.produtos[index].priceProduct
    this.pedido.valorPedido = String(Number(Number(this.pedido.valorPedido) - Number(aux)).toFixed(2))
    this.produtos.splice(index,1)
    console.log('Valor do pedido: '+this.pedido.valorPedido)
   }

   adcPedido(){
    this.pedidoService.createPedido(this.pedido).subscribe()
   }

   fecharPopUp(){
    this.display = 'none'
  }

  calcularTotal(){

  }
}
