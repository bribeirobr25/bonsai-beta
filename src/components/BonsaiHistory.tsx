import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Breadcrumb from './Breadcrumb';

const BonsaiHistory: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--warm-stone)' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb items={[{ label: "History" }]} />
        
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
            History of Bonsai
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--charcoal-gray)',
            lineHeight: 1.7,
            opacity: 0.9
          }}>
            Journey through the fascinating history of bonsai, from its ancient Chinese origins to its evolution in Japan 
            and spread across the world as a beloved art form.
          </p>
        </div>

        {/* Origins in China */}
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
            Origins in Ancient China (700 AD)
          </h2>
          
          <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9, marginBottom: '1rem' }}>
            The art we know as bonsai actually originated in China, not Japan. Around 700 AD, the Chinese began practicing 
            <strong> pun-sai</strong> (tray planting), using special techniques to grow dwarf trees in containers. These miniature 
            landscapes were initially the exclusive domain of the elite, who collected peculiarly-shaped specimens from the wild 
            and cultivated them as luxurious gifts.
          </p>

          <div style={{
            background: 'rgba(123, 160, 91, 0.1)',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            border: '1px solid rgba(123, 160, 91, 0.2)',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--charcoal-gray)', marginBottom: '0.75rem' }}>
              Early Chinese Development
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Tomb paintings from 706 AD show ladies-in-waiting with miniature rockery landscapes</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Twisted, grotesque specimens from the wild were considered sacred</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Different regional styles developed across China's vast landscapes</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• By the 16th century, the practice was called <strong>pun tsai</strong> (tray planting)</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• The term <strong>Penjing</strong> (tray landscape) emerged in the 17th century</li>
            </ul>
          </div>

          <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9 }}>
            Over the centuries, these miniature trees became symbols of cultivation and refinement. Poets and painters included them 
            in their works as representations of a cultivated lifestyle, and the techniques for shaping them grew increasingly sophisticated.
          </p>
        </section>

        {/* Journey to Japan */}
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
            Journey to Japan (Kamakura Period, 1185-1333)
          </h2>
          
          <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9, marginBottom: '1rem' }}>
            During the Kamakura period, Japan adopted many Chinese cultural practices, including the art of growing trees in containers. 
            The Japanese would transform this art into what we now recognize as bonsai, developing it along unique lines influenced by 
            their own aesthetic principles and geography.
          </p>

          <div style={{
            background: 'rgba(123, 160, 91, 0.1)',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            border: '1px solid rgba(123, 160, 91, 0.2)',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--charcoal-gray)', marginBottom: '0.75rem' }}>
              Japanese Innovation
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Heavily influenced by Zen Buddhism's aesthetic of finding beauty in severe austerity</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Developed along different lines due to Japan's limited size (4% of mainland China)</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• A single tree in a pot could represent the entire universe</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Initially called <strong>hachi-no-ki</strong> (the bowl's tree)</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Japanese pots were generally deeper than Chinese ones</li>
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, var(--bamboo-green) 0%, var(--forest-green) 100%)',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 12px rgba(45, 80, 22, 0.15)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
              Cultural Significance
            </h3>
            <p style={{ color: 'white', lineHeight: 1.6 }}>
              A famous folktale from the late 1300s tells of an impoverished samurai who sacrificed his last three dwarf potted trees 
              to provide warmth for a traveling monk on a cold winter night. This story became a popular Noh theatre play and symbolized 
              the deep cultural value placed on these miniature trees.
            </p>
          </div>

          <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9 }}>
            Everyone from military leader shoguns to ordinary peasant people grew some form of tree or azalea in a pot. By the late 
            eighteenth century, annual shows for traditional pine dwarf potted trees were being held in Kyoto, with connoisseurs from 
            across the region bringing their finest specimens for judging.
          </p>
        </section>

        {/* Evolution of Modern Bonsai */}
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
            Evolution of Modern Bonsai (1800s-1900s)
          </h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--charcoal-gray)', marginBottom: '0.75rem' }}>
              The Name "Bonsai"
            </h3>
            <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9 }}>
              Around 1800, scholars near Osaka renamed the art <strong>"Bonsai"</strong> (Japanese pronunciation of pun-tsai) to 
              differentiate refined artistic creations from ordinary potted trees. This marked a significant shift from religious/mythical 
              tradition to design-focused craft.
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--charcoal-gray)', marginBottom: '0.75rem' }}>
              Developments in the 19th-20th Centuries
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, marginLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Different sizes and styles were codified</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Copper and iron wire replaced hemp fibers for shaping</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Catalogs and books about trees, tools, and pots were published</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Formal shows began to be held</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Mass-produced containers were made to Japanese specifications</li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(123, 160, 91, 0.1)',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            border: '1px solid rgba(123, 160, 91, 0.2)',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--charcoal-gray)', marginBottom: '0.75rem' }}>
              Omiya Bonsai Village (1923)
            </h3>
            <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9 }}>
              Following the Great Kanto Earthquake, thirty families of professional growers resettled in Omiya, creating what would 
              become the center of Japanese bonsai culture. This village remains a pilgrimage site for bonsai enthusiasts worldwide.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--charcoal-gray)', marginBottom: '0.75rem' }}>
              Post-War Maturation
            </h3>
            <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9, marginBottom: '0.75rem' }}>
              The long recovery from World War II saw bonsai mature and be cultivated as an important native art:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Apprenticeship programs were formalized</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Annual shows at prestigious venues became established</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Books, magazines, and classes for foreigners spread the knowledge</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Power tools combined with plant physiology knowledge enabled new techniques</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• The art transitioned from craft to true artistic expression</li>
            </ul>
          </div>
        </section>

        {/* Bonsai in the West */}
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
            Bonsai Spreads to the West (Late 19th Century)
          </h2>
          
          <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9, marginBottom: '1rem' }}>
            Bonsai was introduced to the Western world in the late 1800s, though it remained relatively obscure until the mid-20th century. 
            After World War II, returning soldiers and cultural exchange programs brought greater awareness of this art form.
          </p>

          <div style={{
            background: 'rgba(123, 160, 91, 0.1)',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            border: '1px solid rgba(123, 160, 91, 0.2)',
            marginBottom: '1rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--charcoal-gray)', marginBottom: '0.75rem' }}>
              Modern Global Development
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Techniques and innovations from Japan spread worldwide</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• International shows and competitions were established</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Online communities and resources made knowledge accessible</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Adaptation to local climates and species expanded possibilities</li>
              <li style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>• Younger generation embracing mini-trees and wilder, more natural styles</li>
            </ul>
          </div>

          <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9 }}>
            Today, bonsai is practiced on every continent, with enthusiasts adapting traditional techniques to local species and 
            developing new styles that honor the art's heritage while pushing its boundaries.
          </p>
        </section>

        {/* Cultural Philosophy */}
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
            Cultural Philosophy
          </h2>
          
          <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9, marginBottom: '1.5rem' }}>
            Bonsai embodies several Eastern philosophical concepts that continue to resonate with practitioners worldwide:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { icon: '🌿', title: 'Harmony', desc: 'Balance between human creativity and natural form' },
              { icon: '⚖️', title: 'Balance', desc: 'Equilibrium in all elements of design' },
              { icon: '✨', title: 'Simplicity', desc: 'Beauty found in restraint and minimalism' },
              { icon: '⏳', title: 'Patience', desc: 'Long-term thinking and gradual refinement' },
              { icon: '🙏', title: 'Respect', desc: 'Honor for the natural essence of the tree' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(123, 160, 91, 0.1)',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid rgba(123, 160, 91, 0.2)'
              }}>
                <h3 style={{ fontWeight: 600, color: 'var(--charcoal-gray)', marginBottom: '0.5rem' }}>
                  {item.icon} {item.title}
                </h3>
                <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6, fontSize: '0.9375rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, var(--bamboo-green) 0%, var(--forest-green) 100%)',
            borderRadius: '0.5rem',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(45, 80, 22, 0.15)'
          }}>
            <blockquote style={{
              fontFamily: "'Noto Serif', serif",
              fontSize: '1.5rem',
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.5,
              margin: 0
            }}>
              "Bonsai is not a race, nor is it a destination. It is a never-ending journey."
            </blockquote>
          </div>
        </section>

        {/* Related Arts */}
        <section className="bg-white rounded-lg p-10" style={{ 
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
            Related Arts
          </h2>
          
          <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.7, opacity: 0.9, marginBottom: '1rem' }}>
            Bonsai is part of a family of miniature landscape arts:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: 'Penjing (Chinese)', desc: 'Often includes rocks, figurines, and multiple trees creating complete landscapes' },
              { title: 'Saikei (Japanese)', desc: 'Miniature living landscapes combining trees, rocks, and ground covers' },
              { title: 'Suiseki (Japanese)', desc: 'Appreciation of naturally formed stones that suggest landscapes' }
            ].map((item, idx) => (
              <div key={idx} style={{ borderLeft: '4px solid var(--bamboo-green)', paddingLeft: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, color: 'var(--charcoal-gray)', marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--charcoal-gray)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BonsaiHistory;
