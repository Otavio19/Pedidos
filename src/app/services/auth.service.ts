import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../Auth';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi = 'https://localhost:7123/usuario'
  private token = sessionStorage.getItem('token')
  private tokenString = String(this.token)
  private tokenCerto = this.tokenString.split('"')
  //private head_obj = new HttpHeaders().set('Authorization','bearer '+ this.tokenCerto[3])

  private dado = sessionStorage.getItem("Usuario") ?? "123"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization' : `Bearer ${JSON.parse(this.dado).token}`
    })
  };
  
  constructor(private http : HttpClient) { }

  login(login:Auth):Observable<Auth>{
    return this.http.post<Auth>(`${this.urlApi}/login`, login)
  }

  recuperarDados(){
    //return this.http.get<Usuario>(`${this.urlApi}`, this.httpOptions)
    return JSON.parse(this.dado)
  }

  registrarConta(conta:Auth){
    return this.http.post(`${this.urlApi}`,conta)
  }
}
