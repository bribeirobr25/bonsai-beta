import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Image, Search, TreeDeciduous } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Collection</span>
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About This Bonsai Photo Book</h1>
          <p className="text-lg text-gray-700">
            Welcome to your comprehensive bonsai resource. Whether you're a complete beginner or an experienced enthusiast, 
            you'll find valuable information organized for easy access and learning.
          </p>
        </div>

        {/* What Makes This Unique */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes This Resource Unique</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <TreeDeciduous className="text-green-600" size={24} />
                Comprehensive Species Coverage
              </h3>
              <p className="text-gray-700 mb-3">
                Our collection features 23 carefully selected bonsai species, organized by difficulty level to help you choose 
                the right tree for your experience:
              </p>
              <div className="grid md:grid-cols-2 gap-4 ml-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Beginner Species</h4>
                  <p className="text-gray-700 text-sm">Forgiving trees perfect for those just starting out</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Intermediate Species</h4>
                  <p className="text-gray-700 text-sm">For enthusiasts ready to expand their skills</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Advanced Species</h4>
                  <p className="text-gray-700 text-sm">Challenging trees for experienced growers</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Rare/Specialty Species</h4>
                  <p className="text-gray-700 text-sm">Unique Brazilian and uncommon species</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Image className="text-blue-600" size={24} />
                Rich Visual Documentation
              </h3>
              <p className="text-gray-700 mb-3">
                Each species includes extensive photo galleries showing:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                <li><strong>Development Stages</strong> - See how trees progress from young to mature</li>
                <li><strong>Seasonal Variations</strong> - Understand how your tree changes through the year</li>
                <li><strong>Bonsai Styles</strong> - Explore different artistic approaches</li>
                <li><strong>Natural Habitat</strong> - Learn how trees grow in the wild</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen className="text-indigo-600" size={24} />
                Detailed Care Information
              </h3>
              <p className="text-gray-700 mb-3">
                Every species page provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                <li>Scientific and common names</li>
                <li>Climate and hardiness information</li>
                <li>Difficulty level assessment</li>
                <li>Comprehensive care requirements (watering, soil, light, temperature)</li>
                <li>Seasonal care tips</li>
                <li>15 detailed bonsai techniques with species-specific guidance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use This Collection</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">For Beginners</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
                <li>Start with the "Bonsai Basics" guide to understand fundamentals</li>
                <li>Browse beginner-level species to choose your first tree</li>
                <li>Read the complete care guide for your chosen species</li>
                <li>Review the techniques tab to learn essential skills</li>
                <li>Use the seasonal photos to know what to expect</li>
              </ol>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">For Intermediate Growers</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
                <li>Explore intermediate and advanced species</li>
                <li>Study the techniques section for species-specific applications</li>
                <li>Compare development stages to assess your tree's progress</li>
                <li>Learn from the styling examples in the photo galleries</li>
              </ol>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">For Researchers and Enthusiasts</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
                <li>Use the search function to find specific species</li>
                <li>Compare care requirements across similar species</li>
                <li>Study natural habitat photos for styling inspiration</li>
                <li>Review comprehensive technique timing and maturity requirements</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation Guide */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Search className="text-gray-700" size={28} />
            Navigation Guide
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Homepage</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Browse all species with visual cards</li>
                <li>Use search to find specific species or characteristics</li>
                <li>Filter by category (beginner, intermediate, advanced, rare)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Species Pages</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Overview Tab</strong> - General information and care requirements</li>
                <li><strong>Development Tab</strong> - See progression from young to mature</li>
                <li><strong>Seasons Tab</strong> - Understand seasonal changes</li>
                <li><strong>Styles Tab</strong> - Explore different bonsai styling approaches</li>
                <li><strong>In Nature Tab</strong> - Learn from wild specimens</li>
                <li><strong>Techniques Tab</strong> - Detailed guidance for 15 bonsai techniques</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Educational Pages</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Bonsai Basics</strong> - Fundamental care principles for beginners</li>
                <li><strong>History</strong> - Cultural background and evolution of the art</li>
                <li><strong>About</strong> - This page - how to use the resource</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Quality</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Accurate Information</h3>
              <p className="text-gray-700">
                All care information and techniques are researched from trusted bonsai sources including Bonsai Empire, 
                botanical gardens, and international bonsai societies.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Real Photography</h3>
              <p className="text-gray-700">
                We prioritize real photographs over AI-generated images, showing actual bonsai trees and natural specimens. 
                Each image includes proper credits and source links.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Continuous Improvement</h3>
              <p className="text-gray-700">
                This collection is regularly updated with new species additions, enhanced photo galleries, updated care 
                information, and community feedback integration.
              </p>
            </div>
          </div>
        </section>

        {/* Join the Community */}
        <section className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Bonsai Community</h2>
          <p className="text-gray-700 mb-4">
            Bonsai is more than a hobby—it's a global community of passionate growers sharing knowledge and inspiration. 
            We encourage you to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Join local bonsai clubs</li>
            <li>Participate in online forums</li>
            <li>Attend workshops and exhibitions</li>
            <li>Share your own bonsai journey</li>
            <li>Learn from experienced practitioners</li>
          </ul>
        </section>

        {/* Acknowledgments */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Acknowledgments</h2>
          <p className="text-gray-700 mb-4">
            This resource draws upon the collective wisdom of the global bonsai community and the generous sharing of knowledge from:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Bonsai Empire and other educational websites</li>
            <li>International botanical gardens</li>
            <li>Bonsai societies worldwide</li>
            <li>Individual growers and photographers</li>
            <li>Historical and cultural institutions</li>
          </ul>
        </section>

        {/* Start Your Journey */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
          <p className="text-lg mb-6">
            Whether you're here to choose your first bonsai, deepen your knowledge of a specific species, or simply appreciate 
            the beauty of these miniature trees, we hope this resource inspires and guides you.
          </p>
          <blockquote className="text-2xl font-serif italic mb-6">
            "Bonsai is not a race, nor is it a destination. It is a never-ending journey."
          </blockquote>
          <p className="text-xl font-semibold">Happy growing!</p>
        </div>
      </div>
    </div>
  );
};

export default About;

