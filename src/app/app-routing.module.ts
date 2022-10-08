import { ClienteComponent } from './components/pages/cliente/cliente.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { HomeComponent } from './components/home/home.component';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { VerPedidoComponent } from './components/pages/ver-pedido/ver-pedido.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastrar-produtos', component: CadastrarProdutoComponent},
  {path:'listar-produtos', component: ListarProdutosComponent},
  {path:'estoque', component: EstoqueComponent},
  {path:'listar-clientes',component: ListarClientesComponent},
  {path:'cadastrar-cliente', component: CadastrarClienteComponent},
  {path:'pages/cliente/:id',component: ClienteComponent},
  {path:'pedido',component: PedidoComponent},
  {path:'pedidos',component:PedidosComponent},
  {path: 'pages/ver-pedido/:id', component:VerPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
