import { CreateTransactionDto } from "../dtos/CreateTransactionDto";
import { Transaction } from "../entities/Transaction";

export interface ITransactionsRepository {
  create(data: CreateTransactionDto): Transaction;
}
