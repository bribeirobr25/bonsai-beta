import { Card, CardContent } from '@/components/ui/card';
import { getDifficultyBadgeClass, getClimateIcon } from '../data/bonsaiData';
import { ArrowRight } from './icons';
import LazyImage from './LazyImage';
import type { BonsaiCardProps } from '../types/common';

const BonsaiSpeciesCard: React.FC<BonsaiCardProps> = ({ species, onClick }) => {
  const handleCardClick = () => {
    onClick(species);
  };
  return (
    <Card 
      className="bonsai-card"
      onClick={handleCardClick}
    >
      <div className="card-image-wrapper">
        <LazyImage 
          src={species.images.developmentStages.mature} 
          alt={`${species.commonName} (${species.scientificName}) mature bonsai tree - ${species.difficultyLevel} difficulty level`}
          className="card-image"
          placeholderClassName="card-image-placeholder"
        />
      </div>
      
      <CardContent className="card-content">
        <div className="card-content-layout">
          <div className="card-header">
            <div className="card-title-row">
              <h3 className="card-title">
                {species.commonName}
              </h3>
              <span className="card-climate-icon">{getClimateIcon(species.climate)}</span>
            </div>
            <p className="card-scientific-name">{species.scientificName}</p>
          </div>
          
          <div className="card-info-row">
            <span className={getDifficultyBadgeClass(species.difficultyLevel)}>
              {species.difficultyLevel}
            </span>
            <span className="card-info-separator">•</span>
            <span className="card-position-text">{species.position}</span>
          </div>
          
          <div className="card-details">
            <div className="card-detail-row">
              <span className="card-detail-label">Climate</span>
              <span className="card-detail-value">{species.climate}</span>
            </div>
            <div className="card-detail-row">
              <span className="card-detail-label">Origin</span>
              <span className="card-detail-value">{species.nativeRegion}</span>
            </div>
          </div>
          
          <div className="card-action-row">
            <span className="card-action-text">View Details</span>
            <ArrowRight className="card-action-icon" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BonsaiSpeciesCard;

