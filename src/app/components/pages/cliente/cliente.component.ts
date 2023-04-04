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
    if(this.cliente.name == "")
     return alert("Nome não pode ser vazio!")

    return this.clienteService.updateClient(this.id, this.cliente).subscribe()
  }

  apagarClient(){
    this.clienteService.deletClient(this.id).subscribe()
  }
}
