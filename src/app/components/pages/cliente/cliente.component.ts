import { Observable } from 'rxjs';
import { ICliente } from './../../../Cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private clienteService : ClientServiceService,
    private activatedRoute: ActivatedRoute) { }

    cliente!: ICliente
    //  Vai pegar a propriedade "ID" que está na URL
    id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
  ngOnInit(): void {
    this.clienteService.getClient(this.id).subscribe(item =>{
      this.cliente = item
    })
  }
  //Falta corrigir esse método para alterar o cliente, porém tem que mexer no console.log a cima.
  salvarEdit(){
    console.log(this.cliente.nomeCliente)
    let att = this.cliente
    this.clienteService.updateClient(this.id, this.cliente).subscribe()
    alert('Alteração feita com sucesso!')
  }

  apagarClient(){
    this.clienteService.deletClient(this.id)
    alert('Cliente deletado!')
  }
}
