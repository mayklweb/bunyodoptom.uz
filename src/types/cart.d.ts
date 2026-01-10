export interface CartImage {
  url: string;
}

export interface CartItemType {
  id: number;
  name: string;
  price?: number;
  qty: number;
  images: CartImage[];
}
