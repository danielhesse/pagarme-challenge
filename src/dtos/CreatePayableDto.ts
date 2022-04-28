import { PayableStatus } from "../entities/Payable";

export interface CreatePayableDto {
  amount: number;
  status: PayableStatus;
  payment_date: Date;
}
