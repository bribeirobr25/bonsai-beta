import { useState } from 'react';
import { ArrowLeft, X, ExternalLink, Camera, Info, Leaf, Palette, Mountain, Wrench } from 'lucide-react';
import { getDifficultyColor, getClimateIcon } from '../data/bonsaiData';

const BonsaiDetail = ({ species, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'development', label: 'Development', icon: Leaf },
    { id: 'seasons', label: 'Seasons', icon: Palette },
    { id: 'styles', label: 'Styles', icon: Camera },
    { id: 'nature', label: 'In Nature', icon: Mountain },
    { id: 'techniques', label: 'Techniques', icon: Wrench }
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
        <div key={key} className="group cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
          <div className="relative overflow-hidden rounded-lg bg-gray-50">
            <img
              src={imagePath}
              alt={getImageLabel(category, key)}
              className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white text-sm font-medium bg-black/70 px-3 py-1 rounded-full">
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
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <div className="relative max-w-5xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 text-gray-700 p-2 rounded-full hover:bg-white transition-colors"
          >
            <X size={20} />
          </button>
          
          <img
            src={imagePath}
            alt="Full size view"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          
          {credit && (
            <div className="p-6 bg-gray-50 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Photo credit: <span className="font-medium text-gray-900">{credit.source}</span>
                </span>
                {credit.url && (
                  <a
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
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
          <div className="space-y-12">
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[16/9] bg-gray-50 rounded-xl overflow-hidden cursor-pointer group" 
                   onClick={() => setSelectedImage(species.images.developmentStages.mature)}>
                <img
                  src={species.images.developmentStages.mature}
                  alt={`${species.commonName} - Mature specimen`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-sm font-medium bg-black/70 px-4 py-2 rounded-full">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </div>

            {/* Species Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Basic Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Basic Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Group</span>
                      <span className="font-medium text-gray-900">{species.group}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Climate</span>
                      <span className="font-medium text-gray-900 flex items-center gap-2">
                        {getClimateIcon(species.climate)} {species.climate}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Native Region</span>
                      <span className="font-medium text-gray-900">{species.nativeRegion}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Leaf Type</span>
                      <span className="font-medium text-gray-900">{species.leafType}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-600">Flowering</span>
                      <span className="font-medium text-gray-900">{species.flowering}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Care Requirements */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Care Requirements</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Difficulty Level</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(species.difficultyLevel)}`}>
                        {species.difficultyLevel}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Temperature Range</span>
                      <span className="font-medium text-gray-900">{species.temperatureMin}°C – {species.temperatureMax}°C</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Position</span>
                      <span className="font-medium text-gray-900">{species.position}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-600">Sun Exposure</span>
                      <span className="font-medium text-gray-900">{species.sunExposure}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Care Tips */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Care Guidelines</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">General Care</h4>
                  <p className="text-gray-700 leading-relaxed">{species.careTips.general}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Soil</h4>
                    <p className="text-sm text-gray-600">{species.careTips.soilType}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Feeding</h4>
                    <p className="text-sm text-gray-600">{species.careTips.feeding}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Watering</h4>
                    <p className="text-sm text-gray-600">{species.careTips.watering}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonsai Styles */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Popular Bonsai Styles</h3>
              <div className="flex flex-wrap gap-3">
                {species.bonsaiStyles.map((style, index) => (
                  <span key={index} className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'development':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Development Stages</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow the progression of {species.commonName} from early development through maturity.
              </p>
            </div>
            <ImageGallery images={species.images.developmentStages} category="development" />
          </div>
        );

      case 'seasons':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Seasonal Changes</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Observe how {species.commonName} transforms throughout the seasons.
              </p>
            </div>
            <ImageGallery images={species.images.seasons} category="seasons" />
          </div>
        );

      case 'styles':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Bonsai Styles</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore different styling approaches for {species.commonName}.
              </p>
            </div>
            <ImageGallery images={species.images.styles} category="styles" />
          </div>
        );

      case 'nature':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">In Natural Habitat</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See {species.commonName} in its native environment and natural form.
              </p>
            </div>
            <ImageGallery images={species.images.nature} category="nature" />
          </div>
        );

      case 'techniques':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Bonsai Techniques</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional techniques and timing for {species.commonName} care and styling.
              </p>
            </div>
            <div className="grid gap-6">
              {species.techniques.map((technique, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-medium text-gray-900">{technique.name}</h4>
                    {technique.notRecommended && (
                      <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full">
                        Not Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{technique.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Timing:</span>
                      <p className="text-gray-600 mt-1">{technique.timing}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Maturity Stage:</span>
                      <p className="text-gray-600 mt-1">{technique.maturityStage}</p>
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Collection</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-2xl font-light text-gray-900">{species.commonName}</h1>
              <p className="text-sm text-gray-500 italic">{species.scientificName}</p>
            </div>
            
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-gray-100 sticky top-[73px] bg-white/95 backdrop-blur-sm z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {renderTabContent()}
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal imagePath={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default BonsaiDetail;

