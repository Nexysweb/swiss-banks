export interface MetaData {
  validForClearingDay: string;
  createdStamp: string;
}

export interface Entry {
  group: string;
  iid: number;
  branchId: string;
  sicIid: string;
  headOffice: number;
  iidType: string;
  validSince: string;
  sicParticipation: string;
  euroSicParticipation: string;
  language: string;
  shortName: string;
  bankOrInstitutionName: string;
  domicileAddress: string;
  postalAddress: string;
  zipCode: string;
  place: string;
  phone: string;
  countryCode: string;
  postalAccount: string;
  bic: string;
  fax: string;
  diallingCode: string;
  newIid?: number;
}

export interface Out {
  metaData: MetaData;
  entries: Entry[];
}
