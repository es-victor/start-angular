import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { products,Product } from '../product-lists';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private cartService:CartService){}
  product_list = products

  share(name:string){
    window.alert(`Product alert ${name}`)
  }
  
  onNotify(product:Product){
    window.alert(`You will be notified when "${product.name}" is on Sale`)
  }
  
  addToCart(product:Product){
    this.cartService.addProductToCart(product);
  }

  removeProductFromCart(id:number){
    this.cartService.removeProductFromCart(id)
  }

  thisIsInTheCart(product:Product){
    return this.cartService.isInTheCart(product)
  }
}
