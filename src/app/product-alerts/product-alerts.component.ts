import { Component } from '@angular/core';
//to set up ProductAlertsComponent to receive product data, import Input
import { Input } from '@angular/core';
//to have the products available in this component
import { Product } from '../products';
//to allow ProductAlertsComponent to emit an event when the user click Notify Me button
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

//a property named product with an @Input() decorator, this decorator indicates that the property value passes in from the components parent, ProductListComponent
@Input() product! : Product;

//a property named notify with the @Output() decorator and an instance of EventEmitter() to emit an event when the value of the notify property changes
@Output() notify = new EventEmitter();

}
