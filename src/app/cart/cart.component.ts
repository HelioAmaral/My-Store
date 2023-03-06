import { Component } from '@angular/core';

//import the cartService to display the cart
import { CartService } from '../cart.service';
//import FormBuilder - this service provides convenient methods for generating controls and to build forms
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

//inject the CartService so that the CartComponent can use it by adding it to the constructor
//inject FormBuilder into the constructor. This service is part of the ReactiveFormsmodule that we already imported in the app.module.ts
constructor(private cartService: CartService, private formBuilder: FormBuilder){};

//define the items property to store the products in the cart
//we need to get the items from the cartService. we defined this method when we created cart.service.ts
items = this.cartService.getItems();

//to gather the users name and address, we use the FormBuilder group() to set the checkoutForm property to a form model containing name and address fields
checkoutForm = this.formBuilder.group({
  name: '',
  address: ''
});

//we define an onSubmit() to process the form to allow users to submit their name and address
//we also use here the clearCart() of the CartService to reset the form and clear the cart
onSubmit(): void{
  //on submit the cart is cleared by this method
  this.items = this.cartService.clearCart();
  //a console warn sends a message with the data the users input
  console.warn('Your order was submited', this.checkoutForm.value);
  //the form is reseted by .reset()
  this.checkoutForm.reset();
}


}
