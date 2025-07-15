import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, TreePine, Leaf, Camera, ArrowRight } from 'lucide-react';
import BonsaiSpeciesCard from './components/BonsaiCard';
import BonsaiSpeciesDetail from './components/BonsaiDetail';
import { bonsaiSpecies } from './data/bonsaiData';
import './App.css';

function BonsaiCollectionApp() {
  const [currentlySelectedSpecies, setCurrentlySelectedSpecies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredSpeciesList = () => bonsaiSpecies.filter(species =>
    species.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    species.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    species.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
    species.difficultyLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    species.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    species.leafType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    species.climate.toLowerCase().includes(searchQuery.toLowerCase()) ||
    species.nativeRegion.toLowerCase().includes(searchQuery.toLowerCase()) ||
    species.flowering.toLowerCase().includes(searchQuery.toLowerCase()) ||
    species.sunExposure.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSpeciesList = getFilteredSpeciesList();

  const handleSpeciesSelection = (species) => {
    setCurrentlySelectedSpecies(species);
  };

  const handleBackToCollection = () => {
    setCurrentlySelectedSpecies(null);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearSearchQuery = () => {
    setSearchQuery('');
  };

  if (currentlySelectedSpecies) {
    return (
      <BonsaiSpeciesDetail 
        species={currentlySelectedSpecies} 
        onBack={handleBackToCollection} 
      />
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="header-navigation">
            <div className="header-brand">
              <TreePine className="brand-icon" />
              <h1 className="brand-title">Bonsai Collection</h1>
            </div>
            <div className="header-stats">
              <span className="stats-indicator">
                <div className="stats-dot"></div>
                {bonsaiSpecies.length} Species
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            Discover the Art of
            <span className="hero-subtitle">Bonsai Cultivation</span>
          </h2>
          <p className="hero-description">
            A curated collection of bonsai species with comprehensive care guides, 
            development stages, and seasonal photography.
          </p>
        </div>
      </section>

      <section className="search-section">
        <div className="search-container">
          <div className="search-field-wrapper">
            <Search className="search-icon" />
            <Input
              placeholder="Search species, care level, or characteristics..."
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="search-field"
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={clearSearchQuery}
                className="search-clear-button"
              >
                ✕
              </Button>
            )}
          </div>
          {searchQuery && (
            <p className="search-results-count">
              {filteredSpeciesList.length} result{filteredSpeciesList.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>
      </section>

      <section className="species-grid-section">
        {filteredSpeciesList.length === 0 ? (
          <div className="empty-state">
            <TreePine className="empty-state-icon" />
            <h3 className="empty-state-title">No species found</h3>
            <p className="empty-state-description">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="species-grid">
            {filteredSpeciesList.map((species) => (
              <BonsaiSpeciesCard
                key={species.id}
                species={species}
                onClick={handleSpeciesSelection}
              />
            ))}
          </div>
        )}
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-inner">
            <div className="about-header">
              <h3 className="about-title">About This Collection</h3>
              <p className="about-description">
                Each species in our collection includes detailed care information, 
                development stages, and high-quality photography to guide your bonsai journey.
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <Camera className="feature-icon" />
                </div>
                <h4 className="feature-title">Visual Documentation</h4>
                <p className="feature-description">
                  Development stages, seasonal changes, and styling techniques captured in detail.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <Leaf className="feature-icon" />
                </div>
                <h4 className="feature-title">Care Guidelines</h4>
                <p className="feature-description">
                  Comprehensive care instructions tailored to each species' unique requirements.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <TreePine className="feature-icon" />
                </div>
                <h4 className="feature-title">Expert Techniques</h4>
                <p className="feature-description">
                  Professional techniques for pruning, wiring, and styling your bonsai trees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-info">
            <TreePine className="footer-icon" />
            <span className="footer-brand">Bonsai Collection</span>
            <span className="footer-separator">•</span>
            <span className="footer-tagline">A guide to bonsai cultivation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BonsaiCollectionApp;

