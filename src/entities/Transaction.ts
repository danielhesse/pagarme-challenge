import { BaseEntity } from "./BaseEntity";

export enum ETransactionPaymentMethods {
  "credit_card",
  "debit_card"
}

export class Transaction extends BaseEntity {
  amount: number;

  description: string;

  payment_method: ETransactionPaymentMethods;

  card_number: string;

  holder_name: string;

  exp_month: number;

  exp_year: number;

  cvv: string;
}
