import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getDifficultyColor, getClimateIcon } from '../data/bonsaiData';
import { ArrowRight } from 'lucide-react';

const BonsaiCard = ({ species, onClick }) => {
  return (
    <Card 
      className="group cursor-pointer hover:shadow-xl transition-all duration-500 border-0 shadow-sm hover:shadow-green-100/50 bg-white overflow-hidden"
      onClick={() => onClick(species)}
    >
      <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
        <img 
          src={species.images.developmentStages.mature} 
          alt={`${species.commonName} mature stage`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-1">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-medium text-gray-900 leading-tight">
                {species.commonName}
              </h3>
              <span className="text-lg opacity-60">{getClimateIcon(species.climate)}</span>
            </div>
            <p className="text-sm text-gray-500 italic">{species.scientificName}</p>
          </div>
          
          {/* Key Info */}
          <div className="flex items-center gap-2">
            <Badge className={`text-xs px-2 py-1 ${getDifficultyColor(species.difficultyLevel)}`}>
              {species.difficultyLevel}
            </Badge>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-600">{species.position}</span>
          </div>
          
          {/* Climate & Origin */}
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex justify-between">
              <span>Climate</span>
              <span className="text-gray-700">{species.climate}</span>
            </div>
            <div className="flex justify-between">
              <span>Origin</span>
              <span className="text-gray-700">{species.nativeRegion}</span>
            </div>
          </div>
          
          {/* Hover Action */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-50">
            <span className="text-xs text-gray-500">View Details</span>
            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BonsaiCard;

