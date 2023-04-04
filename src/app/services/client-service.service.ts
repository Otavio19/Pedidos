import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICliente } from '../Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private urlApi = 'https://localhost:7123/cliente'

  private tokenString = sessionStorage.getItem("Usuario") ?? "123"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization' : `Bearer ${JSON.parse(this.tokenString).token}`
    })
  };
  
  constructor(private http: HttpClient) { }

  getAllClient():Observable<ICliente[]>{
    return this.http.get<ICliente[]>(this.urlApi, this.httpOptions)
  }

  getClient(id:Number){
    return this.http.get<ICliente>(`${this.urlApi}/${id}`, this.httpOptions)
  }

  createClient(cliente:ICliente):Observable<ICliente>{
    return this.http.post<ICliente>(this.urlApi, cliente, this.httpOptions)
  }

  deletClient(id:number){
    return this.http.delete(`${this.urlApi}/${id}`, this.httpOptions)
  }

  updateClient(id:number, cliente:ICliente){
    return this.http.put<ICliente>(`${this.urlApi}/${id}`, cliente, this.httpOptions)
  }
}
