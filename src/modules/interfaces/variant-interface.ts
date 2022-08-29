export interface CreateVariant {
  name: string;
  numberInStock: number;

  price: number;

  off: number;
}

export interface Variant extends CreateVariant {
  id: number;

  createdAt: Date;
  updatedAt: Date;
}
