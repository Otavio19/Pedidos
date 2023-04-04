import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {

  private urlApi = 'https://localhost:7123/empresa'

  constructor(private http: HttpClient) { }

  getCompany(id:number):Observable<Empresa>
  {
    return this.http.get<Empresa>(`${this.urlApi}/${id}`)
  }
}
