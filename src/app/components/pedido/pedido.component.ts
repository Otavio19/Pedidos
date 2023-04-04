import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { delay, first, Observable, timeout } from 'rxjs';
import { Usuario } from 'src/app/Usuario';
import { Pedido } from 'src/app/Pedido';
import { IProduto } from 'src/app/Produto'
import { AuthService } from 'src/app/services/auth.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

import { v4 as uuidv4 } from 'uuid';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { ICliente } from 'src/app/Cliente';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  conta:Usuario = JSON.parse(sessionStorage.getItem('Usuario')!)

  opcProdutos!: IProduto[]

  produtos:  IProduto[] = []

  clientes!: ICliente[]

  produto: IProduto = {
    id: 0,
    name: '',
    amount: 0,
    price: ''
  }

  pedido: Pedido = {
    cliente_name: '',
    reponsavel_name: '',
    product: this.produtos,
    price: '',
    empresa_id: this.conta.empresa_id
  }

  display ='none'

  constructor(private pedidoService:PedidoService, 
              private produtoService:ProductServiceService,
              private authService:AuthService,
              private clienteService: ClientServiceService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getDados()
    this.getClients()
  }

  getProducts():void{
    this.produtoService.getAll().subscribe(dado =>
      {
        this.opcProdutos = dado
      })
   }

   getClients()
   {
    this.clienteService.getAllClient().subscribe(dado => this.clientes = dado)
   }

   getDados(){
    var name = this.authService.recuperarDados().nome.split(" ")
    var first_name = name[0]
    var second_name = name[1][0]
    this.pedido.reponsavel_name = first_name + " " + second_name + "."
    console.log(name)
   }

  adcProduto(){

    let produtoUm
    this.produtoService.getById(Number(this.produto.id)).subscribe(dado =>{
      let found = this.produtos.find(element => element.id == dado.id)
       if(found == undefined){
        this.produtos.unshift(produtoUm = {
          idGuia : dado.id,
          name : dado.name,
          amount : this.produto.amount,
          price: String(Number(dado.price) * Number(this.produto.amount))
        })

        this.pedido.price = String(Number(Number(this.pedido.price)+Number(produtoUm.price)).toFixed(2))
      } else{
        this.display = 'block'
      }
    })
  }

  savePedido()
  {
    this.pedidoService.createPedido(this.pedido).subscribe(sucess => {
      location.assign('/pedidos')
    }, err =>{
      console.log(err)
    })
  }

  deletProduct(name:any){
    let index = this.produtos.indexOf(name)

    let aux = this.produtos[index].price
    this.pedido.price = String(Number(Number(this.pedido.price) - Number(aux)).toFixed(2))
    this.produtos.splice(index,1)
    console.log('Valor do pedido: '+this.pedido.price)
   }

   fecharPopUp(){
    this.display = 'none'
  }
}
