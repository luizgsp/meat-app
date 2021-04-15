import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { Component, OnInit } from '@angular/core';

import { RadioOption } from '../shared/radio/radio-opion.model'
import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})

export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Refeição', value: 'REF'}
  ]


  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: any){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: any){
    this.orderService.decreaseQty(item)
  }

  remove(item: any){
    this.orderService.remove(item)
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
      .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        console.log(`Compra concluida: ${orderId}`)
        this.orderService.clear()
    })
    console.log(order)
  }
  

}
