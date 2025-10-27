import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Image, Search, TreeDeciduous, TreePine } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--warm-stone)' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-8 transition-colors"
          style={{ 
            color: 'var(--forest-green)',
            fontWeight: 500,
            fontSize: '0.9375rem'
          }}
        >
          <ArrowLeft size={20} />
          <span>Back to Collection</span>
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg p-10 mb-8" style={{ 
          boxShadow: '0 2px 8px rgba(45, 80, 22, 0.08)',
          border: '1px solid var(--border)'
        }}>
          <h1 style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '2.5rem',
            fontWeight: 600,
            color: 'var(--forest-green)',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            About This Bonsai Photo Book
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--charcoal-gray)',
            lineHeight: 1.7,
            opacity: 0.9
          }}>
            Welcome to your comprehensive bonsai resource. Whether you're a complete beginner or an experienced enthusiast, 
            you'll find valuable information organized for easy access and learning.
          </p>
        </div>

        {/* What Makes This Unique */}
        <section className="bg-white rounded-lg p-10 mb-8" style={{ 
          boxShadow: '0 2px 8px rgba(45, 80, 22, 0.08)',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '2rem',
            fontWeight: 600,
            color: 'var(--earth-brown)',
            marginBottom: '1.5rem'
          }}>
            What Makes This Resource Unique
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--charcoal-gray)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <TreeDeciduous style={{ color: 'var(--bamboo-green)' }} size={24} />
                Comprehensive Species Coverage
              </h3>
              <p style={{
                color: 'var(--charcoal-gray)',
                lineHeight: 1.7,
                marginBottom: '1rem',
                opacity: 0.9
              }}>
                Our collection features <strong>112 carefully selected bonsai species</strong>, organized by difficulty level to help you choose 
                the right tree for your experience:
              </p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
                marginLeft: '1.5rem'
              }}>
                <div style={{
                  background: 'rgba(123, 160, 91, 0.1)',
                  borderRadius: '0.5rem',
                  padding: '1.25rem',
                  border: '1px solid rgba(123, 160, 91, 0.2)'
                }}>
                  <h4 style={{
                    fontWeight: 600,
                    color: 'var(--forest-green)',
                    marginBottom: '0.5rem'
                  }}>
                    Beginner Species
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--charcoal-gray)',
                    opacity: 0.8
                  }}>
                    Forgiving trees perfect for those just starting out
                  </p>
                </div>
                <div style={{
                  background: 'rgba(168, 181, 160, 0.15)',
                  borderRadius: '0.5rem',
                  padding: '1.25rem',
                  border: '1px solid rgba(168, 181, 160, 0.3)'
                }}>
                  <h4 style={{
                    fontWeight: 600,
                    color: 'var(--earth-brown)',
                    marginBottom: '0.5rem'
                  }}>
                    Intermediate Species
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--charcoal-gray)',
                    opacity: 0.8
                  }}>
                    For enthusiasts ready to expand their skills
                  </p>
                </div>
                <div style={{
                  background: 'rgba(45, 80, 22, 0.08)',
                  borderRadius: '0.5rem',
                  padding: '1.25rem',
                  border: '1px solid rgba(45, 80, 22, 0.15)'
                }}>
                  <h4 style={{
                    fontWeight: 600,
                    color: 'var(--forest-green)',
                    marginBottom: '0.5rem'
                  }}>
                    Expert Species
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--charcoal-gray)',
                    opacity: 0.8
                  }}>
                    Challenging trees for experienced growers
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--charcoal-gray)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Image style={{ color: 'var(--bamboo-green)' }} size={24} />
                Rich Visual Documentation
              </h3>
              <p style={{
                color: 'var(--charcoal-gray)',
                lineHeight: 1.7,
                marginBottom: '1rem',
                opacity: 0.9
              }}>
                Each species includes extensive photo galleries showing:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  { title: 'Development Stages', desc: 'See how trees progress from young to mature' },
                  { title: 'Seasonal Variations', desc: 'Understand how your tree changes through the year' },
                  { title: 'Bonsai Styles', desc: 'Explore different artistic approaches' },
                  { title: 'Natural Habitat', desc: 'Learn how trees grow in the wild' }
                ].map((item, idx) => (
                  <li key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}>
                    <span style={{ 
                      color: 'var(--bamboo-green)', 
                      fontSize: '1.25rem',
                      lineHeight: 1
                    }}>•</span>
                    <span style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>
                      <strong style={{ color: 'var(--earth-brown)' }}>{item.title}</strong> - {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--charcoal-gray)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <BookOpen style={{ color: 'var(--bamboo-green)' }} size={24} />
                Detailed Care Information
              </h3>
              <p style={{
                color: 'var(--charcoal-gray)',
                lineHeight: 1.7,
                marginBottom: '1rem',
                opacity: 0.9
              }}>
                Every species page provides:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {[
                  'Scientific and common names',
                  'Climate and hardiness information',
                  'Difficulty level assessment',
                  'Comprehensive care requirements (watering, soil, light, temperature)',
                  'Seasonal care tips',
                  '15 detailed bonsai techniques with species-specific guidance'
                ].map((item, idx) => (
                  <li key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: 'var(--charcoal-gray)',
                    lineHeight: 1.6
                  }}>
                    <span style={{ color: 'var(--bamboo-green)', fontSize: '1.25rem', lineHeight: 1 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="bg-white rounded-lg p-10 mb-8" style={{ 
          boxShadow: '0 2px 8px rgba(45, 80, 22, 0.08)',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '2rem',
            fontWeight: 600,
            color: 'var(--earth-brown)',
            marginBottom: '1.5rem'
          }}>
            How to Use This Collection
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                title: 'For Beginners',
                color: 'var(--bamboo-green)',
                bgColor: 'rgba(123, 160, 91, 0.1)',
                borderColor: 'rgba(123, 160, 91, 0.2)',
                steps: [
                  'Start with the "Bonsai Basics" guide to understand fundamentals',
                  'Browse beginner-level species to choose your first tree',
                  'Read the complete care guide for your chosen species',
                  'Review the techniques tab to learn essential skills',
                  'Use the seasonal photos to know what to expect'
                ]
              },
              {
                title: 'For Intermediate Growers',
                color: 'var(--earth-brown)',
                bgColor: 'rgba(139, 69, 19, 0.08)',
                borderColor: 'rgba(139, 69, 19, 0.15)',
                steps: [
                  'Explore intermediate and advanced species',
                  'Study the techniques section for species-specific applications',
                  'Compare development stages to assess your tree\'s progress',
                  'Learn from the styling examples in the photo galleries'
                ]
              },
              {
                title: 'For Researchers and Enthusiasts',
                color: 'var(--forest-green)',
                bgColor: 'rgba(45, 80, 22, 0.08)',
                borderColor: 'rgba(45, 80, 22, 0.15)',
                steps: [
                  'Use the search function to find specific species',
                  'Compare care requirements across similar species',
                  'Study natural habitat photos for styling inspiration',
                  'Review comprehensive technique timing and maturity requirements'
                ]
              }
            ].map((section, idx) => (
              <div key={idx} style={{
                background: section.bgColor,
                borderRadius: '0.5rem',
                padding: '1.5rem',
                border: `1px solid ${section.borderColor}`
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: section.color,
                  marginBottom: '1rem'
                }}>
                  {section.title}
                </h3>
                <ol style={{
                  counterReset: 'list-counter',
                  listStyle: 'none',
                  padding: 0,
                  marginLeft: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {section.steps.map((step, stepIdx) => (
                    <li key={stepIdx} style={{
                      counterIncrement: 'list-counter',
                      display: 'flex',
                      gap: '0.75rem',
                      color: 'var(--charcoal-gray)',
                      lineHeight: 1.6
                    }}>
                      <span style={{ 
                        fontWeight: 600, 
                        color: section.color,
                        minWidth: '1.5rem'
                      }}>
                        {stepIdx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Guide */}
        <section className="bg-white rounded-lg p-10 mb-8" style={{ 
          boxShadow: '0 2px 8px rgba(45, 80, 22, 0.08)',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '2rem',
            fontWeight: 600,
            color: 'var(--earth-brown)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <Search style={{ color: 'var(--bamboo-green)' }} size={28} />
            Navigation Guide
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                title: 'Homepage',
                items: [
                  'Browse all 112 species with visual cards',
                  'Use search to find specific species or characteristics',
                  'View species organized by difficulty level'
                ]
              },
              {
                title: 'Species Pages',
                items: [
                  '<strong>Overview Tab</strong> - General information and care requirements',
                  '<strong>Development Tab</strong> - See progression from young to mature',
                  '<strong>Seasons Tab</strong> - Understand seasonal changes',
                  '<strong>Styles Tab</strong> - Explore different bonsai styling approaches',
                  '<strong>In Nature Tab</strong> - Learn from wild specimens',
                  '<strong>Techniques Tab</strong> - Detailed guidance for 15 bonsai techniques'
                ]
              },
              {
                title: 'Educational Pages',
                items: [
                  '<strong>Bonsai Basics</strong> - Fundamental care principles for beginners',
                  '<strong>History</strong> - Cultural background and evolution of the art',
                  '<strong>About</strong> - This page - how to use the resource'
                ]
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--charcoal-gray)',
                  marginBottom: '0.75rem'
                }}>
                  {section.title}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginLeft: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      color: 'var(--charcoal-gray)',
                      lineHeight: 1.6
                    }}>
                      <span style={{ color: 'var(--bamboo-green)', fontSize: '1.25rem', lineHeight: 1 }}>•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className="bg-white rounded-lg p-10 mb-8" style={{ 
          boxShadow: '0 2px 8px rgba(45, 80, 22, 0.08)',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '2rem',
            fontWeight: 600,
            color: 'var(--earth-brown)',
            marginBottom: '1.5rem'
          }}>
            Our Commitment to Quality
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                title: 'Accurate Information',
                content: 'All care information and techniques are researched from trusted bonsai sources including Bonsai Empire, botanical gardens, and international bonsai societies.'
              },
              {
                title: 'Real Photography',
                content: 'We prioritize real photographs over AI-generated images, showing actual bonsai trees and natural specimens. Each image includes proper credits and source links.'
              },
              {
                title: 'Continuous Improvement',
                content: 'This collection is regularly updated with new species additions, enhanced photo galleries, updated care information, and community feedback integration.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                borderLeft: `4px solid var(--bamboo-green)`,
                paddingLeft: '1.5rem'
              }}>
                <h3 style={{
                  fontWeight: 600,
                  color: 'var(--charcoal-gray)',
                  marginBottom: '0.5rem'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--charcoal-gray)',
                  lineHeight: 1.7,
                  opacity: 0.9
                }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Join the Community */}
        <section className="rounded-lg p-10 mb-8" style={{ 
          background: 'linear-gradient(135deg, var(--bamboo-green) 0%, var(--forest-green) 100%)',
          boxShadow: '0 4px 12px rgba(45, 80, 22, 0.15)'
        }}>
          <h2 style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '2rem',
            fontWeight: 600,
            color: 'white',
            marginBottom: '1rem'
          }}>
            Join the Bonsai Community
          </h2>
          <p style={{
            color: 'white',
            lineHeight: 1.7,
            marginBottom: '1rem',
            opacity: 0.95
          }}>
            Bonsai is more than a hobby—it's a global community of passionate growers sharing knowledge and inspiration. 
            We encourage you to:
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginLeft: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {[
              'Join local bonsai clubs',
              'Participate in online forums',
              'Attend workshops and exhibitions',
              'Share your own bonsai journey',
              'Learn from experienced practitioners'
            ].map((item, idx) => (
              <li key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                color: 'white',
                lineHeight: 1.6
              }}>
                <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Acknowledgments */}
        <section className="bg-white rounded-lg p-10 mb-8" style={{ 
          boxShadow: '0 2px 8px rgba(45, 80, 22, 0.08)',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '2rem',
            fontWeight: 600,
            color: 'var(--earth-brown)',
            marginBottom: '1rem'
          }}>
            Acknowledgments
          </h2>
          <p style={{
            color: 'var(--charcoal-gray)',
            lineHeight: 1.7,
            marginBottom: '1rem',
            opacity: 0.9
          }}>
            This resource draws upon the collective wisdom of the global bonsai community and the generous sharing of knowledge from:
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginLeft: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {[
              'Bonsai Empire and other educational websites',
              'International botanical gardens',
              'Bonsai societies worldwide',
              'Individual growers and photographers',
              'Historical and cultural institutions'
            ].map((item, idx) => (
              <li key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                color: 'var(--charcoal-gray)',
                lineHeight: 1.6
              }}>
                <span style={{ color: 'var(--bamboo-green)', fontSize: '1.25rem', lineHeight: 1 }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Start Your Journey */}
        <div className="rounded-lg p-10 text-center" style={{ 
          background: 'linear-gradient(135deg, var(--forest-green) 0%, var(--bamboo-green) 100%)',
          boxShadow: '0 4px 12px rgba(45, 80, 22, 0.15)',
          color: 'white'
        }}>
          <TreePine size={48} style={{ margin: '0 auto 1.5rem', opacity: 0.9 }} />
          <h2 style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '2rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            Start Your Journey
          </h2>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '1.5rem',
            lineHeight: 1.7,
            opacity: 0.95
          }}>
            Whether you're here to choose your first bonsai, deepen your knowledge of a specific species, or simply appreciate 
            the beauty of these miniature trees, we hope this resource inspires and guides you.
          </p>
          <blockquote style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '1.5rem',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            opacity: 0.95,
            lineHeight: 1.5
          }}>
            "Bonsai is not a race, nor is it a destination. It is a never-ending journey."
          </blockquote>
          <p style={{
            fontSize: '1.25rem',
            fontWeight: 600
          }}>
            Happy growing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

