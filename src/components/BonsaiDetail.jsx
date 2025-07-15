import { useState } from 'react';
import { ArrowLeft, X, ExternalLink, Camera, Info, Leaf, Palette, Mountain, Wrench } from 'lucide-react';
import { getDifficultyColor, getClimateIcon } from '../data/bonsaiData';

const BonsaiSpeciesDetail = ({ species, onBack }) => {
  const [currentActiveTab, setCurrentActiveTab] = useState('overview');
  const [currentSelectedImage, setCurrentSelectedImage] = useState(null);

  const handleTabChange = (tabId) => {
    setCurrentActiveTab(tabId);
  };

  const handleImageSelect = (imagePath) => {
    setCurrentSelectedImage(imagePath);
  };

  const handleImageModalClose = () => {
    setCurrentSelectedImage(null);
  };

  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'development', label: 'Development', icon: Leaf },
    { id: 'seasons', label: 'Seasons', icon: Palette },
    { id: 'styles', label: 'Styles', icon: Camera },
    { id: 'nature', label: 'In Nature', icon: Mountain },
    { id: 'techniques', label: 'Techniques', icon: Wrench }
  ];

  const getImageLabelFromKey = (category, key) => {
    const categoryLabels = {
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

  const ImageGalleryComponent = ({ images, category }) => (
    <div className="gallery-grid">
      {Object.entries(images).map(([key, imagePath]) => (
        <div key={key} className="gallery-item" onClick={() => handleImageSelect(imagePath)}>
          <div className="gallery-item-container">
            <img
              src={imagePath}
              alt={getImageLabelFromKey(category, key)}
              className="gallery-item-image"
            />
            <div className="gallery-item-overlay" />
            <div className="gallery-item-label-wrapper">
              <span className="gallery-item-label">
                {getImageLabelFromKey(category, key)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ImageModalComponent = ({ imagePath, onClose }) => {
    const imageCredit = species.imageCredits?.[imagePath];
    
    return (
      <div className="image-modal-overlay">
        <div className="image-modal-container">
          <button
            onClick={onClose}
            className="image-modal-close-button"
          >
            <X size={20} />
          </button>
          
          <img
            src={imagePath}
            alt="Full size view"
            className="image-modal-image"
          />
          
          {imageCredit && (
            <div className="image-modal-credit-section">
              <div className="image-modal-credit-row">
                <span className="image-modal-credit-text">
                  Photo credit: <span className="image-modal-credit-source">{imageCredit.source}</span>
                </span>
                {imageCredit.url && (
                  <a
                    href={imageCredit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image-modal-credit-link"
                  >
                    Visit Source <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderCurrentTabContent = () => {
    switch (currentActiveTab) {
      case 'overview':
        return (
          <div className="detail-content-section">
            <div className="detail-hero-image-wrapper">
              <div className="detail-hero-image-container" 
                   onClick={() => handleImageSelect(species.images.developmentStages.mature)}>
                <img
                  src={species.images.developmentStages.mature}
                  alt={`${species.commonName} - Mature specimen`}
                  className="detail-hero-image"
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
                      <span className={`detail-difficulty-badge ${getDifficultyColor(species.difficultyLevel)}`}>
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
            <ImageGalleryComponent images={species.images.developmentStages} category="development" />
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
            <ImageGalleryComponent images={species.images.seasons} category="seasons" />
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
            <ImageGalleryComponent images={species.images.styles} category="styles" />
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
            <ImageGalleryComponent images={species.images.nature} category="nature" />
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
            <div className="techniques-grid">
              {species.techniques.map((technique, index) => (
                <div key={index} className="technique-item">
                  <div className="technique-header">
                    <h4 className="technique-title">{technique.name}</h4>
                    {technique.notRecommended && (
                      <span className="technique-not-recommended-badge">
                        Not Recommended
                      </span>
                    )}
                  </div>
                  <p className="technique-description">{technique.description}</p>
                  <div className="technique-details-grid">
                    <div>
                      <span className="technique-detail-label">Timing:</span>
                      <p className="technique-detail-text">{technique.timing}</p>
                    </div>
                    <div>
                      <span className="technique-detail-label">Maturity Stage:</span>
                      <p className="technique-detail-text">{technique.maturityStage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              onClick={onBack}
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

      <nav className="detail-nav-tabs">
        <div className="detail-nav-content">
          <div className="detail-nav-tabs-list">
            {navigationTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`detail-nav-tab ${
                    currentActiveTab === tab.id
                      ? 'detail-nav-tab-active'
                      : 'detail-nav-tab-inactive'
                  }`}
                >
                  <Icon className="detail-nav-tab-icon" />
                  <span className="detail-nav-tab-label">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="detail-main-content">
        {renderCurrentTabContent()}
      </main>

      {currentSelectedImage && (
        <ImageModalComponent imagePath={currentSelectedImage} onClose={handleImageModalClose} />
      )}
    </div>
  );
};

export default BonsaiSpeciesDetail;

