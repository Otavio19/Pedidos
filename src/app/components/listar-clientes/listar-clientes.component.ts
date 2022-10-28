import { ClientServiceService } from './../../services/client-service.service';
import { ICliente } from './../../Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  allClient: ICliente[] = [];
  Client: ICliente[] = [];
  acao:any = []

  constructor(private clienteService: ClientServiceService) { }

  ngOnInit(): void {
    this.getAllClient()
  }

  displayStyle = 'none'

  openPopup(id:any) {
    this.displayStyle = "block";
    this.acao.push(id)
  }

  closePopup() {
    this.displayStyle = "none";
  }

  getAllClient(){
    this.clienteService.getAllClient().subscribe(dado => {
      this.allClient = dado
      this.Client = dado
    })
  }

  search(e: Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value
    this.Client = this.allClient.filter(x =>
      x.nomeCliente.trim().toLowerCase().includes(value.trim().toLowerCase())
   )}
  }
