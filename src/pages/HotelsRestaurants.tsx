import React from 'react';
import Header from '@/components/Header';

const HotelsRestaurants = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <div className="relative w-full h-[320px] flex items-center justify-center bg-gray-200">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Fire Extinguisher For Hotels & Restaurants</h1>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500">
        Home / Industries / Fire Extinguisher For Hotels & Restaurants
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* GUEST ROOMS & KITCHEN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Guest Rooms */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">GUEST ROOMS</h2>
            <div className="flex flex-wrap gap-4">
              {/* ABC Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
                <div className="font-semibold mb-2">ABC Type</div>
                <img src="/public/placeholder.svg" alt="ABC Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  <img src="/public/placeholder.svg" alt="Class A" className="h-5" />
                  <img src="/public/placeholder.svg" alt="Class B" className="h-5" />
                  <img src="/public/placeholder.svg" alt="Class C" className="h-5" />
                  <img src="/public/placeholder.svg" alt="Electrical" className="h-5" />
                  <img src="/public/placeholder.svg" alt="CE" className="h-5" />
                </div>
                <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
              </div>
            </div>
          </div>
          {/* Kitchen */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">KITCHEN</h2>
            <div className="flex flex-wrap gap-4">
              {/* K Class */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
                <div className="font-semibold mb-2">K Class</div>
                <img src="/public/placeholder.svg" alt="K Class" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  <img src="/public/placeholder.svg" alt="Class F" className="h-5" />
                  <img src="/public/placeholder.svg" alt="CE" className="h-5" />
                </div>
                <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
              </div>
              {/* Kitchen Fire Suppression System */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire System</div>
                <div className="font-semibold mb-2">Kitchen Fire Suppression System</div>
                <img src="/public/placeholder.svg" alt="Kitchen Fire Suppression System" className="h-20 mb-2" />
                <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
        {/* ELECTRICAL PANELS */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">ELECTRICAL PANELS</h2>
          <div className="flex flex-wrap gap-4">
            {/* Clean Agent Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
              <div className="font-semibold mb-2">Clean Agent Type</div>
              <img src="/public/placeholder.svg" alt="Clean Agent Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                <img src="/public/placeholder.svg" alt="Class A" className="h-5" />
                <img src="/public/placeholder.svg" alt="Class B" className="h-5" />
                <img src="/public/placeholder.svg" alt="Class C" className="h-5" />
                <img src="/public/placeholder.svg" alt="Electrical" className="h-5" />
                <img src="/public/placeholder.svg" alt="CE" className="h-5" />
              </div>
              <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
            </div>
            {/* CO2 Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-semibold mb-2">CO<sub>2</sub> Type</div>
              <img src="/public/placeholder.svg" alt="CO2 Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                <img src="/public/placeholder.svg" alt="Class B" className="h-5" />
                <img src="/public/placeholder.svg" alt="Class C" className="h-5" />
                <img src="/public/placeholder.svg" alt="Electrical" className="h-5" />
                <img src="/public/placeholder.svg" alt="ISI" className="h-5" />
              </div>
              <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
            </div>
            {/* Panel Flooding System */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire System</div>
              <div className="font-semibold mb-2">Panel Flooding System</div>
              <img src="/public/placeholder.svg" alt="Panel Flooding System" className="h-20 mb-2" />
              <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
            </div>
          </div>
        </div>
        {/* PARKING & TRANSFORMER AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Parking */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">PARKING</h2>
            <div className="flex flex-wrap gap-4">
              {/* CO2 Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-semibold mb-2">CO<sub>2</sub> Type</div>
                <img src="/public/placeholder.svg" alt="CO2 Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  <img src="/public/placeholder.svg" alt="Class B" className="h-5" />
                  <img src="/public/placeholder.svg" alt="Class C" className="h-5" />
                  <img src="/public/placeholder.svg" alt="Electrical" className="h-5" />
                  <img src="/public/placeholder.svg" alt="ISI" className="h-5" />
                </div>
                <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
              </div>
              {/* ABC Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-semibold mb-2">ABC Type</div>
                <img src="/public/placeholder.svg" alt="ABC Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  <img src="/public/placeholder.svg" alt="Class A" className="h-5" />
                  <img src="/public/placeholder.svg" alt="Class B" className="h-5" />
                  <img src="/public/placeholder.svg" alt="Class C" className="h-5" />
                  <img src="/public/placeholder.svg" alt="Electrical" className="h-5" />
                  <img src="/public/placeholder.svg" alt="CE" className="h-5" />
                </div>
                <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
              </div>
            </div>
          </div>
          {/* Transformer Area */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">TRANSFORMER AREA</h2>
            <div className="flex flex-wrap gap-4">
              {/* Transformer Flooding System */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire System</div>
                <div className="font-semibold mb-2">Transformer Flooding System</div>
                <img src="/public/placeholder.svg" alt="Transformer Flooding System" className="h-20 mb-2" />
                <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
        {/* FOAM TROLLEY */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">FOAM TROLLEY</h2>
          <div className="flex flex-wrap gap-4">
            {/* Foam Trolley */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-semibold mb-2">Foam Trolley</div>
              <img src="/public/placeholder.svg" alt="Foam Trolley" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                <img src="/public/placeholder.svg" alt="Class A" className="h-5" />
                <img src="/public/placeholder.svg" alt="Class B" className="h-5" />
                <img src="/public/placeholder.svg" alt="Class C" className="h-5" />
                <img src="/public/placeholder.svg" alt="Electrical" className="h-5" />
                <img src="/public/placeholder.svg" alt="CE" className="h-5" />
              </div>
              <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#222] text-white pt-10 pb-4 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
            <img src="/public/placeholder.svg" alt="Footer Logo" className="h-12 mb-4" />
            <div className="text-xs mb-2">Office No.502, 5th Floor, A wing, Damji Shamji Corporate Square, Ghatkopar - Andheri Link Road, Laxmi Nagar, Ghatkopar (E), Mumbai - 400075</div>
            <div className="text-xs mb-2">+91 22 2500 1288</div>
            <div className="text-xs mb-2">marketing@kanexfire.com</div>
          </div>
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
            <div className="font-bold mb-2">PAYMENT METHODS ACCEPTED</div>
            <img src="/public/placeholder.svg" alt="Payment Methods" className="h-8" />
          </div>
          <div className="flex-1 min-w-[220px]">
            <div className="font-bold mb-2">QUICK LINKS</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#">Home</a>
              <a href="#">Career</a>
              <a href="#">Contact</a>
              <a href="#">Resources</a>
              <a href="#">Blog</a>
              <a href="#">About</a>
              <a href="#">Infrastructure</a>
              <a href="#">Clients</a>
              <a href="#">Testimonials</a>
              <a href="#">Return and Refund Policy</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">© {new Date().getFullYear()} Kanex Fire Solutions Limited. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default HotelsRestaurants; 