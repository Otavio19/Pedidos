import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
//Essa importação é para realizar requisições Http.
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { ClienteComponent } from './components/pages/cliente/cliente.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { VerPedidoComponent } from './components/pages/ver-pedido/ver-pedido.component';
import { RelatorioPedidosComponent } from './components/relatorios/relatorio-pedidos/relatorio-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CadastrarProdutoComponent,
    ListarProdutosComponent,
    EstoqueComponent,
    ListarClientesComponent,
    CadastrarClienteComponent,
    ClienteComponent,
    PedidoComponent,
    PedidosComponent,
    VerPedidoComponent,
    RelatorioPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
