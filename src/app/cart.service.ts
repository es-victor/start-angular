import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { products, Product } from './product-lists';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shippingCosts:any = [];

  count:number = 0
  items:Product[] = [];
  countStream:Subject<number>=new Subject<number>()
  itemsStream:Subject<Product[]>=new Subject<Product[]>()
  constructor(private http:HttpClient) {
    this.countStream.subscribe((value)=>{this.count = value})
    this.itemsStream.subscribe((value)=>{this.items = value})
    this.shippingCosts= this.http.get<{id:number, price:string, duration:string}[]>('assets/shipping-costs.json')
  }

  // variable
  getShippingCosts(){return }

  // add product to cart
  addProductToCart(product:Product){
    let i=-1
    this.items.forEach(item =>{
      if(item.id == product.id){
        i=this.items.indexOf(item)
      }
    });
    if(i==-1){
      this.items.push(product);
      this.countStream.next(this.items.length)
      return this.items;    
    }
    this.items.splice(i,1)
    this.countStream.next(this.items.length);
    return this.items;    
  
  }

  // get all products
  getProducts(){
    return this.items;
  }

  // remove specific product from cart
  removeProductFromCart(id:number){
    // find the index of the product using the id 
    let i=-1
    this.items.forEach((product)=>{
      if(id==product.id){
        i= this.items.indexOf(product)
        this.items.splice(i,1)
        this.countStream.next(this.items.length)
      }  
    }) 
  }

  // This product is on cart
  isInTheCart(product:Product):boolean{
    return this.items.includes(product)
  }

  //
    getShippingCost(){
  return 0
  }

  // clear cart
  clearCart(){
    this.items =[]
    this.countStream.next(this.items.length);
    this.itemsStream.next( this.items);
    return this.items;
  }
}
