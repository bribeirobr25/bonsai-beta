import React from 'react';
import type { SEOMetadata } from '../types/seo';

interface SEOHeadProps {
  metadata: SEOMetadata;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({ metadata, structuredData }) => {
  React.useEffect(() => {
    // Update document title
    document.title = metadata.title;
    
    // Update meta description
    updateMetaTag('description', metadata.description);
    
    // Update meta keywords
    updateMetaTag('keywords', metadata.keywords.join(', '));
    
    // Update Open Graph tags
    updateMetaTag('og:title', metadata.title, 'property');
    updateMetaTag('og:description', metadata.description, 'property');
    updateMetaTag('og:type', metadata.type || 'website', 'property');
    updateMetaTag('og:url', metadata.url || '', 'property');
    updateMetaTag('og:image', metadata.image || '', 'property');
    updateMetaTag('og:site_name', 'Bonsai Collection', 'property');
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', metadata.title, 'name');
    updateMetaTag('twitter:description', metadata.description, 'name');
    updateMetaTag('twitter:image', metadata.image || '', 'name');
    
    // Update article specific tags
    if (metadata.type === 'article') {
      updateMetaTag('article:author', metadata.author || '', 'property');
      updateMetaTag('article:published_time', metadata.publishedTime || '', 'property');
      updateMetaTag('article:modified_time', metadata.modifiedTime || '', 'property');
    }
    
    // Update canonical URL
    updateCanonicalLink(metadata.url || '');
    
    // Update structured data
    if (structuredData) {
      updateStructuredData(structuredData);
    }
  }, [metadata, structuredData]);
  
  return null; // This component doesn't render anything
};

const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
  if (!content) return;
  
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  
  tag.setAttribute('content', content);
};

const updateCanonicalLink = (url: string) => {
  if (!url) return;
  
  let link = document.querySelector('link[rel="canonical"]');
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', url);
};

const updateStructuredData = (data: object) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export default SEOHead;