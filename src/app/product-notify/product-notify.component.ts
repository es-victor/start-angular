import { Component,EventEmitter,Input, Output } from '@angular/core';
import { products } from '../product-lists';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-product-notify',
  templateUrl: './product-notify.component.html',
  styleUrls: ['./product-notify.component.css']
})
export class ProductNotifyComponent {
  @Input() product: any | undefined
  
  @Output() notify = new EventEmitter()
}
