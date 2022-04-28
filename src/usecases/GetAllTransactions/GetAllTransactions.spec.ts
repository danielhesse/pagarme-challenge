import { InMemoryTransactionsRepository } from "../../../tests/repositories/InMemoryTransactionsRepository";
import { ETransactionPaymentMethods } from "../../entities/Transaction";
import { GetAllTransactions } from "./GetAllTransactions";

describe("Get All Transactions Use Case", () => {
  it("should be able to list all transactions", async () => {
    const transactionsRepository = new InMemoryTransactionsRepository();
    const getAllTransactions = new GetAllTransactions(transactionsRepository);

    transactionsRepository.create({
      amount: 10000,
      description: "AWS Services",
      payment_method: ETransactionPaymentMethods.credit_card,
      card_number: "1111222233334444",
      holder_name: "Daniel Hessel",
      exp_month: 12,
      exp_year: 2030,
      cvv: "123",
    });

    transactionsRepository.create({
      amount: 10000,
      description: "AWS Services",
      payment_method: ETransactionPaymentMethods.credit_card,
      card_number: "1111222233334444",
      holder_name: "Daniel Hessel",
      exp_month: 12,
      exp_year: 2030,
      cvv: "123",
    });

    const result = await getAllTransactions.execute();

    expect(result).toHaveLength(2);
  });
});
