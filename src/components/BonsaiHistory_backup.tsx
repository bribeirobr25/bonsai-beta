import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BonsaiHistory: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Collection</span>
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">History of Bonsai</h1>
          <p className="text-lg text-gray-700">
            Journey through the fascinating history of bonsai, from its ancient Chinese origins to its evolution in Japan 
            and spread across the world as a beloved art form.
          </p>
        </div>

        {/* Origins in China */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Origins in Ancient China (700 AD)</h2>
          
          <p className="text-gray-700 mb-4">
            The art we know as bonsai actually originated in China, not Japan. Around 700 AD, the Chinese began practicing 
            <strong> pun-sai</strong> (tray planting), using special techniques to grow dwarf trees in containers. These miniature 
            landscapes were initially the exclusive domain of the elite, who collected peculiarly-shaped specimens from the wild 
            and cultivated them as luxurious gifts.
          </p>

          <div className="bg-amber-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Early Chinese Development</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Tomb paintings from 706 AD show ladies-in-waiting with miniature rockery landscapes</li>
              <li>• Twisted, grotesque specimens from the wild were considered sacred</li>
              <li>• Different regional styles developed across China's vast landscapes</li>
              <li>• By the 16th century, the practice was called <strong>pun tsai</strong> (tray planting)</li>
              <li>• The term <strong>Penjing</strong> (tray landscape) emerged in the 17th century</li>
            </ul>
          </div>

          <p className="text-gray-700">
            Over the centuries, these miniature trees became symbols of cultivation and refinement. Poets and painters included them 
            in their works as representations of a cultivated lifestyle, and the techniques for shaping them grew increasingly sophisticated.
          </p>
        </section>

        {/* Journey to Japan */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Journey to Japan (Kamakura Period, 1185-1333)</h2>
          
          <p className="text-gray-700 mb-4">
            During the Kamakura period, Japan adopted many Chinese cultural practices, including the art of growing trees in containers. 
            The Japanese would transform this art into what we now recognize as bonsai, developing it along unique lines influenced by 
            their own aesthetic principles and geography.
          </p>

          <div className="bg-amber-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Japanese Innovation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Heavily influenced by Zen Buddhism's aesthetic of finding beauty in severe austerity</li>
              <li>• Developed along different lines due to Japan's limited size (4% of mainland China)</li>
              <li>• A single tree in a pot could represent the entire universe</li>
              <li>• Initially called <strong>hachi-no-ki</strong> (the bowl's tree)</li>
              <li>• Japanese pots were generally deeper than Chinese ones</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cultural Significance</h3>
            <p className="text-gray-700">
              A famous folktale from the late 1300s tells of an impoverished samurai who sacrificed his last three dwarf potted trees 
              to provide warmth for a traveling monk on a cold winter night. This story became a popular Noh theatre play and symbolized 
              the deep cultural value placed on these miniature trees.
            </p>
          </div>

          <p className="text-gray-700">
            Everyone from military leader shoguns to ordinary peasant people grew some form of tree or azalea in a pot. By the late 
            eighteenth century, annual shows for traditional pine dwarf potted trees were being held in Kyoto, with connoisseurs from 
            across the region bringing their finest specimens for judging.
          </p>
        </section>

        {/* Evolution of Modern Bonsai */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Evolution of Modern Bonsai (1800s-1900s)</h2>
          
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Name "Bonsai"</h3>
            <p className="text-gray-700">
              Around 1800, scholars near Osaka renamed the art <strong>"Bonsai"</strong> (Japanese pronunciation of pun-tsai) to 
              differentiate refined artistic creations from ordinary potted trees. This marked a significant shift from religious/mythical 
              tradition to design-focused craft.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Developments in the 19th-20th Centuries</h3>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Different sizes and styles were codified</li>
              <li>• Copper and iron wire replaced hemp fibers for shaping</li>
              <li>• Catalogs and books about trees, tools, and pots were published</li>
              <li>• Formal shows began to be held</li>
              <li>• Mass-produced containers were made to Japanese specifications</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Omiya Bonsai Village (1923)</h3>
            <p className="text-gray-700">
              Following the Great Kanto Earthquake, thirty families of professional growers resettled in Omiya, creating what would 
              become the center of Japanese bonsai culture. This village remains a pilgrimage site for bonsai enthusiasts worldwide.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Post-War Maturation</h3>
            <p className="text-gray-700 mb-3">
              The long recovery from World War II saw bonsai mature and be cultivated as an important native art:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Apprenticeship programs were formalized</li>
              <li>• Annual shows at prestigious venues became established</li>
              <li>• Books, magazines, and classes for foreigners spread the knowledge</li>
              <li>• Power tools combined with plant physiology knowledge enabled new techniques</li>
              <li>• The art transitioned from craft to true artistic expression</li>
            </ul>
          </div>
        </section>

        {/* Bonsai in the West */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bonsai Spreads to the West (Late 19th Century)</h2>
          
          <p className="text-gray-700 mb-4">
            Bonsai was introduced to the Western world in the late 1800s, though it remained relatively obscure until the mid-20th century. 
            After World War II, returning soldiers and cultural exchange programs brought greater awareness of this art form.
          </p>

          <div className="bg-amber-50 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Modern Global Development</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Techniques and innovations from Japan spread worldwide</li>
              <li>• International shows and competitions were established</li>
              <li>• Online communities and resources made knowledge accessible</li>
              <li>• Adaptation to local climates and species expanded possibilities</li>
              <li>• Younger generation embracing mini-trees and wilder, more natural styles</li>
            </ul>
          </div>

          <p className="text-gray-700">
            Today, bonsai is practiced on every continent, with enthusiasts adapting traditional techniques to local species and 
            developing new styles that honor the art's heritage while pushing its boundaries.
          </p>
        </section>

        {/* Cultural Philosophy */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Philosophy</h2>
          
          <p className="text-gray-700 mb-4">
            Bonsai embodies several Eastern philosophical concepts that continue to resonate with practitioners worldwide:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">🌿 Harmony</h3>
              <p className="text-gray-700">Balance between human creativity and natural form</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">⚖️ Balance</h3>
              <p className="text-gray-700">Equilibrium in all elements of design</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">✨ Simplicity</h3>
              <p className="text-gray-700">Beauty found in restraint and minimalism</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">⏳ Patience</h3>
              <p className="text-gray-700">Long-term thinking and gradual refinement</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">🙏 Respect</h3>
              <p className="text-gray-700">Honor for the natural essence of the tree</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 text-center">
            <blockquote className="text-xl font-serif italic text-gray-800">
              "Bonsai is not a race, nor is it a destination. It is a never-ending journey."
            </blockquote>
          </div>
        </section>

        {/* Related Arts */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Arts</h2>
          
          <p className="text-gray-700 mb-4">
            Bonsai is part of a family of miniature landscape arts:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Penjing (Chinese)</h3>
              <p className="text-gray-700">Often includes rocks, figurines, and multiple trees creating complete landscapes</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Saikei (Japanese)</h3>
              <p className="text-gray-700">Miniature living landscapes combining trees, rocks, and ground covers</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Suiseki (Japanese)</h3>
              <p className="text-gray-700">Appreciation of naturally formed stones that suggest landscapes</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BonsaiHistory;

