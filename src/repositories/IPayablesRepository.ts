import { CreatePayableDto } from "../dtos/CreatePayableDto";
import { Payable } from "../entities/Payable";

export interface IPayablesRepository {
  create(data: CreatePayableDto): Payable;
  all(): Payable[];
}
