import React from 'react';
import { ArrowLeft, Camera, Info, Leaf, Palette, Mountain, Wrench } from './icons';
import { useNavigate } from 'react-router-dom';
import { getDifficultyBadgeClass, getClimateIcon } from '../data/bonsaiData';
import { useImageModal, useTabNavigation } from '../hooks';
import LazyImage from './LazyImage';
import GallerySection from './GallerySection';
import ImageModal from './ImageModal';
import TechniquesList from './TechniquesList';
import TabNavigation from './TabNavigation';
import InfoItem from './ui/InfoItem';
import { GALLERY_CATEGORIES, GALLERY_CONFIG, IMAGE_LABELS } from '../constants/gallery';
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
    return IMAGE_LABELS[category as keyof typeof IMAGE_LABELS]?.[key as keyof typeof IMAGE_LABELS[keyof typeof IMAGE_LABELS]] || key;
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
                    <InfoItem label="Group" value={species.group} />
                    <InfoItem 
                      label="Climate" 
                      value={(
                        <span className="detail-info-value-with-icon">
                          {getClimateIcon(species.climate)} {species.climate}
                        </span>
                      )}
                    />
                    <InfoItem label="Native Region" value={species.nativeRegion} />
                    <InfoItem label="Leaf Type" value={species.leafType} />
                    <InfoItem label="Flowering" value={species.flowering} isLast={true} />
                  </div>
                </div>
              </div>

              <div className="detail-info-section">
                <div>
                  <h3 className="detail-info-title">Care Requirements</h3>
                  <div className="detail-info-list">
                    <InfoItem 
                      label="Difficulty Level" 
                      value={(
                        <span className={getDifficultyBadgeClass(species.difficultyLevel)}>
                          {species.difficultyLevel}
                        </span>
                      )}
                    />
                    <InfoItem 
                      label="Temperature Range" 
                      value={`${species.temperatureMin}°C – ${species.temperatureMax}°C`}
                    />
                    <InfoItem label="Position" value={species.position} />
                    <InfoItem label="Sun Exposure" value={species.sunExposure} isLast={true} />
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
          <GallerySection
            title={GALLERY_CONFIG[GALLERY_CATEGORIES.DEVELOPMENT].title}
            description={GALLERY_CONFIG[GALLERY_CATEGORIES.DEVELOPMENT].description(species.commonName)}
            images={species.images.developmentStages}
            category={GALLERY_CATEGORIES.DEVELOPMENT}
            onImageSelect={openModal}
            getImageLabel={getImageLabelFromKey}
          />
        );

      case 'seasons':
        return (
          <GallerySection
            title={GALLERY_CONFIG[GALLERY_CATEGORIES.SEASONS].title}
            description={GALLERY_CONFIG[GALLERY_CATEGORIES.SEASONS].description(species.commonName)}
            images={species.images.seasons}
            category={GALLERY_CATEGORIES.SEASONS}
            onImageSelect={openModal}
            getImageLabel={getImageLabelFromKey}
          />
        );

      case 'styles':
        return (
          <GallerySection
            title={GALLERY_CONFIG[GALLERY_CATEGORIES.STYLES].title}
            description={GALLERY_CONFIG[GALLERY_CATEGORIES.STYLES].description(species.commonName)}
            images={species.images.styles}
            category={GALLERY_CATEGORIES.STYLES}
            onImageSelect={openModal}
            getImageLabel={getImageLabelFromKey}
          />
        );

      case 'nature':
        return (
          <GallerySection
            title={GALLERY_CONFIG[GALLERY_CATEGORIES.NATURE].title}
            description={GALLERY_CONFIG[GALLERY_CATEGORIES.NATURE].description(species.commonName)}
            images={species.images.nature}
            category={GALLERY_CATEGORIES.NATURE}
            onImageSelect={openModal}
            getImageLabel={getImageLabelFromKey}
          />
        );

      case 'techniques':
        return (
          <div className="gallery-section">
            <div className="gallery-header">
              <h3 className="gallery-title">{GALLERY_CONFIG[GALLERY_CATEGORIES.TECHNIQUES].title}</h3>
              <p className="gallery-description">
                {GALLERY_CONFIG[GALLERY_CATEGORIES.TECHNIQUES].description(species.commonName)}
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

