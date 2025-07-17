import { useMemo } from 'react';
import type { BonsaiSpecies } from '../types/bonsai';
import { 
  generateSEOMetadata, 
  generateStructuredDataPlant, 
  generateStructuredDataWebsite 
} from '../utils/seo';

export const useSEO = (species?: BonsaiSpecies) => {
  const metadata = useMemo(() => {
    return generateSEOMetadata(species);
  }, [species]);
  
  const structuredData = useMemo(() => {
    if (species) {
      return generateStructuredDataPlant(species);
    }
    return generateStructuredDataWebsite();
  }, [species]);
  
  return {
    metadata,
    structuredData
  };
};