export class Product {
  _id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    _id,
    name,
    description = '',
    price = 0,
    imageUrl = 'https://www.sonor.com/uploads/tx_revslider/media/3c15c-ProLite-Header-Bild-EWS.png'
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
