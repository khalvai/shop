export interface Product {
  id: number;

  name: string;

  description: string;

  createdAt: Date;

  updatedAt: Date;

  pictures?: Array<Picture>;
}

export interface CreateProduct
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'> {}

interface Picture {
  id: number;
  url: string;
  productId: number;
}
