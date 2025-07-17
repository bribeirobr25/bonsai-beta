import React from 'react';
import ImageGallery from './ImageGallery';

interface GallerySectionProps {
  title: string;
  description: string;
  images: Record<string, string>;
  category: string;
  onImageSelect: (imagePath: string) => void;
  getImageLabel: (category: string, key: string) => string;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  title,
  description,
  images,
  category,
  onImageSelect,
  getImageLabel
}) => {
  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h3 className="gallery-title">{title}</h3>
        <p className="gallery-description">{description}</p>
      </div>
      <ImageGallery 
        images={images} 
        category={category} 
        onImageSelect={onImageSelect}
        getImageLabel={getImageLabel}
      />
    </div>
  );
};

export default GallerySection;