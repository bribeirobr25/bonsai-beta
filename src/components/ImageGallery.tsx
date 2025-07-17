import React from 'react';
import LazyImage from './LazyImage';

interface ImageGalleryProps {
  images: Record<string, string>;
  category: string;
  onImageSelect: (imagePath: string) => void;
  getImageLabel: (category: string, key: string) => string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  category, 
  onImageSelect, 
  getImageLabel 
}) => {
  return (
    <div className="gallery-grid">
      {Object.entries(images).map(([key, imagePath]) => (
        <div key={key} className="gallery-item" onClick={() => onImageSelect(imagePath)}>
          <div className="gallery-item-container">
            <LazyImage
              src={imagePath}
              alt={`${getImageLabel(category, key)} - Bonsai care and styling example`}
              className="gallery-item-image"
              placeholderClassName="gallery-item-placeholder"
            />
            <div className="gallery-item-overlay" />
            <div className="gallery-item-label-wrapper">
              <span className="gallery-item-label">
                {getImageLabel(category, key)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;