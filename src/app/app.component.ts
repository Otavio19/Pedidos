import { Component } from '@angular/core';
import { ProductServiceService } from './services/product-service.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pedidos';
  userLogged = sessionStorage.getItem('userLogged')
  constructor(private productService:ProductServiceService){}
}
