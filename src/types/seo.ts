export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export interface StructuredDataPlant {
  '@context': string;
  '@type': string;
  name: string;
  scientificName: string;
  description: string;
  image: string[];
  url: string;
  additionalType: string;
  hasVariant?: StructuredDataVariant[];
  mainEntityOfPage?: {
    '@type': string;
    '@id': string;
  };
  author?: {
    '@type': string;
    name: string;
  };
  publisher?: {
    '@type': string;
    name: string;
  };
  datePublished?: string;
  dateModified?: string;
}

export interface StructuredDataVariant {
  '@type': string;
  name: string;
  description: string;
  image: string;
}

export interface StructuredDataWebsite {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  potentialAction: {
    '@type': string;
    target: string;
    'query-input': string;
  };
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@type': string;
    name: string;
  };
}