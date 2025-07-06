import type { IPersonInfo } from "./peopleInterface";

export interface IFilmData {
  message: string;
  result: IFilmDetails[];
  apiVersion: string;
  timestamp: string;
  support: {
    contact: string;
    donate: string;
    partnerDiscounts: {
      saberMasters: {
        link: string;
        details: string;
      };
      heartMath: {
        link: string;
        details: string;
      };
    };
  };
  social: {
    discord: string;
    reddit: string;
    github: string;
  };
}

export interface IFilmDetails {
  properties: IFilmProperties;
  _id: string;
  description: string;
  uid: string;
  __v: number;
}

export interface IFilmProperties {
  created: string;
  edited: string;
  starships: string[];
  vehicles: string[];
  planets: string[];
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  characters: string[];
  species: string[];
  url: string;
}

export interface IFilmDetailsComp {
  films: string[];
  loading: boolean;
}
