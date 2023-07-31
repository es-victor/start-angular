import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule }from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductsComponent } from './products/products.component';
import { ProductNotifyComponent } from './product-notify/product-notify.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationBarComponent,
    ProductsComponent,
    ProductNotifyComponent,
    CartComponent,
    ProductDetailsComponent,
    ShippingComponent,
    PaymentComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"",component:ProductsComponent,},
      {path:"cart",component:CartComponent,},
      {path:"shipping",component:ShippingComponent,},
      {path:"products/:productId",component:ProductDetailsComponent,},
      {path:"payment",component:PaymentComponent,},
      {path:"**",component:PageNotFoundComponent,},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
