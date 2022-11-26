import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../Auth';

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
    return this.http.post(`${this.urlApi}login`, login)
  }

  recuperarDados(){
    //return this.http.get(`${this.urlApi}me`,{ headers : this.head_obj })
    console.log(this.tokenCerto)
  }
}
