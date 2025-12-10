"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import DesignPreviewModal from "@/components/DesignPreviewModal";

const projects = [
  {
    title: "Automated Booking Agency",
    category: "AI Automation",
    description: "AI-powered automation platform featuring WhatsApp bots, booking systems, and CRM flows that streamline business operations.",
    year: "2024",
    websiteUrl: "https://www.zimsaas.io",
    image: "/portfolio/zimsaas-preview.png",
    images: [],
  },
  {
    title: "Loft Golf Studio",
    category: "Premium Experience",
    description: "Elegant landing page for a mobile golf simulation studio, emphasizing luxury and accessibility.",
    year: "2024",
    websiteUrl: "https://loft-website.vercel.app/",
    image: "/portfolio/loft-golf.svg",
    images: [],
  },
  {
    title: "Les Benjamins Corporate Strategy Pitch",
    category: "Corporate Strategy",
    description: "Corporate strategy pitch presentation showcasing innovative business solutions and strategic planning.",
    year: "2024",
    websiteUrl: "https://www.lesbenjaminsgroup4.com",
    image: "/portfolio/urban-collective.svg",
    images: [],
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [iframeCenteredStates, setIframeCenteredStates] = useState<Record<number, boolean>>({});
  const iframeContainerRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;

    const checkIfCentered = (index: number): boolean | undefined => {
      const iframeContainer = iframeContainerRefs.current[index];
      if (!iframeContainer) return undefined;

      const rect = iframeContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      
      // Check if element center is within 100px of viewport center
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const threshold = 100;
      
      return distanceFromCenter < threshold && rect.top < viewportCenter && rect.bottom > viewportCenter;
    };

    const updateStates = () => {
      ticking = false;
      setIframeCenteredStates(prev => {
        const updates: Record<number, boolean> = { ...prev };
        let hasChanges = false;

        // Check all iframe containers and collect updates
        Object.keys(iframeContainerRefs.current).forEach(key => {
          const index = Number(key);
          const isCentered = checkIfCentered(index);
          if (isCentered !== undefined && prev[index] !== isCentered) {
            updates[index] = isCentered;
            hasChanges = true;
          }
        });

        return hasChanges ? updates : prev;
      });
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateStates);
        ticking = true;
      }
    };

    const handleResize = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateStates);
        ticking = true;
      }
    };

    // Initial check
    updateStates();

    // Check on scroll and resize with requestAnimationFrame throttling
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <section id="work" className="relative w-full min-h-screen py-24 md:py-32">
        <div className="px-8 md:px-12 lg:px-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold uppercase leading-tight">
              PORTFOLIO
            </h2>
          </div>
        </div>

        <div className="px-8 md:px-12 lg:px-16">
          {projects.map((project, index) => {
            const hasLivePreview = index === 0 || index === 1 || index === 2; // All projects have live preview
            
            return (
              <div
                key={index}
                className={`${index === projects.length - 1 ? 'mb-16 md:mb-24' : 'mb-[200px]'} max-w-7xl mx-auto`}
              >
                <div
                  className={`${hasLivePreview ? 'w-full max-w-none' : 'w-full md:w-[500px] lg:w-[600px]'} mx-auto ${!hasLivePreview ? 'group cursor-pointer' : ''}`}
                  onClick={() => !hasLivePreview && setSelectedProject(index)}
                >
                  <div className="space-y-6">
                    {/* Image or Live Preview */}
                    {hasLivePreview ? (
                      <div 
                        ref={(el) => {
                          if (el) {
                            iframeContainerRefs.current[index] = el;
                          }
                        }}
                        className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden will-change-transform rounded-[6px]"
                        style={{ 
                          transform: 'translateZ(0)',
                          borderRadius: '6px',
                          clipPath: 'inset(0 0 0 0 round 6px)'
                        }}
                      >
                        <iframe
                          src={project.websiteUrl}
                          className={`w-full h-full border-0 ${iframeCenteredStates[index] ? 'pointer-events-auto' : 'pointer-events-none'}`}
                          title={`${project.title} Live Preview`}
                          scrolling="yes"
                          allowFullScreen
                          style={{ 
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            opacity: 1,
                            willChange: 'auto',
                            borderRadius: '6px',
                            border: 'none',
                            display: 'block'
                          }}
                        />
                      </div>
                    ) : (
                      <div className="relative w-full aspect-[4/3] bg-white border border-border rounded-sm overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                        />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-white text-lg font-medium bg-black/50 px-6 py-3 rounded-sm">
                              View project
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-2xl md:text-3xl font-serif">
                          {project.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="pt-1">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Design Preview Modal */}
      {selectedProject !== null && (
        <DesignPreviewModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={projects[selectedProject].title}
          images={projects[selectedProject].images}
          websiteUrl={projects[selectedProject].websiteUrl}
        />
      )}
    </>
  );
}

