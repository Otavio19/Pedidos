import { IProduto } from './../Produto';
import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { parse } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  //private urlApi = 'https://62d87c1890883139359173dd.mockapi.io/produto';
  private urlApi= 'https://x8ki-letl-twmt.n7.xano.io/api:Az8xGr_h/Produtos';
  private token = sessionStorage.getItem('token')
  private tokenString = String(this.token)
  private tokenCerto = this.tokenString.split('"')
  private head_obj = new HttpHeaders().set('Authorization','bearer '+ this.tokenCerto[3])

  constructor( private http : HttpClient) {}

  getAll():Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.urlApi, { headers : this.head_obj });
  }

  getById(id:number){
    return this.http.get<IProduto>(`${this.urlApi}/${id}`);
  }

  createProduct(produto: IProduto):Observable<IProduto>{
    return this.http.post<IProduto>(this.urlApi, produto).pipe()
  }

  saveMov(id:Number, valor:any){
    return this.http.put(`${this.urlApi}/${id}`,valor).subscribe(retorno => console.log("Produto atualizados com sucesso."))
  }
}
