import { CreateTransactionDto } from "../../src/dtos/CreateTransactionDto";
import { Transaction } from "../../src/entities/Transaction";
import { ITransactionsRepository } from "../../src/repositories/ITransactionsRepository";

export class InMemoryTransactionsRepository implements ITransactionsRepository {
  constructor(private transactions: Transaction[] = []) { }

  all(): Transaction[] {
    return this.transactions;
  }

  create(data: CreateTransactionDto): Transaction {
    const transaction = new Transaction();

    Object.assign(transaction, data);

    this.transactions.push(transaction);

    return transaction;
  }
}
