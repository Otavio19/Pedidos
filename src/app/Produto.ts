export interface IProduto{
  id?:number,
  idGuia?:number,
  company_id?:number,
  created_at?: String,
  name:string,
  active? : boolean;
  amount:number,
  price:String
}
