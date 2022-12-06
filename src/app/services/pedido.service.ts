import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from '../Conta';
import { Pedido } from '../Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  //private urlApi = 'https://62d87c1890883139359173dd.mockapi.io/pedidos'
  private urlApi = 'https://x8ki-letl-twmt.n7.xano.io/api:C7hm_OI1/pedidos'
  private urlApiPedidoEmpresa = 'https://x8ki-letl-twmt.n7.xano.io/api:C7hm_OI1/Pedidos_empresa'
  private token = sessionStorage.getItem('token')
  private tokenString = String(this.token)
  private tokenCerto = this.tokenString.split('"')
  private head_obj = new HttpHeaders().set('Authorization','bearer '+ this.tokenCerto[3])

  constructor( private http : HttpClient ) { }

  getAllPedidos():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.urlApiPedidoEmpresa}/${this.getConta()}`)
  }

  getPedido(id:Number):Observable<Pedido>{
    return this.http.get<Pedido>(`${this.urlApi}/${id}`)
  }

  createPedido(pedido: Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.urlApi, pedido, { headers : this.head_obj })
  }

  private getConta(){
    let conta:Conta = JSON.parse(sessionStorage.getItem('Conta')!)
    return conta.empresa_id
   }

}
