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

  constructor(private http: ClientServiceService) { }

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
    this.http.getAllClient().subscribe(c => {
      this.allClient = c
      this.Client = c
    })
  }

  search(e: Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value
    this.Client = this.allClient.filter(x =>
      x.name.trim().toLowerCase().includes(value.trim().toLowerCase())
   )}
  }
