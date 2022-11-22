import { Component } from '@angular/core';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pedidos';
  userLogged = localStorage.getItem('userLogged')
  constructor(private productService:ProductServiceService){

  }


}
