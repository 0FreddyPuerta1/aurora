export interface IPayment {
  paymentId?: number;
  date: Date;
  amount: number;
  method: string;
  invoiceId: number;
}
