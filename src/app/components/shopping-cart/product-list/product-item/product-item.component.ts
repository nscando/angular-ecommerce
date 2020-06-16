import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ConectorService } from './../../../../services/conector.service';

import { CartService } from './../../../../services/cart.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor(private msg: ConectorService, private cartService: CartService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
    });
  }
}
