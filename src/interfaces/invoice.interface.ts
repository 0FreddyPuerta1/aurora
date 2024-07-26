export interface IInvoice {
  invoiceId?: number;
  orderId: number;
  date: Date;
  totalAmount: number;
  tax: number;
  paymentId: number;
}
