import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { bonsaiSpecies } from '../data/bonsaiData';
import BonsaiCollectionApp from '../App';
import BonsaiSpeciesDetail from './BonsaiDetail';
import { useSEO } from '../hooks/useSEO';
import SEOHead from './SEOHead';

const HomePage: React.FC = () => {
  const { metadata, structuredData } = useSEO();
  
  return (
    <>
      <SEOHead metadata={metadata} structuredData={structuredData} />
      <BonsaiCollectionApp />
    </>
  );
};

const SpeciesDetailPage: React.FC = () => {
  const { speciesId } = useParams<{ speciesId: string }>();
  const species = bonsaiSpecies.find(s => s.id === speciesId);
  
  const { metadata, structuredData } = useSEO(species);
  
  if (!species) {
    return (
      <div className="error-boundary">
        <div className="error-boundary-content">
          <h2 className="error-boundary-title">Species not found</h2>
          <p className="error-boundary-message">
            The requested bonsai species could not be found.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <SEOHead metadata={metadata} structuredData={structuredData} />
      <BonsaiSpeciesDetail 
        species={species} 
      />
    </>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/species/:speciesId" element={<SpeciesDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;