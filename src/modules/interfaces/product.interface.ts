export interface Product {
  id: number;

  name: string;

  description: string;

  numberInStock: number;

  price: number;

  off: number;

  createdAt: Date;

  updatedAt: Date;
}

export interface CreateProduct
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'> {}

