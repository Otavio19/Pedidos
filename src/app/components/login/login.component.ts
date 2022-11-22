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
      console.log(String(dado))
      localStorage.setItem('token', token)
      localStorage.setItem('userLogged','true')
      location.reload()
    },
    erro => {
      if(erro.status == 400){
        console.log('Conta não encontrada')
        this.msgErro = 'Conta não encontrada'
      }
    })
  }
}
