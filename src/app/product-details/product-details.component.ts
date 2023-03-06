import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
//import the cart service to add a product to the cart
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  //inject ActivatedRoute, it is specific to each component that Angular Router loads. ActivatedRoute contains information about the route and the route's parameters.
  //By injecting ActivatedRoute we are configuring the component to use a service
  //inject the cartService by adding it to the constructor
  constructor(private route: ActivatedRoute, private cartService: CartService){}

  //in the ngOnInit() extract the productId from the route parameters and find the corresponding product in the products array
  ngOnInit(): void {
    //get the product id from the current route
    //to access the route parameters, we use route.snapshot, which is  the ActivatedRouteSnapshot taht contains information about the active route at that particular moment in time. The URL that matches the route provides the productId. Angular uses the productId to display the details for each unique product
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //find the product that correspond with the id provided in route
    this.product = products.find((product) => product.id === productIdFromRoute);
  }

  //define the addToCart(), which adds the current product to the cart
  //this method does:
  //takes the current product as an argument
  //uses the cartService addToCart() - this method was created inside the cartService.ts -  to add the product to the cart
  //displays a message that product was added
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!')
  }

}
