import { IProduto } from './../Produto';
import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  //private urlApi = 'https://62d87c1890883139359173dd.mockapi.io/produto';
  private urlApi= 'https://x8ki-letl-twmt.n7.xano.io/api:Az8xGr_h/Produtos';
  private token ="eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.jP8NvJICppjJnhUM4-RZ44eLTkc4DidZ3-AET8UQlc_Virh2xKE7jcnMrq9mxrLhcinoaCgcveqjMZ45c9W3RtEXwg7iUWbP.-WbT_oSl8IRIOa8abaBcAw.sFjEVi_0LHvz_NSxbYFWYBMFwiWZJyR_MTfD7XC-aJhVct912IKd7paISNcu_daaOZClXKAYN6_1Mau23TvBgTKkYP5LCEdz706on_m0C9KsFCRvmks3-b_xZYbkhtSi6U1yZcJDyGvLnKLb2oyVhmS0O8aZ71cjItCeLTpVF6c.ZR-4NHsoTIkI00j9UUphKkiawBm7IIGgqQ-kIeedvDI"
  private head_obj = new HttpHeaders().set('Authorization','bearer '+ this.token)

  constructor( private http : HttpClient) {

  }

  getAll():Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.urlApi, {headers:this.head_obj});
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
