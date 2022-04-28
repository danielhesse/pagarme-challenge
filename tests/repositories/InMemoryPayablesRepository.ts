import { CreatePayableDto } from "../../src/dtos/CreatePayableDto";
import { Payable } from "../../src/entities/Payable";
import { IPayablesRepository } from "../../src/repositories/IPayablesRepository";

export class InMemoryPayablesRepository implements IPayablesRepository {
  constructor(private payables: Payable[] = []) { }

  all(): Payable[] {
    return this.payables;
  }

  create(data: CreatePayableDto): Payable {
    const payable = new Payable();

    Object.assign(payable, data);

    this.payables.push(payable);

    return payable;
  }
}
