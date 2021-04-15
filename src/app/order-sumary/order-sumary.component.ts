import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-order-sumary',
  templateUrl: './order-sumary.component.html'
})
export class OrderSumaryComponent implements OnInit {

  pedido: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pedido = this.route.snapshot.params['id']
  }

}
