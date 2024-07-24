export interface IProduct {
  productId?: number;
  name: string;
  description: string;
  price: number;
  unitType: string;
  quantityInStock: number;
  providerId: number;
  imageUrl: string;
  reference: string;
  ivaCategory: string;
}
