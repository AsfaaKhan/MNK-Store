export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  affiliateLink: string;
  createdAt: Date;
}

export interface ProductFormData {
  title: string;
  price: number | '';
  description: string;
  category: string;
  imageUrl?: string;
  affiliateLink: string;
}

export interface User {
  uid: string;
  email: string | null;
}
