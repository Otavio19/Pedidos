import { IProduto } from "./Produto";

export interface Pedido{
    id?: number,
    reponsavel_name?: String,
    cliente_name?: String,
    empresa_id?: number,
    created_at?:string,
    product?: IProduto[],
    price?: String,
}