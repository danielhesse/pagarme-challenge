import { ETransactionPaymentMethods } from "../entities/Transaction";

export interface CreateTransactionDto {
  amount: number;
  description: string;
  payment_method: ETransactionPaymentMethods;
  card_number: string;
  holder_name: string;
  exp_month: number;
  exp_year: number;
  cvv: string;
}
