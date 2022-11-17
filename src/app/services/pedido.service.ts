import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Pedido } from '../Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  //private urlApi = 'https://62d87c1890883139359173dd.mockapi.io/pedidos'
  private urlApi = 'https://x8ki-letl-twmt.n7.xano.io/api:C7hm_OI1/pedidos'
  constructor( private http : HttpClient ) { }

  getAllPedidos():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.urlApi)
  }

  getPedido(id:Number):Observable<Pedido>{
    return this.http.get<Pedido>(`${this.urlApi}/${id}`)
  }

  createPedido(pedido: Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.urlApi, pedido)
  }
}
