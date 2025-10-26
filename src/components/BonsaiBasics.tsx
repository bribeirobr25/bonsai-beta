import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import { ArrowLeft, Droplets, Sun, Sprout, Package, Scissors, Wrench } from 'lucide-react';

const BonsaiBasics: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--warm-stone)' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb items={[{ label: "Getting Started" }]} />
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
            Bonsai Basics & Getting Started
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--charcoal-gray)',
            lineHeight: 1.7,
            opacity: 0.9
          }}>
            Bonsai is a centuries-old living art form, but getting started doesn't require mystical abilities or decades of experience. 
            With proper guidance and understanding of fundamental principles, anyone can successfully grow and care for bonsai trees.
          </p>
        </div>

        {/* Choosing Your First Bonsai */}
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
            Choosing Your First Bonsai
          </h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 500,
              color: 'var(--charcoal-gray)',
              marginBottom: '1rem'
            }}>
              Indoor vs. Outdoor
            </h3>
            <p style={{
              color: 'var(--charcoal-gray)',
              lineHeight: 1.7,
              marginBottom: '1rem',
              opacity: 0.9
            }}>
              The first critical decision is whether you want an indoor or outdoor bonsai. Indoor bonsai are limited to subtropical 
              species that can survive indoors, such as Ficus, Jade, Fukien Tea, and Dwarf Schefflera. Outdoor bonsai offer more 
              options, but you should choose species native to your climate for best results.
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 500,
              color: 'var(--charcoal-gray)',
              marginBottom: '1rem'
            }}>
              Beginner-Friendly Species
            </h3>
            <p style={{
              color: 'var(--charcoal-gray)',
              lineHeight: 1.7,
              marginBottom: '1rem',
              opacity: 0.9
            }}>
              Start with forgiving species that tolerate mistakes:
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
                { name: 'Ficus retusa', desc: 'Indoor/Outdoor in warm climates, very forgiving' },
                { name: 'Chinese Elm', desc: 'Indoor/Outdoor adaptable, excellent for beginners' },
                { name: 'Jade Tree', desc: 'Extremely forgiving succulent, perfect for absolute beginners' },
                { name: 'Juniper', desc: 'Outdoor only, very popular and widely available' }
              ].map((item, idx) => (
                <li key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}>
                  <span style={{ color: 'var(--bamboo-green)', fontSize: '1.25rem', lineHeight: 1 }}>•</span>
                  <span style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--earth-brown)' }}>{item.name}</strong> - {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Essential Care Principles */}
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
            Essential Care Principles
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              {
                icon: Droplets,
                title: 'Watering',
                content: 'Proper watering is the most critical skill for bonsai success. Water when the soil begins to dry, not on a fixed schedule. Water thoroughly until water drains from the bottom, ensuring the entire root mass is wetted. Never let the soil completely dry out, but avoid overwatering which causes root rot. Check your tree daily, as small pots dry quickly.'
              },
              {
                icon: Sun,
                title: 'Placement',
                content: 'Indoor trees need bright, indirect light and relatively high humidity. Outdoor trees need protection from extreme weather. Never move an outdoor tree indoors or vice versa, as this is a sure way to kill your bonsai. Protect trees from intense afternoon sun and freezing temperatures.'
              },
              {
                icon: Sprout,
                title: 'Fertilizing',
                content: 'Fertilize regularly during the growing season (spring through fall) using diluted fertilizer at half strength. Reduce or stop fertilizing in winter. Both liquid and solid fertilizers work well. Small pots with little space limit water and nutrient retention, making regular fertilization essential.'
              },
              {
                icon: Package,
                title: 'Repotting',
                content: 'Repot every 2-3 years to prevent becoming pot-bound. Best done in early spring before growth begins. Use proper bonsai soil (well-draining mix) and prune roots during repotting. This ensures your tree can properly absorb water and nutrients.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'var(--charcoal-gray)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <Icon style={{ color: 'var(--bamboo-green)' }} size={28} />
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
              );
            })}
          </div>
        </section>

        {/* Basic Techniques */}
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
            Basic Techniques
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              {
                icon: Scissors,
                title: 'Pruning',
                content: 'Pruning is the single most important technique in bonsai. Structural pruning involves major shaping and removing branches, while maintenance pruning is regular trimming to maintain shape. The best time to prune is spring for most species. Remove branches that cross, grow inward, or are disproportionate to the tree\'s design.'
              },
              {
                icon: Wrench,
                title: 'Wiring',
                content: 'Aluminum or copper wire is wrapped around branches to allow bending and shaping over time. Wiring can be applied year-round, but must be removed before the wire cuts into the bark (typically 2-6 months). This technique allows you to create the elegant curves and shapes characteristic of bonsai.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'var(--charcoal-gray)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <Icon style={{ color: 'var(--bamboo-green)' }} size={28} />
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
              );
            })}
          </div>
        </section>

        {/* Essential Tools */}
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
            Essential Tools
          </h2>
          <p style={{
            color: 'var(--charcoal-gray)',
            lineHeight: 1.7,
            marginBottom: '1rem',
            opacity: 0.9
          }}>
            Must-have tools for beginners:
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
              { name: 'Concave cutters', desc: 'For clean branch removal that heals well' },
              { name: 'Wire cutters', desc: 'For cutting wire without damaging branches' },
              { name: 'Pruning shears', desc: 'For trimming foliage and small branches' },
              { name: 'Watering can with fine rose', desc: 'For gentle, thorough watering' },
              { name: 'Root rake', desc: 'For working with roots during repotting' },
              { name: 'Chopstick', desc: 'For working soil around roots' }
            ].map((item, idx) => (
              <li key={idx} style={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <span style={{ color: 'var(--bamboo-green)', fontSize: '1.25rem', lineHeight: 1 }}>•</span>
                <span style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--earth-brown)' }}>{item.name}</strong> - {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Common Mistakes */}
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
            Common Beginner Mistakes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { num: 1, title: 'Overwatering or underwatering', desc: 'Check soil daily and water when needed, not on a schedule' },
              { num: 2, title: 'Wrong placement', desc: 'Never move indoor trees outdoors or vice versa' },
              { num: 3, title: 'Poor soil', desc: 'Use proper bonsai soil mix, not garden soil' },
              { num: 4, title: 'Neglecting repotting', desc: 'Repot every 2-3 years to maintain health' },
              { num: 5, title: 'Impatience', desc: 'Bonsai is a journey, not a destination' },
              { num: 6, title: 'Wrong species for climate', desc: 'Choose species appropriate for your environment' }
            ].map((item, idx) => (
              <p key={idx} style={{
                color: 'var(--charcoal-gray)',
                lineHeight: 1.7
              }}>
                <strong style={{ color: 'var(--forest-green)' }}>{item.num}. {item.title}</strong> - {item.desc}
              </p>
            ))}
          </div>
        </section>

        {/* Getting Started Checklist */}
        <section className="rounded-lg p-10 mb-8" style={{ 
          background: 'linear-gradient(135deg, var(--bamboo-green) 0%, var(--forest-green) 100%)',
          boxShadow: '0 4px 12px rgba(45, 80, 22, 0.15)'
        }}>
          <h2 style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '2rem',
            fontWeight: 600,
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Getting Started Checklist
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Choose appropriate species for your environment',
              'Obtain basic tools',
              'Learn proper watering technique',
              'Find the right placement',
              'Understand your tree\'s specific needs',
              'Join a local bonsai club or online community',
              'Be patient and enjoy the process'
            ].map((item, idx) => (
              <p key={idx} style={{
                color: 'white',
                lineHeight: 1.6,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>✓</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Quote */}
        <div className="bg-white rounded-lg p-10 text-center" style={{ 
          boxShadow: '0 2px 8px rgba(45, 80, 22, 0.08)',
          border: '1px solid var(--border)'
        }}>
          <blockquote style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: 'var(--charcoal-gray)',
            lineHeight: 1.5
          }}>
            "Bonsai is not a race, nor is it a destination. It is a never-ending journey."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default BonsaiBasics;
