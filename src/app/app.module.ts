import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
//To use HttpClient we must configure our application to use HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //defining path as '' tells angular this is the homepage
      {path: '', component: ProductListComponent},
    //add a route to productDetails with the path products/:productId and ProductDetailsComponent for the component
    {path: 'products/:productId', component: ProductDetailsComponent},
    //add route for the CartComponent
    {path: 'cart', component: CartComponent},
    //add a route to shipping
    {path: 'shipping', component: ShippingComponent}
    ]),
    BrowserAnimationsModule,
    //to register HttpClient providers globally, we add HttpClientModule to the imports
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
