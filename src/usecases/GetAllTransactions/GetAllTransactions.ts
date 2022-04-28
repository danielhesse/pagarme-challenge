import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

export class GetAllTransactions {
  constructor(private transactionsRepository: ITransactionsRepository) { }

  async execute() {
    return this.transactionsRepository.all();
  }
}
