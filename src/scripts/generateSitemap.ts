import { writeFileSync } from 'fs';
import { join } from 'path';
import { bonsaiSpecies } from '../data/bonsaiData';
import { generateSitemap } from '../utils/seo';

const generateSitemapFile = () => {
  const sitemap = generateSitemap(bonsaiSpecies);
  const publicDir = join(process.cwd(), 'public');
  const sitemapPath = join(publicDir, 'sitemap.xml');
  
  writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`Sitemap generated at: ${sitemapPath}`);
  console.log(`Total entries: ${bonsaiSpecies.length + 1}`);
};

// Run the generator
generateSitemapFile();