import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { userRoles } from '../user-roles';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  // define form fields
  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.email,Validators.required],
    roleId: [1, Validators.required],
  });

  roles = userRoles;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  // on form submit
  onSubmit(): void {
    // this.cartService.clearCart()
    console.debug('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
