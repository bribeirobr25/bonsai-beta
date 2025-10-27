export interface BonsaiTechnique {
  name: string;
  description: string;
  timing: string;
  maturityStage: string;
  notRecommended: boolean;
}

export interface BonsaiCareTips {
  general: string;
  soilType: string;
  feeding: string;
  watering: string;
}

export interface BonsaiImages {
  developmentStages: {
    early: string;
    middle: string;
    mature: string;
  };
  seasons: {
    spring: string;
    summer: string;
    autumn: string;
    winter: string;
  };
  styles: Record<string, string>;
  nature: Record<string, string>;
}

export interface ImageCredit {
  source: string;
  url?: string;
}

export interface BonsaiSpecies {
  id: string;
  scientificName: string;
  commonName: string;
  group: string;
  temperatureMin: number;
  temperatureMax: number;
  sunExposure: string;
  position: string;
  leafType: string;
  climate: string;
  flowering: string;
  nativeRegion: string;
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Expert';
  category?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Rare/Specialty';
  careTips: BonsaiCareTips;
  bonsaiStyles: string[];
  techniques: BonsaiTechnique[];
  images: BonsaiImages;
  imageCredits?: Record<string, ImageCredit>;
}

export type DifficultyLevel = BonsaiSpecies['difficultyLevel'];
export type Climate = 'Tropical' | 'Temperate' | 'Subtropical' | 'Mediterranean';

export interface SearchFilters {
  query: string;
  difficultyLevel?: DifficultyLevel;
  climate?: Climate;
  position?: string;
}