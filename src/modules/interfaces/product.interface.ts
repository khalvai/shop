export interface Product {
  id: number;

  name: string;

  description: string;

  numberInStock: number;

  price: number;

  off: number;

  createdAt: Date;

  updatedAt: Date;

  pictures?: Array<Picture>;

  // [index: number]: { id: number; url: string; productId: number };
}

export interface CreateProduct
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'> {}

interface Picture {
  id: number;
  url: string;
  productId: number;
}
