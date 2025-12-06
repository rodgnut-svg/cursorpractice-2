export default function Navigation() {
  return (
    <nav className="w-full py-8 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif font-medium">
          404 Found
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          <a 
            href="#work" 
            className="text-sm tracking-wide hover:opacity-60 transition-opacity duration-200"
          >
            Work
          </a>
          <a 
            href="#about" 
            className="text-sm tracking-wide hover:opacity-60 transition-opacity duration-200"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-sm tracking-wide hover:opacity-60 transition-opacity duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

