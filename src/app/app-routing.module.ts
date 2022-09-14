import { ClienteComponent } from './components/pages/cliente/cliente.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { HomeComponent } from './components/home/home.component';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastrar-produtos', component: CadastrarProdutoComponent},
  {path:'listar-produtos', component: ListarProdutosComponent},
  {path:'estoque', component: EstoqueComponent},
  {path:'listar-clientes',component: ListarClientesComponent},
  {path:'cadastrar-cliente', component: CadastrarClienteComponent},
  {path:'pages/cliente/:id',component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }