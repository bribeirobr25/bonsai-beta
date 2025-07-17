import { Card, CardContent } from '@/components/ui/card';

const SkeletonCard = () => {
  return (
    <Card className="bonsai-card animate-pulse">
      <div className="card-image-wrapper">
        <div className="w-full h-full bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
      
      <CardContent className="card-content">
        <div className="card-content-layout">
          <div className="card-header space-y-2">
            <div className="flex items-start justify-between">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 w-6 bg-gray-200 rounded"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-12"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2 border-t border-gray-50">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 w-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;