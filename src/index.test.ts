import * as I from "./index";

test("iban to bic", () => {
  const iban = "CH38002282211339301G";
  expect(I.ibanToIid(iban)).toEqual(228);
});

describe("iban to bic", () => {
  test("UBS", () => {
    const iban = "CH38002282211339301G";
    // it seems UBS has changed its policy around IBAN, see
    // https://www.ubs.com/ch/en/help/account/iban.html
    const bicExpected = "UBSWCHZH12T"; //"UBSWCHZH80A";
    const bic = I.ibanToBic(iban);

    expect(bic).toEqual(bicExpected);
  });

  test("Postfinance", () => {
    const iban = "CH1809000000144788618";
    const bicExpected = "POFICHBEXXX";
    const bic = I.ibanToBic(iban);

    expect(bic).toEqual(bicExpected);
  });

  test("Credit Suisse", () => {
    const iban = "CH8604835248319801000";
    const bicExpected = "CRESCHZZ80A";
    const bic = I.ibanToBic(iban);

    expect(bic).toEqual(bicExpected);
  });

  test("BCV", () => {
    const iban = "CH6600767000L54832382";
    const bicExpected = "BCVLCH2LXXX";
    const bic = I.ibanToBic(iban);

    expect(bic).toEqual(bicExpected);
  });
});
