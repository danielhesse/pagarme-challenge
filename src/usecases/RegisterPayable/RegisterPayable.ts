import { PayableStatus } from "../../entities/Payable";
import { TransactionPaymentMethod } from "../../entities/Transaction";
import { IPayablesRepository } from "../../repositories/IPayablesRepository";
import { handleDateAddingDays } from "../../utils/handleDateAddingDays";
import { handlePercentage } from "../../utils/handlePercentage";

interface IRegisterPayableRequest {
  payment_method: TransactionPaymentMethod;
  amount: number;
  createdAt: Date;
}

export class RegisterPayable {
  constructor(private payablesRepository: IPayablesRepository) { }

  async execute({ payment_method, amount, createdAt }: IRegisterPayableRequest) {
    let status: PayableStatus;
    let payment_date: Date;

    // Processing fee
    const fee = payment_method === "debit_card" ? 3 : 5;

    if (payment_method === "debit_card") {
      status = "paid";

      // Transaction creation date D+0
      payment_date = createdAt;
    }

    if (payment_method === "credit_card") {
      status = "waiting_funds";

      // Transaction creation date D+30
      payment_date = handleDateAddingDays(createdAt, 30);
    }

    const liquidAmount = handlePercentage(amount, fee);

    const payable = this.payablesRepository.create({
      amount: liquidAmount,
      status,
      payment_date,
    });

    return payable;
  }
}
