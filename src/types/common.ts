export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  sizes?: string;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackMessage?: string;
}

export interface BonsaiCardProps {
  species: import('./bonsai').BonsaiSpecies;
  onClick: (species: import('./bonsai').BonsaiSpecies) => void;
}

export interface BonsaiDetailProps {
  species: import('./bonsai').BonsaiSpecies;
  onBack?: () => void;
}

export type TabId = 'overview' | 'development' | 'seasons' | 'styles' | 'nature' | 'techniques';

export interface NavigationTab {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}