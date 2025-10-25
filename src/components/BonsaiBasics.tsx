import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BonsaiBasics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Collection</span>
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bonsai Basics & Getting Started</h1>
          <p className="text-lg text-gray-700">
            Bonsai is a centuries-old living art form, but getting started doesn't require mystical abilities or decades of experience. 
            With proper guidance and understanding of fundamental principles, anyone can successfully grow and care for bonsai trees.
          </p>
        </div>

        {/* Choosing Your First Bonsai */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing Your First Bonsai</h2>
          
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Indoor vs. Outdoor</h3>
            <p className="text-gray-700 mb-4">
              The first critical decision is whether you want an indoor or outdoor bonsai. Indoor bonsai are limited to subtropical 
              species that can survive indoors, such as Ficus, Jade, Fukien Tea, and Dwarf Schefflera. Outdoor bonsai offer more 
              options, but you should choose species native to your climate for best results.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beginner-Friendly Species</h3>
            <p className="text-gray-700 mb-4">Start with forgiving species that tolerate mistakes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Ficus retusa</strong> - Indoor/Outdoor in warm climates, very forgiving</li>
              <li><strong>Chinese Elm</strong> - Indoor/Outdoor adaptable, excellent for beginners</li>
              <li><strong>Jade Tree</strong> - Extremely forgiving succulent, perfect for absolute beginners</li>
              <li><strong>Juniper</strong> - Outdoor only, very popular and widely available</li>
            </ul>
          </div>
        </section>

        {/* Essential Care Principles */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Care Principles</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">💧 Watering</h3>
              <p className="text-gray-700 mb-3">
                Proper watering is the most critical skill for bonsai success. Water when the soil begins to dry, not on a fixed schedule. 
                Water thoroughly until water drains from the bottom, ensuring the entire root mass is wetted. Never let the soil completely 
                dry out, but avoid overwatering which causes root rot. Check your tree daily, as small pots dry quickly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">☀️ Placement</h3>
              <p className="text-gray-700 mb-3">
                Indoor trees need bright, indirect light and relatively high humidity. Outdoor trees need protection from extreme weather. 
                Never move an outdoor tree indoors or vice versa, as this is a sure way to kill your bonsai. Protect trees from intense 
                afternoon sun and freezing temperatures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">🌱 Fertilizing</h3>
              <p className="text-gray-700 mb-3">
                Fertilize regularly during the growing season (spring through fall) using diluted fertilizer at half strength. Reduce or 
                stop fertilizing in winter. Both liquid and solid fertilizers work well. Small pots with little space limit water and 
                nutrient retention, making regular fertilization essential.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">🪴 Repotting</h3>
              <p className="text-gray-700 mb-3">
                Repot every 2-3 years to prevent becoming pot-bound. Best done in early spring before growth begins. Use proper bonsai 
                soil (well-draining mix) and prune roots during repotting. This ensures your tree can properly absorb water and nutrients.
              </p>
            </div>
          </div>
        </section>

        {/* Basic Techniques */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Basic Techniques</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">✂️ Pruning</h3>
              <p className="text-gray-700 mb-3">
                Pruning is the single most important technique in bonsai. Structural pruning involves major shaping and removing branches, 
                while maintenance pruning is regular trimming to maintain shape. The best time to prune is spring for most species. 
                Remove branches that cross, grow inward, or are disproportionate to the tree's design.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">🔧 Wiring</h3>
              <p className="text-gray-700 mb-3">
                Aluminum or copper wire is wrapped around branches to allow bending and shaping over time. Wiring can be applied year-round, 
                but must be removed before the wire cuts into the bark (typically 2-6 months). This technique allows you to create the 
                elegant curves and shapes characteristic of bonsai.
              </p>
            </div>
          </div>
        </section>

        {/* Essential Tools */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Tools</h2>
          <p className="text-gray-700 mb-4">Must-have tools for beginners:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Concave cutters</strong> - For clean branch removal that heals well</li>
            <li><strong>Wire cutters</strong> - For cutting wire without damaging branches</li>
            <li><strong>Pruning shears</strong> - For trimming foliage and small branches</li>
            <li><strong>Watering can with fine rose</strong> - For gentle, thorough watering</li>
            <li><strong>Root rake</strong> - For working with roots during repotting</li>
            <li><strong>Chopstick</strong> - For working soil around roots</li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Beginner Mistakes</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>1. Overwatering or underwatering</strong> - Check soil daily and water when needed, not on a schedule</p>
            <p><strong>2. Wrong placement</strong> - Never move indoor trees outdoors or vice versa</p>
            <p><strong>3. Poor soil</strong> - Use proper bonsai soil mix, not garden soil</p>
            <p><strong>4. Neglecting repotting</strong> - Repot every 2-3 years to maintain health</p>
            <p><strong>5. Impatience</strong> - Bonsai is a journey, not a destination</p>
            <p><strong>6. Wrong species for climate</strong> - Choose species appropriate for your environment</p>
          </div>
        </section>

        {/* Getting Started Checklist */}
        <section className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started Checklist</h2>
          <div className="space-y-2 text-gray-800">
            <p>✓ Choose appropriate species for your environment</p>
            <p>✓ Obtain basic tools</p>
            <p>✓ Learn proper watering technique</p>
            <p>✓ Find the right placement</p>
            <p>✓ Understand your tree's specific needs</p>
            <p>✓ Join a local bonsai club or online community</p>
            <p>✓ Be patient and enjoy the process</p>
          </div>
        </section>

        {/* Quote */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <blockquote className="text-2xl font-serif italic text-gray-700">
            "Bonsai is not a race, nor is it a destination. It is a never-ending journey."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default BonsaiBasics;

