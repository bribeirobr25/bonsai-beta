import React from 'react';
import { ArrowLeft, Camera, Info, Leaf, Palette, Mountain, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getDifficultyBadgeClass, getClimateIcon } from '../data/bonsaiData';
import { useImageModal, useTabNavigation } from '../hooks';
import LazyImage from './LazyImage';
import ImageGallery from './ImageGallery';
import ImageModal from './ImageModal';
import TechniquesList from './TechniquesList';
import TabNavigation from './TabNavigation';
import type { BonsaiDetailProps, NavigationTab } from '../types/common';

const BonsaiSpeciesDetail: React.FC<BonsaiDetailProps> = ({ species }) => {
  const navigate = useNavigate();
  const { activeTab, changeTab } = useTabNavigation('overview');
  const { selectedImage, openModal, closeModal } = useImageModal();
  
  const handleBackToCollection = () => {
    navigate('/');
  };

  const navigationTabs: NavigationTab[] = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'development', label: 'Development', icon: Leaf },
    { id: 'seasons', label: 'Seasons', icon: Palette },
    { id: 'styles', label: 'Styles', icon: Camera },
    { id: 'nature', label: 'In Nature', icon: Mountain },
    { id: 'techniques', label: 'Techniques', icon: Wrench }
  ];

  const getImageLabelFromKey = (category: string, key: string): string => {
    const categoryLabels: Record<string, Record<string, string>> = {
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
    };
    return categoryLabels[category]?.[key] || key;
  };



  const renderCurrentTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="detail-content-section">
            <div className="detail-hero-image-wrapper">
              <div className="detail-hero-image-container" 
                   onClick={() => openModal(species.images.developmentStages.mature)}>
                <LazyImage
                  src={species.images.developmentStages.mature}
                  alt={`${species.commonName} (${species.scientificName}) mature bonsai tree from ${species.nativeRegion} - ${species.difficultyLevel} care level`}
                  className="detail-hero-image"
                  placeholderClassName="detail-hero-placeholder"
                />
                <div className="detail-hero-overlay" />
                <div className="detail-hero-action-hint">
                  <span className="detail-hero-action-text">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </div>

            <div className="detail-info-grid">
              <div className="detail-info-section">
                <div>
                  <h3 className="detail-info-title">Basic Information</h3>
                  <div className="detail-info-list">
                    <div className="detail-info-item">
                      <span className="detail-info-label">Group</span>
                      <span className="detail-info-value">{species.group}</span>
                    </div>
                    <div className="detail-info-item">
                      <span className="detail-info-label">Climate</span>
                      <span className="detail-info-value-with-icon">
                        {getClimateIcon(species.climate)} {species.climate}
                      </span>
                    </div>
                    <div className="detail-info-item">
                      <span className="detail-info-label">Native Region</span>
                      <span className="detail-info-value">{species.nativeRegion}</span>
                    </div>
                    <div className="detail-info-item">
                      <span className="detail-info-label">Leaf Type</span>
                      <span className="detail-info-value">{species.leafType}</span>
                    </div>
                    <div className="detail-info-item-last">
                      <span className="detail-info-label">Flowering</span>
                      <span className="detail-info-value">{species.flowering}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-info-section">
                <div>
                  <h3 className="detail-info-title">Care Requirements</h3>
                  <div className="detail-info-list">
                    <div className="detail-info-item">
                      <span className="detail-info-label">Difficulty Level</span>
                      <span className={getDifficultyBadgeClass(species.difficultyLevel)}>
                        {species.difficultyLevel}
                      </span>
                    </div>
                    <div className="detail-info-item">
                      <span className="detail-info-label">Temperature Range</span>
                      <span className="detail-info-value">{species.temperatureMin}°C – {species.temperatureMax}°C</span>
                    </div>
                    <div className="detail-info-item">
                      <span className="detail-info-label">Position</span>
                      <span className="detail-info-value">{species.position}</span>
                    </div>
                    <div className="detail-info-item-last">
                      <span className="detail-info-label">Sun Exposure</span>
                      <span className="detail-info-value">{species.sunExposure}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-care-section">
              <h3 className="detail-care-title">Care Guidelines</h3>
              <div className="detail-care-content">
                <div>
                  <h4 className="detail-care-general-title">General Care</h4>
                  <p className="detail-care-general-text">{species.careTips.general}</p>
                </div>
                <div className="detail-care-grid">
                  <div>
                    <h4 className="detail-care-item-title">Soil</h4>
                    <p className="detail-care-item-text">{species.careTips.soilType}</p>
                  </div>
                  <div>
                    <h4 className="detail-care-item-title">Feeding</h4>
                    <p className="detail-care-item-text">{species.careTips.feeding}</p>
                  </div>
                  <div>
                    <h4 className="detail-care-item-title">Watering</h4>
                    <p className="detail-care-item-text">{species.careTips.watering}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-styles-section">
              <h3 className="detail-styles-title">Popular Bonsai Styles</h3>
              <div className="detail-styles-list">
                {species.bonsaiStyles.map((style, index) => (
                  <span key={index} className="detail-style-tag">
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'development':
        return (
          <div className="gallery-section">
            <div className="gallery-header">
              <h3 className="gallery-title">Development Stages</h3>
              <p className="gallery-description">
                Follow the progression of {species.commonName} from early development through maturity.
              </p>
            </div>
            <ImageGallery 
              images={species.images.developmentStages} 
              category="development" 
              onImageSelect={openModal}
              getImageLabel={getImageLabelFromKey}
            />
          </div>
        );

      case 'seasons':
        return (
          <div className="gallery-section">
            <div className="gallery-header">
              <h3 className="gallery-title">Seasonal Changes</h3>
              <p className="gallery-description">
                Observe how {species.commonName} transforms throughout the seasons.
              </p>
            </div>
            <ImageGallery 
              images={species.images.seasons} 
              category="seasons" 
              onImageSelect={openModal}
              getImageLabel={getImageLabelFromKey}
            />
          </div>
        );

      case 'styles':
        return (
          <div className="gallery-section">
            <div className="gallery-header">
              <h3 className="gallery-title">Bonsai Styles</h3>
              <p className="gallery-description">
                Explore different styling approaches for {species.commonName}.
              </p>
            </div>
            <ImageGallery 
              images={species.images.styles} 
              category="styles" 
              onImageSelect={openModal}
              getImageLabel={getImageLabelFromKey}
            />
          </div>
        );

      case 'nature':
        return (
          <div className="gallery-section">
            <div className="gallery-header">
              <h3 className="gallery-title">In Natural Habitat</h3>
              <p className="gallery-description">
                See {species.commonName} in its native environment and natural form.
              </p>
            </div>
            <ImageGallery 
              images={species.images.nature} 
              category="nature" 
              onImageSelect={openModal}
              getImageLabel={getImageLabelFromKey}
            />
          </div>
        );

      case 'techniques':
        return (
          <div className="gallery-section">
            <div className="gallery-header">
              <h3 className="gallery-title">Bonsai Techniques</h3>
              <p className="gallery-description">
                Professional techniques and timing for {species.commonName} care and styling.
              </p>
            </div>
            <TechniquesList techniques={species.techniques} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="detail-container">
      <header className="detail-header">
        <div className="detail-header-content">
          <div className="detail-header-navigation">
            <button
              onClick={handleBackToCollection}
              className="detail-back-button"
            >
              <ArrowLeft className="detail-back-icon" />
              <span className="detail-back-text">Back to Collection</span>
            </button>
            
            <div className="detail-title-section">
              <h1 className="detail-title">{species.commonName}</h1>
              <p className="detail-scientific-name">{species.scientificName}</p>
            </div>
            
            <div className="detail-spacer"></div>
          </div>
        </div>
      </header>

      <TabNavigation 
        tabs={navigationTabs}
        activeTab={activeTab}
        onTabChange={changeTab}
      />

      <main className="detail-main-content">
        {renderCurrentTabContent()}
      </main>

      {selectedImage && (
        <ImageModal 
          imagePath={selectedImage} 
          species={species}
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default BonsaiSpeciesDetail;

