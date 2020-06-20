import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id;
  producto = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.productService.getById(this.id).subscribe((data) => {
      console.log(data);
      this.producto[0];
    });
  }

  ngOnInit(): void {}
}
