export interface CharacterSummary {
  uid: string;
  name: string;
  url: string;
}

export interface PartnerDiscount {
  link: string;
  details: string;
}

export interface PartnerDiscounts {
  saberMasters: PartnerDiscount;
  heartMath: PartnerDiscount;
}

export interface SupportInfo {
  contact: string;
  donate: string;
  partnerDiscounts: PartnerDiscounts;
}

export interface SocialLinks {
  discord: string;
  reddit: string;
  github: string;
}

export interface CharacterSummaryResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: CharacterSummary[];
  apiVersion: string;
  timestamp: string;
  support: SupportInfo;
  social: SocialLinks;
}
