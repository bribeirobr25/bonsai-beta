import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, TreePine, Leaf, Camera } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-4 mb-6">
              <TreePine className="h-12 w-12" />
              <h1 className="text-5xl font-bold">Bonsai Photo Book</h1>
              <Leaf className="h-12 w-12" />
            </div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              A comprehensive guide to bonsai trees featuring detailed information, care guides, 
              and extensive photo collections showcasing development stages, seasonal variations, and styling techniques.
            </p>
            <div className="flex justify-center items-center gap-6 text-green-200">
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                <span>High-Quality Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <TreePine className="h-5 w-5" />
                <span>Expert Care Tips</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                <span>Multiple Species</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Card className="mb-8 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Search className="h-5 w-5" />
              Search Bonsai Species
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, scientific name, group, difficulty, position, leaf type, climate..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-green-200 focus:border-green-400"
              />
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <p>Try searching for: "beginner", "indoor", "outdoor", "deciduous", "evergreen", "tropical", "temperate", etc.</p>
            </div>
          </CardContent>
        </Card>

        {/* Species Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-green-800">
              Featured Bonsai Species ({filteredSpecies.length})
            </h2>
            {searchTerm && (
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
                className="border-green-200 text-green-700 hover:bg-green-50"
              >
                Clear Search
              </Button>
            )}
          </div>

          {filteredSpecies.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <TreePine className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No species found</h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecies.map((species) => (
                <BonsaiCard
                  key={species.id}
                  species={species}
                  onClick={setSelectedSpecies}
                />
              ))}
            </div>
          )}
        </div>

        {/* About Section */}
        <Card className="mt-12 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">About This Photo Book</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              This comprehensive bonsai photo book showcases various species with detailed information about their care, 
              development stages, seasonal changes, and styling possibilities. Each species entry includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">📊 Detailed Information</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Scientific and common names</li>
                  <li>Temperature requirements</li>
                  <li>Sun exposure needs</li>
                  <li>Indoor/outdoor positioning</li>
                  <li>Difficulty level for beginners</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">📸 Photo Collections</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Development stages (Early, Middle, Mature)</li>
                  <li>Seasonal variations (Spring, Summer, Autumn, Winter)</li>
                  <li>Different bonsai styles and techniques</li>
                  <li>High-quality images from various angles</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <TreePine className="h-6 w-6" />
            <span className="text-lg font-semibold">Bonsai Photo Book</span>
          </div>
          <p className="text-green-200">
            A comprehensive guide to the art and science of bonsai cultivation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

