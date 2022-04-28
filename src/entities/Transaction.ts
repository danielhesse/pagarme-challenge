import { BaseEntity } from "./BaseEntity";

export type TransactionPaymentMethod = "debit_card" | "credit_card";

export class Transaction extends BaseEntity {
  amount: number;

  description: string;

  payment_method: TransactionPaymentMethod;

  card_number: string;

  holder_name: string;

  exp_month: number;

  exp_year: number;

  cvv: string;
}
