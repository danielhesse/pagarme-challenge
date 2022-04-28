import { CreateTransactionDto } from "../../dtos/CreateTransactionDto";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

export class RegisterTransaction {
  constructor(private transactionsRepository: ITransactionsRepository) { }

  async execute(data: CreateTransactionDto) {
    const transaction = this.transactionsRepository.create(data);

    return transaction;
  }
}
