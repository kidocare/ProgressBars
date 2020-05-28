import "jsdom-global/register";
import { addToBar } from "./script";
import { barSelect } from "./script";
import { expect } from "chai";

describe("check the  equal or bigger than limitation or smaller than 0", () => {
  it("check the bigger than limitation", () => {
    const expected = {};
    const actual = addToBar("");
    expect(actual).to.deep.equal(expected);
  });
});
describe("add active class to the selected bar", () => {
  it("selecting bar", () => {
    const expected = {};
    const actual = barSelect("");
    expect(actual).to.deep.equal(expected);
  });
});
