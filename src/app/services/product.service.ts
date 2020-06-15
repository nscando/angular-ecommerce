import { Injectable } from '@angular/core';

import { Product } from './../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Product 1', 'Prueba de descripcion de producto!', 150),
    new Product(2, 'Product 2', 'Prueba de descripcion de producto!', 1150),
    new Product(3, 'Product 3', 'Prueba de descripcion de producto!', 50),
    new Product(4, 'Product 4', 'Prueba de descripcion de producto!', 150),
    new Product(5, 'Product 5', 'Prueba de descripcion de producto!', 250),
    new Product(6, 'Product 6', 'Prueba de descripcion de producto!', 350),
    new Product(7, 'Product 7', 'Prueba de descripcion de producto!', 550),
    new Product(8, 'Product 8', 'Prueba de descripcion de producto!', 650),
  ];

  constructor() {}

  getProducts(): Product[] {
    //los datos de los productos van a venir desde la API - va a retornar un Observable
    return this.products;
  }
}
