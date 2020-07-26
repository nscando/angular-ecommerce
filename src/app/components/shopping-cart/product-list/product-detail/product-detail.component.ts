import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id: string;
  producto = {
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  };
  productos = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.productService.getById().subscribe((data) => {

      this.productos.push(data);
      this.productos.find((result) => {
        result.forEach((item) => {
          if (item._id == this.id) {
            console.log(item);
            this.producto = item;
          }
        });
      });
    });
  }

  ngOnInit(): void { }
}
