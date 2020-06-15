import { Component, OnInit } from '@angular/core';

import { ConectorService } from './../../../services/conector.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [
    //{ id: 1, productId: 1, productName: 'Prueba 1', cant: 4, price: 1000 },
    //{ id: 2, productId: 3, productName: 'Prueba 3', cant: 5, price: 40 },
    //{ id: 3, productId: 2, productName: 'Prueba 2', cant: 3, price: 190 },
    //{ id: 4, productId: 1, productName: 'Prueba 4', cant: 2, price: 150 },
  ];

  cartTotal = 0;

  constructor(private msg: ConectorService) {}

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].cant++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        cant: 1,
        price: product.price,
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.cant * item.price;
    });
  }
}
