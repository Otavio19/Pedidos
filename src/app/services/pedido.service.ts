import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private urlApi = 'https://localhost:7123/pedido'
  
  private tokenString = sessionStorage.getItem("Usuario") ?? "123"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization' : `Bearer ${JSON.parse(this.tokenString).token}`
    })
  };

  constructor( private http : HttpClient ) { }

  getAllPedidos():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.urlApi}`, this.httpOptions)
  }

  getPedido(id:Number):Observable<Pedido>{
    return this.http.get<Pedido>(`${this.urlApi}/${id}`, this.httpOptions)
  }

  createPedido(pedido: Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.urlApi, pedido, this.httpOptions)
  }
}
