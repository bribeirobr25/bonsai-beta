import { useState } from 'react';
import { ArrowLeft, X, ExternalLink } from 'lucide-react';
import { getDifficultyColor, getClimateIcon } from '../data/bonsaiData';

const BonsaiDetail = ({ species, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'development', label: 'Development' },
    { id: 'seasons', label: 'Seasons' },
    { id: 'styles', label: 'Styles' },
    { id: 'nature', label: 'In Nature' },
    { id: 'techniques', label: 'Techniques' }
  ];

  const getImageLabel = (category, key) => {
    const labels = {
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
    return labels[category]?.[key] || key;
  };

  const ImageGallery = ({ images, category }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(images).map(([key, imagePath]) => (
        <div key={key} className="relative group cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={imagePath}
              alt={getImageLabel(category, key)}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                {getImageLabel(category, key)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ImageModal = ({ imagePath, onClose }) => {
    const credit = species.imageCredits?.[imagePath];
    
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
          
          <img
            src={imagePath}
            alt="Full size view"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          
          {credit && (
            <div className="p-4 bg-gray-50 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Photo credit: <span className="font-medium">{credit.source}</span>
                </span>
                {credit.url && (
                  <a
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Featured Image Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Featured Image</h3>
                <div className="relative group cursor-pointer" onClick={() => setSelectedImage(species.images.developmentStages.mature)}>
                  <img
                    src={species.images.developmentStages.mature}
                    alt={`${species.commonName} - Mature specimen`}
                    className="w-full h-64 md:h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <div className="absolute bottom-4 left-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      Click to view full size
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Species Information */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Species Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium text-gray-700">Group:</span>
                      <span className="ml-2 text-gray-600">{species.group}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Temperature Range:</span>
                      <span className="ml-2 text-gray-600">{species.temperatureMin}°C – {species.temperatureMax}°C</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Sun Exposure:</span>
                      <span className="ml-2 text-gray-600">{species.sunExposure}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Position:</span>
                      <span className="ml-2 text-gray-600">{species.position}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium text-gray-700">Leaf Type:</span>
                      <span className="ml-2 text-gray-600">{species.leafType}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Climate:</span>
                      <span className="ml-2 text-gray-600">{getClimateIcon(species.climate)} {species.climate}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Flowering:</span>
                      <span className="ml-2 text-gray-600">{species.flowering}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Native Region:</span>
                      <span className="ml-2 text-gray-600">{species.nativeRegion}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Care Information */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Care Information</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-700">Difficulty Level:</span>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(species.difficultyLevel)}`}>
                      {species.difficultyLevel}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700 block mb-2">General Care Tips:</span>
                    <p className="text-gray-600 leading-relaxed">{species.careTips.general}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700 block mb-2">Soil Type:</span>
                    <p className="text-gray-600 leading-relaxed">{species.careTips.soilType}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700 block mb-2">Feeding:</span>
                    <p className="text-gray-600 leading-relaxed">{species.careTips.feeding}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700 block mb-2">Watering:</span>
                    <p className="text-gray-600 leading-relaxed">{species.careTips.watering}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700 block mb-2">Common Bonsai Styles:</span>
                    <div className="flex flex-wrap gap-2">
                      {species.bonsaiStyles.map((style, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'development':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Development Stages</h3>
              <p className="text-gray-600 mb-6">
                Explore the different development stages of {species.commonName} bonsai, from early development to mature specimens.
              </p>
              <ImageGallery images={species.images.developmentStages} category="development" />
            </div>
          </div>
        );

      case 'seasons':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Seasonal Variations</h3>
              <p className="text-gray-600 mb-6">
                See how {species.commonName} changes throughout the four seasons, showcasing its natural beauty year-round.
              </p>
              <ImageGallery images={species.images.seasons} category="seasons" />
            </div>
          </div>
        );

      case 'styles':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Bonsai Styles</h3>
              <p className="text-gray-600 mb-6">
                Discover the various bonsai styles that work well with {species.commonName}, each showcasing different artistic expressions.
              </p>
              <ImageGallery images={species.images.styles} category="styles" />
            </div>
          </div>
        );

      case 'nature':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">In Nature</h3>
              <p className="text-gray-600 mb-6">
                See {species.commonName} in its natural habitat, growing wild in its native environment. These images show how the species appears in nature before being cultivated as bonsai.
              </p>
              <ImageGallery images={species.images.nature} category="nature" />
            </div>
          </div>
        );

      case 'techniques':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Bonsai Techniques</h3>
              <p className="text-gray-600 mb-6">
                Learn about the various techniques used in bonsai cultivation, and how they apply to {species.commonName}.
              </p>
              <div className="space-y-6">
                {species.techniques.filter(tech => !tech.notRecommended).map((technique, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">{technique.name}</h4>
                    <p className="text-gray-600 mb-2">{technique.description}</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      <li><span className="font-medium">Timing:</span> {technique.timing}</li>
                      <li><span className="font-medium">Maturity Stage:</span> {technique.maturityStage}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Gallery
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {species.scientificName}
              </h1>
              <p className="text-lg text-gray-600">{species.commonName}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(species.difficultyLevel)}`}>
                {species.difficultyLevel}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {renderTabContent()}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal 
          imagePath={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default BonsaiDetail;



