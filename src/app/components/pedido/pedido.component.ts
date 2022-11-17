import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faThList } from '@fortawesome/free-solid-svg-icons';
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
    nomeProduto: '',
    quantidadeProduto: '',
    precoProduto: ''
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
          nomeProduto : dado.nomeProduto,
          quantidadeProduto : this.produto.quantidadeProduto,
          precoProduto: String(Number(dado.precoProduto) * Number(this.produto.quantidadeProduto))
        })

        this.pedido.valorPedido = String(Number(Number(this.pedido.valorPedido)+Number(produtoUm.precoProduto)).toFixed(2))
      } else{
        this.display = 'block'
      }
    })
  }

  deletProduct(name:any){
    let index = this.produtos.indexOf(name)

    let aux = this.produtos[index].precoProduto
    this.pedido.valorPedido = String(Number(Number(this.pedido.valorPedido) - Number(aux)).toFixed(2))
    this.produtos.splice(index,1)
    console.log('Valor do pedido: '+this.pedido.valorPedido)
   }

   adcPedido(){
    for(let i = 0 ; i < this.produtos.length ; i++){

      this.produtoService.getById(Number(this.produtos[i].id)).subscribe(dado =>{
        let novaMov = Number(dado.quantidadeProduto) - Number(this.produtos[i].quantidadeProduto)

        console.log('Produto: '+this.produtos[i].nomeProduto + "|| Nova mov: "+ novaMov)

        let produtos = {
          id: this.produtos[i].id,
          nomeProduto: this.produtos[i].nomeProduto,
          quantidadeProduto: novaMov,
          precoProduto: dado.precoProduto
        }

        this.produtoService.saveMov(Number(this.produtos[i].id), produtos)
      })
    }

    this.pedidoService.createPedido(this.pedido).subscribe()
   }

   fecharPopUp(){
    this.display = 'none'
  }
}
