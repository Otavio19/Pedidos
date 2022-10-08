import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/Pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.css']
})
export class VerPedidoComponent implements OnInit {

  constructor(private pedidoService:PedidoService,
              private activatedRoute:ActivatedRoute) {}

  pedido!: Pedido
  //  Vai pegar a propriedade "ID" que está na URL
  id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
  ngOnInit(): void {
    this.pedidoService.getPedido(this.id).subscribe(dado => this.pedido = dado)
  }

}
