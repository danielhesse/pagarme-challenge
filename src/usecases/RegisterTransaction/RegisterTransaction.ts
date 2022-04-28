import { CreateTransactionDto } from "../../dtos/CreateTransactionDto";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

export class RegisterTransaction {
  constructor(private transactionsRepository: ITransactionsRepository) { }

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

    return transaction;
  }
}
