import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service'
import { IProduto } from 'src/app/Produto'


@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
   allProducts: IProduto[] = [];
   produtos : Array <any> = [];

  constructor( private productService : ProductServiceService) {
    this.getProducts()
  }

  ngOnInit(): void {
   }

   getProducts():void{
    this.productService.getAll().subscribe(dado =>{
      for(let i = 0 ; i < dado.length ; i++){
        this.allProducts.push(dado[i])
        this.produtos.push(dado[i])
      }
    })

    console.log(this.allProducts)
   }

   search(e : Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value
    this.produtos = this.allProducts.filter(x =>
      x.nomeProduto.trim().toLowerCase().includes(value.trim().toLowerCase())
   )}
}
