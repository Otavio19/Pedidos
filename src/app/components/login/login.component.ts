import { Auth } from './../../Auth';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aux : any;
  login! : Auth

  usuario! : Usuario

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  efetuarLogin(usuario:string, senha:string)
  {
    this.login = {
      Email : usuario,
      Senha : senha
    }
    this.authService.login(this.login).subscribe(sucess =>{
      sessionStorage.setItem('Usuario',JSON.stringify(sucess))
      sessionStorage.setItem('userLogged', 'true')
      location.reload()
    }, err =>{
      console.log("Conta não encontrada!")
    })
  }

  efetuarRegistro(nome:string, email:string, senha:string,)
  {
    this.usuario = {
      Email : email,
      Senha : senha,
      Nome : nome 
    }

    this.authService.registrarConta(this.usuario).subscribe(sucess =>{
      this.sucessLabel()
    }, err =>{
      this.errorLabel()
    })
  }

  //CSS DO Aviso:
  sucessView = false;
  errorView = false
  sucessMessage = 'Registrado com sucesso!';

  sucessLabel()
  {
    this.sucessView = true;
    this.errorView = false
    this.sucessMessage = 'Registrado com sucesso!';
  }
  
  errorLabel()
  {
    this.errorView = true;
    this.sucessView = false;
    this.sucessMessage = 'Verifique os campos!';
  }

}
