import React, { useState } from 'react';
import { Clock, Users, Star, CheckCircle2, MapPin, Tag, ArrowRight } from 'lucide-react';
import { packages } from '../data/travelData';

const categories = ["All", "Cultural & Temples", "Beaches & Islands", "Eco & Wildlife", "Nature & Food", "Multi-City Circuit"];

const Packages = ({ onSelectPackage }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPackages = selectedCategory === "All"
    ? packages
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#ff7a22] font-bold text-sm tracking-wider uppercase">
            Curated Itineraries
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e2a52] mt-2">
            Featured Tour Packages
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Handpicked vacation bundles with verified guides, luxury transport, and hand-selected hotels.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#00a8b5] text-white shadow-lg shadow-teal-500/25 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Image & Badges */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-[#0e2a52]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  {pkg.badge}
                </div>

                {/* Discount Tag */}
                <div className="absolute top-4 right-4 bg-[#ff7a22] text-white text-xs font-extrabold px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  {pkg.discount}
                </div>

                {/* Location Bar */}
                <div className="absolute bottom-3 left-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-2 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#00a8b5]" />
                    <span className="font-medium truncate">{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-yellow-400">
                    <Star className="w-3.5 h-3.5 fill-yellow-400" />
                    <span>{pkg.rating}</span>
                    <span className="text-gray-300 font-normal">({pkg.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta Specs */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-3">
                    <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-[#ff7a22]" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-[#00a8b5]" />
                      {pkg.groupSize}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0e2a52] group-hover:text-[#00a8b5] transition-colors leading-snug mb-4">
                    {pkg.title}
                  </h3>

                  {/* Tour Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Key Highlights
                    </span>
                    {pkg.highlights.map((point, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Included Items Tag List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {pkg.inclusions.map((inc, i) => (
                      <span
                        key={i}
                        className="bg-teal-50 text-[#0f766e] text-[11px] font-semibold px-2 py-0.5 rounded-md"
                      >
                        ✓ {inc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Book Action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-gray-400 line-through">${pkg.originalPrice}</span>
                      <span className="text-2xl font-black text-[#0e2a52]">${pkg.price}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 block">per person / all-inclusive</span>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="px-5 py-2.5 bg-[#ff7a22] hover:bg-[#e06616] text-white rounded-xl text-xs sm:text-sm font-bold transition shadow-md hover:shadow-orange-500/30 flex items-center gap-1.5"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;