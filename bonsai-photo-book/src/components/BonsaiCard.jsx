import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getDifficultyColor, getClimateIcon } from '../data/bonsaiData';

const BonsaiCard = ({ species, onClick }) => {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
      onClick={() => onClick(species)}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-green-800">
            {species.commonName}
          </CardTitle>
          <span className="text-2xl">{getClimateIcon(species.climate)}</span>
        </div>
        <p className="text-sm italic text-green-600">{species.scientificName}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={species.images.developmentStages.mature} 
              alt={`${species.commonName} mature stage`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge className={`text-xs ${getDifficultyColor(species.difficultyLevel)}`}>
              {species.difficultyLevel}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {species.position}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {species.leafType}
            </Badge>
          </div>
          
          <div className="text-sm text-gray-600">
            <p><strong>Group:</strong> {species.group}</p>
            <p><strong>Climate:</strong> {species.climate}</p>
            <p><strong>Native:</strong> {species.nativeRegion}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BonsaiCard;

