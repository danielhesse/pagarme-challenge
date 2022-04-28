import crypto from "crypto";

export class BaseEntity {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }

    this.updatedAt = new Date();
  }
}
