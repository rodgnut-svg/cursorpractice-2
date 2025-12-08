import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Category Label */}
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100">
                BIN CLEANING EQUIPMENT MANUFACTURER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Start a Profitable Bin Cleaning Business in 30 Days
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Commercial-grade bin cleaning trailers engineered for daily routes, high-volume operators, and long-term durability.
            </p>

            {/* Key Features */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-blue-600" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-base md:text-lg text-gray-700 font-medium">
                  EPA-compliant sanitation systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-blue-600" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-base md:text-lg text-gray-700 font-medium">
                  Turn-key trailer or truck-mount builds
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-blue-600" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-base md:text-lg text-gray-700 font-medium">
                  Built for nonstop commercial routes
                </span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4" role="group" aria-label="Call to action buttons">
              <button className="px-8 py-4 bg-blue-700 text-white font-semibold text-base hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                Request Full Pricing
              </button>
              <button className="px-8 py-4 bg-white text-blue-700 font-semibold text-base border-2 border-blue-700 hover:bg-blue-50 hover:underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                See Equipment Models
              </button>
            </div>
          </div>

          {/* Right Column - Product Image Card */}
          <div className="order-first md:order-last">
            <div className="bg-gray-50 border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
              <div className="aspect-[4/3] flex items-center justify-center p-8 md:p-12">
                <div className="text-center space-y-4 w-full">
                  {/* Placeholder Visual Blocks */}
                  <div className="mx-auto w-3/4 h-32 bg-gray-200 border border-gray-300"></div>
                  <div className="mx-auto w-2/3 h-24 bg-gray-200 border border-gray-300"></div>
                  <div className="mx-auto w-4/5 h-20 bg-gray-200 border border-gray-300"></div>
                  
                  {/* Placeholder Text */}
                  <p className="text-sm font-medium text-gray-500 mt-6 uppercase tracking-wide">
                    BIN CLEANING TRAILER IMAGE
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

