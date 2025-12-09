"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import DesignPreviewModal from "@/components/DesignPreviewModal";
import ScrollStack, { ScrollStackItem } from "@/components/reactbits/ScrollStack";

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
    const checkIfCentered = (index: number) => {
      const iframeContainer = iframeContainerRefs.current[index];
      if (!iframeContainer) return;

      const rect = iframeContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      
      // Check if element center is within 100px of viewport center
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const threshold = 100;
      
      const isCentered = distanceFromCenter < threshold && rect.top < viewportCenter && rect.bottom > viewportCenter;
      
      setIframeCenteredStates(prev => ({
        ...prev,
        [index]: isCentered
      }));
    };

    const handleScroll = () => {
      // Check all iframe containers
      Object.keys(iframeContainerRefs.current).forEach(key => {
        checkIfCentered(Number(key));
      });
    };

    const handleResize = () => {
      handleScroll();
    };

    // Check on scroll and resize
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
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

        <ScrollStack
          className="px-8 md:px-12 lg:px-16"
          itemDistance={200}
          itemStackDistance={30}
          stackPosition="20%"
          baseScale={0.85}
          rotationAmount={0}
          blurAmount={0}
          useWindowScroll={true}
        >
          {projects.map((project, index) => {
            const hasLivePreview = index === 0 || index === 1 || index === 2; // All projects have live preview
            
            return (
              <ScrollStackItem
                key={index}
                className="mb-[200px] max-w-7xl mx-auto"
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
                        className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
                      >
                        <iframe
                          src={project.websiteUrl}
                          className={`w-full h-full border-0 transition-opacity duration-300 ${iframeCenteredStates[index] ? 'pointer-events-auto' : 'pointer-events-none'}`}
                          title={`${project.title} Live Preview`}
                          scrolling="yes"
                          allowFullScreen
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
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
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

