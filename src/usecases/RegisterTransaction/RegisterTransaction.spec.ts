import { InMemoryPayablesRepository } from "../../../tests/repositories/InMemoryPayablesRepository";
import { InMemoryTransactionsRepository } from "../../../tests/repositories/InMemoryTransactionsRepository";
import { RegisterPayable } from "../RegisterPayable/RegisterPayable";
import { RegisterTransaction } from "./RegisterTransaction";

describe("Register Transaction Use Case", () => {
  it("should be able to register a new transaction", async () => {
    const transactionsRepository = new InMemoryTransactionsRepository();
    const payablesRepository = new InMemoryPayablesRepository();

    const registerPayable = new RegisterPayable(payablesRepository);

    const registerTransaction = new RegisterTransaction(
      transactionsRepository,
      registerPayable
    );

    const result = await registerTransaction.execute({
      amount: 10000,
      description: "AWS Services",
      payment_method: "debit_card",
      card_number: "1111222233334444",
      holder_name: "Daniel Hessel",
      exp_month: 12,
      exp_year: 2030,
      cvv: "123",
    });

    const payables = payablesRepository.all();

    expect(payables).toHaveLength(1);
    expect(result).toHaveProperty("id");
  });
});
