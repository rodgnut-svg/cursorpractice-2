export default function Home() {
  return (
    <>
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-loft-off-white border-b border-loft-green/20 shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 md:h-28">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center" aria-label="Loft Mobile Golf Studio Home">
                <img
                  src="/assets/loft-logo.jpg"
                  alt="Loft Mobile Golf Studio"
                  className="h-16 w-auto md:h-20"
                />
              </a>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-loft-green hover:text-loft-green/80 font-optima text-base transition-colors duration-200">
                About
              </a>
              <a href="#services" className="text-loft-green hover:text-loft-green/80 font-optima text-base transition-colors duration-200">
                Services
              </a>
              <a href="#courses" className="text-loft-green hover:text-loft-green/80 font-optima text-base transition-colors duration-200">
                Courses
              </a>
              <a href="#contact" className="text-loft-green hover:text-loft-green/80 font-optima text-base transition-colors duration-200">
                Contact
              </a>
              <button className="px-6 py-2 bg-loft-green text-white font-semibold text-base rounded-lg hover:bg-loft-green/90 transition-colors duration-200">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-loft-green p-2"
              aria-label="Toggle menu"
              aria-expanded="false"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative min-h-screen flex flex-col items-center justify-end px-4 pt-20 pb-32 md:pt-32 md:pb-48 bg-loft-off-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="/assets/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-loft-off-white/30 z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-8 md:space-y-12 mt-32 md:mt-48">
        <section className="space-y-6 md:space-y-8" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-gilda text-loft-green">
            Golf,Anywhere.
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-loft-green/90 max-w-2xl mx-auto leading-relaxed">
            Professional-grade golf simulation technology that comes to you. 
            Experience championship courses in the comfort of your own space.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button 
              className="px-8 py-4 bg-loft-green text-white font-semibold text-lg rounded-lg hover:bg-loft-green/90 active:bg-loft-green/95 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-loft-green focus-visible:outline-offset-2"
              aria-label="Discover more about Loft Mobile Golf Studio"
            >
              Discover Loft
            </button>
          </div>
        </section>

        {/* Supporting Stats */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-loft-green/20" aria-label="Key features">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-gilda text-loft-green" aria-label="18 plus">18+</div>
            <div className="text-sm md:text-base text-loft-green/80">Championship Courses</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-gilda text-loft-green" aria-label="20 minutes">20 min</div>
            <div className="text-sm md:text-base text-loft-green/80">Setup Time</div>
          </div>
          <div className="space-y-2 col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl font-gilda text-loft-green">Mobile</div>
            <div className="text-sm md:text-base text-loft-green/80">Comes to You</div>
          </div>
        </section>
        </div>
    </main>
    </>
  );
}

