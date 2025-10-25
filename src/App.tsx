import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, TreePine, Leaf, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BonsaiSpeciesCard from './components/BonsaiCard';
import SkeletonCard from './components/SkeletonCard';
import ErrorBoundary from './components/ErrorBoundary';
import { bonsaiSpecies } from './data/bonsaiData';
import { useSearch, useLoadingState } from './hooks';
import type { BonsaiSpecies } from './types/bonsai';
import './App.css';

function BonsaiCollectionApp() {
  const navigate = useNavigate();
  const { searchQuery, filteredSpecies, updateSearch, clearSearch } = useSearch(bonsaiSpecies);
  const { isLoading } = useLoadingState(1000);

  const handleSpeciesSelection = (species: BonsaiSpecies) => {
    navigate(`/species/${species.id}`);
  };

  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearch(event.target.value);
  };

  const clearSearchQuery = () => {
    clearSearch();
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="header-navigation">
            <div className="header-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <TreePine className="brand-icon" />
              <h1 className="brand-title">Bonsai Collection</h1>
            </div>
            <nav className="header-nav">
              <button onClick={() => navigate('/basics')} className="nav-link">Getting Started</button>
              <button onClick={() => navigate('/history')} className="nav-link">History</button>
              <button onClick={() => navigate('/about')} className="nav-link">About</button>
            </nav>
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
              type="text"
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
              {filteredSpecies.length} result{filteredSpecies.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>
      </section>

      <section className="species-grid-section">
        {isLoading ? (
          <div className="species-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : filteredSpecies.length === 0 ? (
          <div className="empty-state">
            <TreePine className="empty-state-icon" />
            <h3 className="empty-state-title">No species found</h3>
            <p className="empty-state-description">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="species-grid">
            {filteredSpecies.map((species) => (
              <ErrorBoundary key={species.id} fallbackMessage="Error loading species card.">
                <BonsaiSpeciesCard
                  species={species}
                  onClick={handleSpeciesSelection}
                />
              </ErrorBoundary>
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

