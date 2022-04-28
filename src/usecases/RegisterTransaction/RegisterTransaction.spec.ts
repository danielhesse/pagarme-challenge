import { InMemoryTransactionsRepository } from "../../../tests/repositories/InMemoryTransactionsRepository";
import { ETransactionPaymentMethods } from "../../entities/Transaction";
import { RegisterTransaction } from "./RegisterTransaction";

describe("Register Transaction Use Case", () => {
  it("should be able to register a new transaction", async () => {
    const transactionsRepository = new InMemoryTransactionsRepository();
    const registerTransaction = new RegisterTransaction(transactionsRepository);

    const result = await registerTransaction.execute({
      amount: 10000,
      description: "AWS Services",
      payment_method: ETransactionPaymentMethods.credit_card,
      card_number: "1111222233334444",
      holder_name: "Daniel Hessel",
      exp_month: 12,
      exp_year: 2030,
      cvv: "123",
    });

    console.log(result);
    expect(result).toHaveProperty("id");
  });
});
