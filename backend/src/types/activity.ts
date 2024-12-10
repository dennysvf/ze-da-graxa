export type ActivityType = 
  | 'order_created'
  | 'order_updated'
  | 'order_completed'
  | 'product_updated'
  | 'customer_registered'
  | 'payment_received';

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  metadata?: {
    orderId?: string;
    productId?: string;
    customerId?: string;
    amount?: number;
  };
}
