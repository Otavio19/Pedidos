import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../Auth';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Conta } from '../Conta';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi = 'https://x8ki-letl-twmt.n7.xano.io/api:C7hm_OI1/auth/'
  private token = sessionStorage.getItem('token')
  private tokenString = String(this.token)
  private tokenCerto = this.tokenString.split('"')
  private head_obj = new HttpHeaders().set('Authorization','bearer '+ this.tokenCerto[3])

  constructor(private http : HttpClient) { }

  gerarToken(login:Auth){
    return this.http.post(`${this.urlApi}login`, login,{responseType:'json'}).pipe(
      map(data => {
        sessionStorage.setItem('token',JSON.stringify(data))
      })
    )
  }

  recuperarDados():Observable<Conta>{
    return this.http.get<Conta>(`${this.urlApi}me`,{ headers : this.head_obj })
  }

  registrarConta(conta:Auth){
    return this.http.post(`${this.urlApi}signup`,conta)
  }
}
