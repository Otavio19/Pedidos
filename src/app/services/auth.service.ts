import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi = 'https://x8ki-letl-twmt.n7.xano.io/api:C7hm_OI1/auth/login'

  constructor(private http : HttpClient) { }

  gerarToken(login:Auth){
    return this.http.post(this.urlApi, login)
  }
}
