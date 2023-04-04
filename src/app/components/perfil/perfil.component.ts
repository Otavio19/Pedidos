import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Empresa';
import { AuthService } from 'src/app/services/auth.service';
import { EmpresaServiceService } from 'src/app/services/empresa-service.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario:Usuario = this.http.recuperarDados()
  nome!:string
  company:string | undefined
  test = 'Otaivo'

  constructor(private http:AuthService,
              private httpCompany: EmpresaServiceService
              ) { }

  ngOnInit(): void {
    this.getDataPerfil()
  }

  getDataPerfil()
  {
    console.log(this.http.recuperarDados())
    this.usuario.Nome =this.http.recuperarDados().nome
    this.usuario.Email =this.http.recuperarDados().email
    this.nome = this.http.recuperarDados().nome.split(" ")[0]
    this.httpCompany.getCompany(this.usuario.empresa_id!).subscribe(e => this.company = e.name)
  }
}
