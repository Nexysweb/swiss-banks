import * as T from "./type";
import data from "./data";

export const ibanToIid = (iban: string): number => Number(iban.slice(4, 9));

export const ibanToBank = (iban: string): T.Entry => {
  const iid = ibanToIid(iban);
  const a = data.entries.filter((x) => x.iid === iid).map((x) => x.bic);
  console.log(a);
  const f = data.entries.find((x) => x.iid === iid);

  if (!f) {
    throw Error("no bank could be found");
  }

  return f;
};

export const ibanToBic = (iban: string): string => ibanToBank(iban).bic;
