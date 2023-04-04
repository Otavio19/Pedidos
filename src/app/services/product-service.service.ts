import { IProduto } from './../Produto';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  urlApi = "https://localhost:7123/produto"

  private tokenString = sessionStorage.getItem("Usuario") ?? "123"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization' : `Bearer ${JSON.parse(this.tokenString).token}`
    })
  };

  
  constructor( private http : HttpClient) {}

  getAll():Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.urlApi, this.httpOptions);
  }

  getById(id:number):Observable<IProduto>{

    return this.http.get<IProduto>(`${this.urlApi}/${id}`, this.httpOptions);
  }

  createProduct(produto: IProduto):Observable<IProduto>{
    return this.http.post<IProduto>(this.urlApi, produto, this.httpOptions)
  }

  saveMov(id:Number, valor:any){
    return this.http.put(`${this.urlApi}/${id}`,valor, this.httpOptions).subscribe(retorno => console.log("Produto atualizados com sucesso."))
  }

  private getConta(){
    let conta:Usuario = JSON.parse(sessionStorage.getItem('Conta')!)
    return conta.empresa_id
   }

   getAllProduct():Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.urlApi, this.httpOptions);
  }
}