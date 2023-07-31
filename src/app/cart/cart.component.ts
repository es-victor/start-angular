import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product-lists';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProductQuantities = new Map() ; 
  constructor(private cartService:CartService){
    this.cartService.items.forEach((product)=>{
      this.cartProductQuantities.set(product.id,1)
    }) 
  }
  clearCart(){
    this.cartService. clearCart();
  }
  
  get cartProducts():Product[] {
        return this.cartService.items
   }
  
  removeProductFromCart(id:number){
    this.cartService.removeProductFromCart(id)
  }

  reduceQuantity(id:number){
    if(this.cartProductQuantities.has(id)){
      if(this.cartProductQuantities.get(id)==1) return;
      this.cartProductQuantities.set(id,this.cartProductQuantities.get(id)-1)
    } 
  }

  increaseQuantity(id:number){
    if(this.cartProductQuantities.has(id)){ 
      this.cartProductQuantities.set(id,this.cartProductQuantities.get(id)+1)
    }
  }

  productQuantity(id:number){
    return this.cartProductQuantities.get(id);
  }

    totalPrice(){
    let totalPrice = 0
    this.cartService.items.forEach((product)=>{
      totalPrice = totalPrice+ this.cartProductQuantities.get(product.id)*product.price
    }) 
    return totalPrice +   this.cartService.getShippingCost()
  }
  totalProductPrice(product:Product){
    return this.cartProductQuantities.get(product.id)*product.price
  }
}
