import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
order?: Order;

constructor(private router : Router){
  const navigation = this.router.getCurrentNavigation();
  this.order = navigation?.extras?.state as Order
}
}
