import { BaseEntity } from "./BaseEntity";

export type PayableStatus = "paid" | "waiting_funds";

export class Payable extends BaseEntity {
  amount: number;

  status: PayableStatus;

  payment_date: Date;
}
