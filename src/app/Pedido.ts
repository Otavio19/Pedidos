import { IProduto } from "./Produto";

export interface Pedido{
    id?: number,
    clientePedido?: String,
    vendedorPedido?: String,
    produtosPedido?: IProduto[],
    valorPedido?: String,
    empresa_id?: number
}