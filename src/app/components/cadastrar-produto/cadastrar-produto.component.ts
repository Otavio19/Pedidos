import { ProductServiceService } from 'src/app/services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduto } from 'src/app/Produto'
import { ListarProdutosComponent } from '../listar-produtos/listar-produtos.component';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  
  conta:Usuario = JSON.parse(sessionStorage.getItem('Conta')!)
  
  produto!: IProduto

  constructor(private http:ProductServiceService) { }

  ngOnInit(): void {}

  /* cadastrarProduto(){
    if(this.produto.Name != ''){
      return this.service.createProduct(this.produto).subscribe(sucess =>{
        console.log('Produto Cadastrado com sucesso!')
        location.assign('/listar-produtos')
      },
      err =>{
        console.log('Produto Não cadastrado')
      })
    }
  return console.log('Verifique os campos')
  } */

  cadastrarProduto(name:string,amount:string ,price:string)
  {
    var amountInt = Number(amount)
    this.produto = {name : name, amount : amountInt, price : price}
    this.http.createProduct(this.produto).subscribe()
  }
}