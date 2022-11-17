import { IProduto } from 'src/app/Produto';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { find } from 'rxjs';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  produtos!: IProduto[]

  lista : Array<any> = []

  formulario:any = {
    id: '',
    quantidade: '',
    tipo:'',
  }

  constructor(
    private produtoService:ProductServiceService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts():void{
    this.produtoService.getAll().subscribe(dado => this.produtos = dado)
   }

   getById(id:any){
    if(this.formulario.tipo =="Entrada"){
      return this.produtoService.getById(id).subscribe(retorno => this.lista.push({
        'id' : retorno.id,
        'nomeProduto' : retorno.nomeProduto,
        'tipo' : this.formulario.tipo,
        'quantidadeAtual' : retorno.quantidadeProduto,
        'quantidadeFutura' : Number(retorno.quantidadeProduto) + Number(this.formulario.quantidade),
        'precoProduto': retorno.precoProduto
      }))
    } if(this.formulario.tipo == "Saida"){
      return this.produtoService.getById(id).subscribe(retorno => this.lista.push({
        'id' : retorno.id,
        'nomeProduto' : retorno.nomeProduto,
        'tipo' : this.formulario.tipo,
        'quantidadeAtual' : retorno.quantidadeProduto,
        'quantidadeFutura' : Number(retorno.quantidadeProduto) - Number(this.formulario.quantidade),
        'precoProduto': retorno.precoProduto
      }))
    } return this.produtoService.getById(id).subscribe(retorno => this.lista.push({
      'id' : retorno.id,
      'nomeProduto' : retorno.nomeProduto,
      'tipo' : this.formulario.tipo,
      'quantidadeAtual' : retorno.quantidadeProduto,
      'quantidadeFutura' : Number(this.formulario.quantidade),
      'precoProduto': retorno.precoProduto
    }))
   }

   adcProduct(){
    this.getById(this.formulario.id)
    console.log(this.lista)
   }

   deletProduct(name:any){
    let index = this.lista.indexOf(name)
    this.lista.splice(index,1)
   }

   salvarMov(){
    for(let i = 0 ; i < this.lista.length ; i++){
      let produto = {
        id: this.lista[i].id,
        nomeProduto: this.lista[i].nomeProduto,
        quantidadeProduto: this.lista[i].quantidadeFutura,
        precoProduto: this.lista[i].precoProduto
      }
      this.produtoService.saveMov(produto.id, produto)
    }
   }
}
