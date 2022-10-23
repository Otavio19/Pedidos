import { ProductServiceService } from 'src/app/services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduto } from 'src/app/Produto'

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: IProduto = {
    nameProduct: '',
    amount: '',
    priceProduct: ''
  };

  constructor(
    private service:ProductServiceService
  ) { }

  ngOnInit(): void {

  }

  submit(){
    console.log("Dados Enviados com sucesso!")
    this.service.createProduct(this.produto).subscribe()
  }

}
