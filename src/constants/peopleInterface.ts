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

export interface PlanetProperties {
  created: string;
  edited: string;
  climate: string;
  surface_water: string;
  name: string;
  diameter: string;
  rotation_period: string;
  terrain: string;
  gravity: string;
  orbital_period: string;
  population: string;
  url: string;
}

export interface PlanetResult {
  properties: PlanetProperties;
  _id: string;
  description: string;
  uid: string;
  __v: number;
}

export interface PlanetDetailResponse {
  message: string;
  result: PlanetResult;
  apiVersion: string;
  timestamp: string;
  support: ISupport;
  social: ISocial;
}

export interface IPlanetInfo {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface IPersonInfo {
  uid: string;
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  url: string;
  planet: IPlanetInfo;
}

export interface loadingObj {
  nameLoading: boolean;
  detailsLoading: boolean;
}

export interface ITableComponent {
  loading: loadingObj;
  data: any[];
  showFavIcon?: boolean;
}

export interface IPersonalDetails {
  person: IPersonInfo;
}
