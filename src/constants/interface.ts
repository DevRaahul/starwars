export interface ICharacterDetails {
  uid: string;
  name: string;
  url: string;
}

export interface ITableList {
  data: ICharacterDetails[];
}

export interface IDiscount {
  link: string;
  details: string;
}

export interface IDiscounts {
  saberMasters: IDiscount;
  heartMath: IDiscount;
}

export interface ISupport {
  contact: string;
  donate: string;
  partnerDiscounts: IDiscounts;
}

export interface ISocial {
  discord: string;
  reddit: string;
  github: string;
}

export interface IPeopleApi {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: ICharacterDetails[];
  apiVersion: string;
  timestamp: string;
  support: ISupport;
  social: ISocial;
}

export interface PersonProperties {
  created: string;
  edited: string;
  name: string;
  gender: string;
  skin_color: string;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  homeworld: string;
  birth_year: string;
  url: string;
}

export interface IHero {
  properties: PersonProperties;
  _id: string;
  description: string;
  uid: string;
  __v: number;
}
export interface IHeroDetails {
  message: string;
  result: IHero;
  apiVersion: string;
  timestamp: string;
  support: ISupport;
  social: ISocial;
}
