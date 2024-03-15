import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrdersComponent implements OnInit{
  orders : Order[] = [];

  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrdersForUser().subscribe({
      next : order => this.orders = order,
    })
  }

}
