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
        'nomeProduto' : retorno.nameProduct,
        'tipo' : this.formulario.tipo,
        'quantidadeAtual' : retorno.amount,
        'quantidadeFutura' : retorno.amount + this.formulario.quantidade
      }))
    } if(this.formulario.tipo == "Saida"){
      return this.produtoService.getById(id).subscribe(retorno => this.lista.push({
        'id' : retorno.id,
        'nomeProduto' : retorno.nameProduct,
        'tipo' : this.formulario.tipo,
        'quantidadeAtual' : retorno.amount,
        'quantidadeFutura' : Number(retorno.amount) - Number(this.formulario.quantidade)
      }))
    } return this.produtoService.getById(id).subscribe(retorno => this.lista.push({
      'id' : retorno.id,
      'nomeProduto' : retorno.nameProduct,
      'tipo' : this.formulario.tipo,
      'quantidadeAtual' : retorno.amount,
      'quantidadeFutura' : Number(this.formulario.quantidade)
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
        nameProduct: this.lista[i].nomeProduto,
        amount: this.lista[i].quantidadeFutura
      }
      this.produtoService.saveMov(produto.id, produto)
    }
   }
}
