

//A service is an instance of a class that you can make available to any part of your application using Angular's dependency injection system.

import { Injectable } from '@angular/core';
//import the product interface
import { Product } from './products';
//import HttpClient so the application can fetch data and interact with external API's and resources
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //define a items property to store the array of the current products in the cart
  items: Product[] = [];

  //define methods to add items to the cart, return cart items and clear the cart items
  //add items to the cart
  //the method takes a product of type Product as a parameter and it pushes that parameter into the items array 
  addToCart(product: Product) {
    this.items.push(product); 
  }

  //method to return cart items
  //collects the items users add to the cart and returns each item with its associated quantity
  getItems(){
    return this.items;
  }

  //method to clear cart items
  //returns an empty array of items, which empties the cart
  clearCart(){
    this.items = [];
    return this.items;
  }

  //inject HttpClient into the constructor
  constructor(private http: HttpClient) { }

  //to get shipping data from shiååing.json, we can use HttpClient get() method
  //we define a new getShippingPrices() that uses the HttpClient get()
  getShippingPrices(){
    //it returns this http.get method calling the object with a type string and a price type number array from assets/shipping.json
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  //now we configured the app to retrieve shipping data, next we create a component to render that data
}
