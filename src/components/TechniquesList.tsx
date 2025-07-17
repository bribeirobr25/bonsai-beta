import React from 'react';
import type { BonsaiTechnique } from '../types/bonsai';

interface TechniquesListProps {
  techniques: BonsaiTechnique[];
}

const TechniquesList: React.FC<TechniquesListProps> = ({ techniques }) => {
  return (
    <div className="techniques-grid">
      {techniques.map((technique, index) => (
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
  );
};

export default TechniquesList;