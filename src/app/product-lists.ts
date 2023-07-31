export interface Product{
    id:number,
    name:string,
    price:number,
    description:string
}
export const products:Product[] =[
    {id:1,name:"Phone XL",price:3200,description:"About the phone here"},
    {id:2,name:"Phone L",price:3200,description:"About the phone here"},
    {id:3,name:"Phone XXL",price:5200,description:"About the phone here"},
    {id:4,name:"Phone XL",price:3200,description:""},
]