export const GALLERY_CATEGORIES = {
  DEVELOPMENT: 'development',
  SEASONS: 'seasons',
  STYLES: 'styles',
  NATURE: 'nature',
  TECHNIQUES: 'techniques'
} as const;

export type GalleryCategory = typeof GALLERY_CATEGORIES[keyof typeof GALLERY_CATEGORIES];

export const GALLERY_CONFIG = {
  [GALLERY_CATEGORIES.DEVELOPMENT]: {
    title: 'Development Stages',
    description: (speciesName: string) => `Follow the progression of ${speciesName} from early development through maturity.`
  },
  [GALLERY_CATEGORIES.SEASONS]: {
    title: 'Seasonal Changes',
    description: (speciesName: string) => `Observe how ${speciesName} transforms throughout the seasons.`
  },
  [GALLERY_CATEGORIES.STYLES]: {
    title: 'Bonsai Styles',
    description: (speciesName: string) => `Explore different styling approaches for ${speciesName}.`
  },
  [GALLERY_CATEGORIES.NATURE]: {
    title: 'In Natural Habitat',
    description: (speciesName: string) => `See ${speciesName} in its native environment and natural form.`
  },
  [GALLERY_CATEGORIES.TECHNIQUES]: {
    title: 'Bonsai Techniques',
    description: (speciesName: string) => `Professional techniques and timing for ${speciesName} care and styling.`
  }
} as const;

export const IMAGE_LABELS = {
  development: {
    early: 'Early Stage',
    middle: 'Middle Stage', 
    mature: 'Mature Stage'
  },
  seasons: {
    spring: 'Spring',
    summer: 'Summer',
    autumn: 'Autumn',
    winter: 'Winter'
  },
  styles: {
    rootOverRock: 'Root Over Rock',
    banyan: 'Banyan Style',
    cascade: 'Cascade',
    upright: 'Upright',
    literati: 'Literati',
    informalUpright: 'Informal Upright',
    raft: 'Raft Style'
  },
  nature: {
    habitat1: 'Natural Habitat',
    habitat2: 'Wild Environment',
    habitat3: 'Native Setting'
  }
} as const;