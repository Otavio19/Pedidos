import { Auth } from './../../Auth';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Auth = {
    email : '',
    password : ''
  }

  registrar:Auth = {
    name : '',
    email : '',
    password : ''
  }

  confirmPassword = ''

  lblName = ''
  lblEmail = ''
  lblPassword = ''

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  gerarToken(){
    this.authService.gerarToken(this.login).subscribe(sucess =>{
      this.authService.recuperarDados().subscribe(dados =>{
        console.log(dados)
        sessionStorage.setItem('Conta',JSON.stringify(dados))
        sessionStorage.setItem('userLogged','true')
        location.assign('')
      })
    },
    err =>{
      console.log('Conta não encontrada')
    })
  }

  registrarConta(){
    if(this.registrar.name != ''){
      if(this.registrar.email != ''){
        if(this.registrar.password != '' && this.registrar.password == this.confirmPassword){
          this.authService.registrarConta(this.registrar).subscribe(sucess => {
            console.log(sucess)
            location.reload()
          }, err =>{
            console.log(err)
            this.lblPassword = 'Deve conter pelo menos uma Letra e 8 digitos.'
          })
          console.log('Conta registrada!')
          this.lblEmail = ''
          this.lblName = ''
          this.lblPassword = ''
          console.log(this.registrar)
        } else{
          console.log('Senhas não conferem!')
          this.lblPassword = 'Senhas não conferem'
        }
      } else{
        console.log('Por gentileza informe seu E-mail')
        this.lblEmail = 'Por gentileza informe seu E-mail'
      }
    } else{
      console.log('Por gentileza informe seu Nome')
      this.lblName = 'Por gentileza informe seu Nome'
    }
  }
}
