import { ClientServiceService } from './../../services/client-service.service';
import { ICliente } from './../../Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  constructor( private clientService:ClientServiceService) { }

  ngOnInit(): void {
  }

  cliente!: ICliente

  cadastrar(name:string){
    this.cliente = {name : name}
    this.clientService.createClient(this.cliente).subscribe()
  }
}
