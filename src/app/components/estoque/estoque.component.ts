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

  listaProdutos : Array<any> = []

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

   getProduct(id: number){
    console.log(this.listaProdutos)
   }

   adcProduct(){
    this.getProduct(this.formulario.id)
   }

   deletProduct(name:any){
    let index = this.listaProdutos.indexOf(name)
    this.listaProdutos.splice(index,1)
   }

   salvarMov(){
    for(let i = 0 ; i < this.listaProdutos.length ; i++){
      let produto = {
        id: this.listaProdutos[i].id,
        nomeProduto: this.listaProdutos[i].nomeProduto,
        quantidadeProduto: this.listaProdutos[i].quantidadeFutura,
        precoProduto: this.listaProdutos[i].precoProduto,
        empresa_id: this.listaProdutos[i].empresa_id
      }
      this.produtoService.saveMov(produto.id, produto)
    }
   }
}
