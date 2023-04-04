import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service'
import { IProduto } from 'src/app/Produto'
import { Usuario } from 'src/app/Usuario';


@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
   allProducts: IProduto[] = [];
   produtos : Array <any> = [];

  constructor( private productService : ProductServiceService) {
    this.getAll()
  }

  ngOnInit(): void {
    
   }

   getAll()
   {
    return this.productService.getAll().subscribe(p =>{
      this.produtos = p
      this.allProducts = p
    })
   }

   search(e : Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value
    this.produtos = this.allProducts.filter(x =>
      x.name.trim().toLowerCase().includes(value.trim().toLowerCase())
   )}
}
