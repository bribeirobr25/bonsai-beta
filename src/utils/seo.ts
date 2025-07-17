import type { BonsaiSpecies } from '../types/bonsai';
import type { SEOMetadata, StructuredDataPlant, StructuredDataWebsite } from '../types/seo';

export const generateSEOMetadata = (species?: BonsaiSpecies): SEOMetadata => {
  const baseUrl = 'https://bonsai-collection.com'; // Replace with your actual domain
  
  if (species) {
    return {
      title: `${species.commonName} (${species.scientificName}) - Bonsai Care Guide`,
      description: `Complete bonsai care guide for ${species.commonName}. Learn about ${species.difficultyLevel.toLowerCase()} level care, techniques, seasonal maintenance, and styling tips for this ${species.climate.toLowerCase()} species.`,
      keywords: [
        'bonsai',
        species.commonName.toLowerCase(),
        species.scientificName.toLowerCase(),
        species.difficultyLevel.toLowerCase(),
        species.climate.toLowerCase(),
        'bonsai care',
        'bonsai techniques',
        'tree care',
        'gardening',
        species.group.toLowerCase()
      ],
      image: species.images.developmentStages.mature,
      url: `${baseUrl}/species/${species.id}`,
      type: 'article',
      author: 'Bonsai Collection',
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString()
    };
  }

  return {
    title: 'Bonsai Collection - Complete Guide to Bonsai Tree Care & Techniques',
    description: 'Discover comprehensive bonsai care guides, techniques, and species information. Learn about different bonsai styles, seasonal care, and cultivation methods for beginners to experts.',
    keywords: [
      'bonsai',
      'bonsai care',
      'bonsai techniques',
      'bonsai trees',
      'tree care',
      'gardening',
      'plant care',
      'bonsai styles',
      'bonsai cultivation',
      'bonsai species'
    ],
    image: '/bonsai_photos/ficus_retusa/development_stages/ficus_retusa_mature_stage.jpg',
    url: baseUrl,
    type: 'website',
    author: 'Bonsai Collection'
  };
};

export const generateStructuredDataPlant = (species: BonsaiSpecies): StructuredDataPlant => {
  const baseUrl = 'https://bonsai-collection.com'; // Replace with your actual domain
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Plant',
    name: species.commonName,
    scientificName: species.scientificName,
    description: `${species.commonName} is a ${species.difficultyLevel.toLowerCase()} level bonsai species from ${species.nativeRegion}. ${species.careTips.general}`,
    image: [
      species.images.developmentStages.early,
      species.images.developmentStages.middle,
      species.images.developmentStages.mature,
      species.images.seasons.spring,
      species.images.seasons.summer,
      species.images.seasons.autumn,
      species.images.seasons.winter
    ],
    url: `${baseUrl}/species/${species.id}`,
    additionalType: 'https://schema.org/Plant',
    hasVariant: species.bonsaiStyles.map(style => ({
      '@type': 'Thing',
      name: style,
      description: `${species.commonName} styled in ${style} bonsai technique`,
      image: species.images.developmentStages.mature
    })),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/species/${species.id}`
    },
    author: {
      '@type': 'Organization',
      name: 'Bonsai Collection'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bonsai Collection'
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString()
  };
};

export const generateStructuredDataWebsite = (): StructuredDataWebsite => {
  const baseUrl = 'https://bonsai-collection.com'; // Replace with your actual domain
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: 'Bonsai Collection',
    description: 'Comprehensive bonsai care guides, techniques, and species information for bonsai enthusiasts.',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    author: {
      '@type': 'Organization',
      name: 'Bonsai Collection'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bonsai Collection'
    }
  };
};

export const generateSitemapEntries = (species: BonsaiSpecies[]) => {
  const baseUrl = 'https://bonsai-collection.com'; // Replace with your actual domain
  const now = new Date().toISOString();
  
  const entries = [
    {
      url: baseUrl,
      lastmod: now,
      changefreq: 'weekly',
      priority: '1.0'
    }
  ];
  
  species.forEach(s => {
    entries.push({
      url: `${baseUrl}/species/${s.id}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });
  
  return entries;
};

export const generateSitemap = (species: BonsaiSpecies[]): string => {
  const entries = generateSitemapEntries(species);
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
};