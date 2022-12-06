import { ProductServiceService } from 'src/app/services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduto } from 'src/app/Produto'
import { ListarProdutosComponent } from '../listar-produtos/listar-produtos.component';
import { Conta } from 'src/app/Conta';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  
  conta:Conta = JSON.parse(sessionStorage.getItem('Conta')!)
  
  produto: IProduto = {
    nomeProduto: '',
    quantidadeProduto: '',
    precoProduto: '',
    empresa_id: this.conta.empresa_id
  };

  constructor(private service:ProductServiceService) { }

  ngOnInit(): void {}

  cadastrarProduto(){
    if(this.produto.nomeProduto != ''){
      return this.service.createProduct(this.produto).subscribe(sucess =>{
        console.log('Produto Cadastrado com sucesso!')
        location.assign('/listar-produtos')
      },
      err =>{
        console.log('Produto Não cadastrado')
      })
    }
  return console.log('Verifique os campos')
  }
}