import { Product } from './product';

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  cant: number;
  price: number;

  constructor(id: number, product: Product, cant = 1) {
    this.id = id;
    this.productId = product._id;
    this.productName = product.name;
    this.price = product.price;
    this.cant = cant;
  }
}
