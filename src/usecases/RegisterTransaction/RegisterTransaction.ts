import { CreateTransactionDto } from "../../dtos/CreateTransactionDto";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";
import { RegisterPayable } from "../RegisterPayable/RegisterPayable";

export class RegisterTransaction {
  constructor(
    private transactionsRepository: ITransactionsRepository,
    private registerPayable: RegisterPayable
  ) { }

  async execute({
    amount,
    description,
    payment_method,
    card_number,
    holder_name,
    exp_month,
    exp_year,
    cvv,
  }: CreateTransactionDto) {
    const lastFourDigitsOfTheCard = card_number.slice(card_number.length - 4);

    const transaction = this.transactionsRepository.create({
      amount,
      description,
      payment_method,
      card_number: lastFourDigitsOfTheCard,
      holder_name,
      exp_month,
      exp_year,
      cvv,
    });

    this.registerPayable.execute({
      amount,
      payment_method,
      createdAt: transaction.createdAt
    });

    return transaction;
  }
}
