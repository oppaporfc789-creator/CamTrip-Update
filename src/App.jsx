import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const handleOpenBooking = (tour = null) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleSearch = (criteria) => {
    // Scrolls smoothly down to packages or destinations section
    const target = document.getElementById('packages') || document.getElementById('destinations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-[#ff7a22] selection:text-white">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <main className="flex-grow">
        <Hero onSearch={handleSearch} onOpenBooking={() => handleOpenBooking()} />
        <Features />
        <Destinations onSelectDestination={handleOpenBooking} />
        {/* Render Packages Component */}
        <Packages onSelectPackage={handleOpenBooking} />
        <About />
        <Gallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />

      {/* Booking Dialog Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTour={selectedTour}
      />
    </div>
  );
}

export default App;