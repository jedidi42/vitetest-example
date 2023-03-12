//const sum =require ('./sum')
import sum from "./sum";
import { test, expect } from "vitest";

test("sum() should do basic addition", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
