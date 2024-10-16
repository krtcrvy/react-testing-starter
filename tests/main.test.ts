import { it, expect, describe } from "vitest";
import { db } from "./mocks/db";

describe("group", () => {
  it("should", () => {
    const product = db.product.create();
    console.log(db.product.delete({ where: { id: { equals: product.id } } }));
  });
});
