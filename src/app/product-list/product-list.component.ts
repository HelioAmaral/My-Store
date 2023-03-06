import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //defines a products property that contains imported data for each product from the products array in products.ts
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  //a onNotify() that defines a behavior that happens when the user clicks the button Notify Me
  onNotify(){
    window.alert('You will be notified when the product goes into sale!')
  }
}
