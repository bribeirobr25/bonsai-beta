import { useState, useMemo } from 'react';
import type { BonsaiSpecies, SearchFilters } from '../types/bonsai';

export const useSearch = (species: BonsaiSpecies[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Partial<SearchFilters>>({});

  const filteredSpecies = useMemo(() => {
    return species.filter(s => {
      const matchesQuery = !searchQuery || 
        s.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.difficultyLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.leafType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.climate.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.nativeRegion.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.flowering.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.sunExposure.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return (s as any)[key] === value;
      });

      return matchesQuery && matchesFilters;
    });
  }, [species, searchQuery, filters]);

  const updateSearch = (query: string) => {
    setSearchQuery(query);
  };

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilters({});
  };

  return {
    searchQuery,
    filters,
    filteredSpecies,
    updateSearch,
    updateFilters,
    clearSearch
  };
};