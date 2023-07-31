import { Component ,Input,OnInit,OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
  export class NavigationBarComponent   {
    cartSizes =20
    size:any
  constructor(private cartService:CartService){}
 get d():number {
  return this.cartService.count
 }
}
