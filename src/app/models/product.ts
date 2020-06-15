export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id,
    name,
    description = '',
    price = 0,
    imageUrl = 'https://www.sonor.com/uploads/tx_revslider/media/3c15c-ProLite-Header-Bild-EWS.png'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
