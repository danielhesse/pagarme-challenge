import { InMemoryPayablesRepository } from "../../../tests/repositories/InMemoryPayablesRepository";
import { InMemoryTransactionsRepository } from "../../../tests/repositories/InMemoryTransactionsRepository";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";
import { handleDateAddingDays } from "../../utils/handleDateAddingDays";
import { RegisterPayable } from "../RegisterPayable/RegisterPayable";

let transactionsRepository: ITransactionsRepository;
let registerPayable: RegisterPayable;

describe("Register Payable Use Case", () => {
  beforeEach(() => {
    transactionsRepository = new InMemoryTransactionsRepository();
    const payablesRepository = new InMemoryPayablesRepository();

    registerPayable = new RegisterPayable(payablesRepository);
  })

  it("should be able to register a new payable with debit card", async () => {
    const transaction = transactionsRepository.create({
      amount: 10000,
      description: "AWS Services",
      payment_method: "debit_card",
      card_number: "1111222233334444",
      holder_name: "Daniel Hessel",
      exp_month: 12,
      exp_year: 2030,
      cvv: "123",
    });

    const result = await registerPayable.execute({
      amount: transaction.amount,
      payment_method: transaction.payment_method,
      createdAt: transaction.createdAt
    });

    expect(result.status).toEqual("paid");
    expect(result.payment_date).toEqual(transaction.createdAt);
    expect(result.amount).toEqual(9700);

    expect(result).toHaveProperty("id");
  });

  it("should be able to register a new payable with credit card", async () => {
    const transaction = transactionsRepository.create({
      amount: 10000,
      description: "AWS Services",
      payment_method: "credit_card",
      card_number: "1111222233334444",
      holder_name: "Daniel Hessel",
      exp_month: 12,
      exp_year: 2030,
      cvv: "123",
    });

    const result = await registerPayable.execute({
      amount: transaction.amount,
      payment_method: transaction.payment_method,
      createdAt: new Date("2022-04-28T21:59:21.910Z")
    });

    expect(result.status).toEqual("waiting_funds");
    expect(result.payment_date).toEqual(new Date("2022-05-28T21:59:21.910Z"));
    expect(result.amount).toEqual(9500);

    expect(result).toHaveProperty("id");
  });
});
