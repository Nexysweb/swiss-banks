import D from "./data";

const banksNyon = [
  {
    iid: 228,
    name: "UBS CH",
  },
  {
    iid: 584,
    name: "CS (Schweiz) AG",
  },
  {
    iid: 4541,
    name: "CS (Schweiz) AG",
  },
  {
    iid: 4835,
    name: "CS (Schweiz) AG",
  },
  {
    iid: 8326,
    name: "CEN",
  },
  {
    iid: 8374,
    name: "CACEIS PARIS",
  },
  {
    iid: 8401,
    name: "Banque Migros",
  },
  {
    iid: 8767,
    name: "BORDIER & Cie",
  },
  {
    iid: 30198,
    name: "CEN",
  },
  {
    iid: 30203,
    name: "CACEIS PARIS",
  },
  {
    iid: 76725,
    name: "BCV",
  },
  {
    iid: 76765,
    name: "BCV",
  },
  {
    iid: 80442,
    name: "Raiffeisen",
  },
];

test("banks in Nyon", () => {
  const zip = 1260;
  const banks = D.entries.filter((x) => Number(x.zipCode) === zip);

  const bankNames = banks.map((x) => ({
    name: x.shortName,

    iid: x.iid,
  }));

  expect(bankNames).toEqual(banksNyon);
});
