import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Pedido } from '../Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private urlApi = 'https://62d87c1890883139359173dd.mockapi.io/pedidos'

  constructor( private http : HttpClient ) { }

  getAllPedidos(){
    return this.http.get(this.urlApi)
  }

  createPedido(pedido: Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.urlApi, pedido)
  }
}
