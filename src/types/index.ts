export interface UserType {
  name: string;
  phone: string;
  password: string;
  token: string;
  id?: string;
  address?: string;
  brightday?: string;
}


export interface LogInType {
  phone: string;
  password: string;
}

export interface SignUpType {
  name: string;
  phone: string;
  password: string;
  brightday?: string;
}

export interface ProductImage {
  url: string;
}

export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  stock_qty: number;
  images: ProductImage[];
  category: string;
  qty?: number; // Qo'shimcha maydon, agar kerak bo'lsa
}

export interface CategoryType {
  name: string;
  icon: string;
}