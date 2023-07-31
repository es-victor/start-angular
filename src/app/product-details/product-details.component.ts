import { Component,OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products,Product } from '../product-lists';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  // get product details using id from request params
  product: Product | any;
  size: any
  constructor(private route:ActivatedRoute, private cartService:CartService){
  // ...
}

addToCart(product:Product){
  this.cartService.addProductToCart(product);
}

ngOnInit(): void {
  // get the id
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  
  // get the product
  this.product =products.find(product=>product.id===productIdFromRoute);
  }
  
  removeProductFromCart(id:number){
    this.cartService.removeProductFromCart(id)
  }

  thisIsInTheCart(){
    return this.cartService.isInTheCart(this.product)
  }
}
