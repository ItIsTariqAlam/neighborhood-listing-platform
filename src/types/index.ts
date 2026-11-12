export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  imageAlt: string;
}

export interface Sponsor {
  id: string;
  sponsorName: string;
  sponsorLogoUrl: string;
  targetUrl: string;
  description?: string;
}