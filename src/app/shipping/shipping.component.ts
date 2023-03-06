import { Component, OnInit } from '@angular/core';
//import Observable from rxjs
import { Observable } from 'rxjs';
//import CartService so we can retrieve the shipping data into the component from shipping.json
import { CartService } from '../cart.service';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  //inject the cartService into the constructor
  constructor(private cartService: CartService){};

  //define a shippingCosts property that sets the shippingCosts property using the getShippingPrices() from the CartService.
  shippingCosts!: Observable<{type: string, price: number}[]>
  
  
  
  //We initialize it inside ngOnInit
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
