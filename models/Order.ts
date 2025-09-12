import { Product } from './Product';

export interface Order {
  id: string;
  userId: string;
  userName: string;
  userAddress: string;
  userPhone: string;
  products: Product[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
  date: Date;
}