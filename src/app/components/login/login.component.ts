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

  msgErro = 'ds'

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  gerarToken(){
    this.authService.gerarToken(this.login).subscribe(dado =>{
      console.log('Conta encontrada')
      let token = JSON.stringify(dado)
      sessionStorage.setItem('token', token)
      sessionStorage.setItem('userLogged','true')
      this.recuperarConta()
      location.reload()
    },
    erro => {
      if(erro.status == 400){
        console.log('Conta não encontrada')
        this.msgErro = 'Conta não encontrada'
      }
    })
  }

  recuperarConta(){
    this.authService.recuperarDados().subscribe(dado => {
      console.log(dado)
    })
  }
}
