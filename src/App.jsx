import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, TreePine, Leaf, Camera, ArrowRight } from 'lucide-react';
import BonsaiCard from './components/BonsaiCard';
import BonsaiDetail from './components/BonsaiDetail';
import { bonsaiSpecies } from './data/bonsaiData';
import './App.css';

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecies = bonsaiSpecies.filter(species =>
    species.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    species.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    species.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
    species.difficultyLevel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    species.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    species.leafType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    species.climate.toLowerCase().includes(searchTerm.toLowerCase()) ||
    species.nativeRegion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    species.flowering.toLowerCase().includes(searchTerm.toLowerCase()) ||
    species.sunExposure.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedSpecies) {
    return (
      <BonsaiDetail 
        species={selectedSpecies} 
        onBack={() => setSelectedSpecies(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimalist Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TreePine className="h-8 w-8 text-green-700" />
              <h1 className="text-2xl font-light text-gray-900">Bonsai Collection</h1>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {bonsaiSpecies.length} Species
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Minimalist */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Discover the Art of
            <span className="block text-green-700 font-normal">Bonsai Cultivation</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A curated collection of bonsai species with comprehensive care guides, 
            development stages, and seasonal photography.
          </p>
        </div>
      </section>

      {/* Search Section - Clean Design */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search species, care level, or characteristics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-gray-200 rounded-full focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
            />
            {searchTerm && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 rounded-full"
              >
                ✕
              </Button>
            )}
          </div>
          {searchTerm && (
            <p className="text-center text-sm text-gray-500 mt-3">
              {filteredSpecies.length} result{filteredSpecies.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>
      </section>

      {/* Species Grid - Minimalist Layout */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        {filteredSpecies.length === 0 ? (
          <div className="text-center py-20">
            <TreePine className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h3 className="text-xl font-light text-gray-600 mb-2">No species found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpecies.map((species) => (
              <BonsaiCard
                key={species.id}
                species={species}
                onClick={setSelectedSpecies}
              />
            ))}
          </div>
        )}
      </section>

      {/* About Section - Clean and Informative */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">About This Collection</h3>
              <p className="text-gray-600 leading-relaxed">
                Each species in our collection includes detailed care information, 
                development stages, and high-quality photography to guide your bonsai journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-green-700" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Visual Documentation</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Development stages, seasonal changes, and styling techniques captured in detail.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-green-700" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Care Guidelines</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive care instructions tailored to each species' unique requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-6 w-6 text-green-700" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Expert Techniques</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Professional techniques for pruning, wiring, and styling your bonsai trees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <TreePine className="h-5 w-5" />
            <span className="text-sm">Bonsai Collection</span>
            <span className="text-xs">•</span>
            <span className="text-xs">A guide to bonsai cultivation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

