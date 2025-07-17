import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { BonsaiSpecies } from '../types/bonsai';

interface ImageModalProps {
  imagePath: string;
  species: BonsaiSpecies;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imagePath, species, onClose }) => {
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

export default ImageModal;