import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICliente } from '../Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private urlApi = 'https://62d87c1890883139359173dd.mockapi.io/clientes'

  constructor(private http: HttpClient) { }

  getAllClient():Observable<ICliente[]>{
    return this.http.get<ICliente[]>(this.urlApi)
  }

  getClient(id:Number){
    return this.http.get<ICliente>(`${this.urlApi}/${id}`)
  }

  createClient(cliente:ICliente):Observable<ICliente>{
    return this.http.post<ICliente>(this.urlApi, cliente)
  }

  deletClient(id:number){
    return this.http.delete(`${this.urlApi}/${id}`).subscribe()
  }

  updateClient(id:number, cliente:ICliente){
    return this.http.put<ICliente>(`${this.urlApi}/${id}`, cliente)
  }
}
