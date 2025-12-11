"use client";

import { useState } from "react";
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

  return (
    <>
      <section id="work" className="relative w-full py-24 md:py-32">
        <div className="px-8 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto grid gap-12 lg:gap-16 lg:grid-cols-[320px_1fr]">
            <div className="space-y-6 h-fit sticky top-32">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold uppercase leading-tight">
                PORTFOLIO
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                Scroll to explore a stack of live builds. Each card pins in place as you move down the page so you can linger on the details.
              </p>
            </div>

            <div className="relative min-h-[50vh]">
              <div className="absolute inset-x-4 top-6 bottom-0 bg-gradient-to-b from-muted/40 via-transparent to-transparent blur-3xl pointer-events-none" />

              <ScrollStack
                itemDistance={300} // Increased for smoother, longer transition
                stackPosition="20%"
                itemScale={0.05}
                itemStackDistance={25}
                baseScale={0.9}
                scaleDuration={0.4}
                useWindowScroll={false} // Enable Lenis for smooth momentum scroll
              >
                {projects.map((project, index) => {
                  const hasLivePreview = index === 0 || index === 1 || index === 2; // All projects have live preview in original code logic

                  return (
                    <ScrollStackItem
                      key={index}
                      className="w-full pb-24" // padding bottom to space them out naturally before stack kicks in
                    >
                      <div
                        className={`w-full md:ml-auto md:w-[90%] lg:w-full ${!hasLivePreview ? "cursor-pointer" : ""
                          }`}
                        onClick={() => !hasLivePreview && setSelectedProject(index)}
                      >
                        <div className="space-y-6 rounded-xl border border-border/60 bg-background/95 backdrop-blur-sm overflow-hidden shadow-xl" style={{ isolation: 'isolate', borderRadius: '12px' }}>
                          {/* Image or Live Preview */}
                          {hasLivePreview ? (
                            <div
                              className="relative w-full h-[520px] md:h-[640px] lg:h-[720px] overflow-hidden bg-muted"
                              style={{ borderRadius: '12px' }}
                            >
                              <iframe
                                src={project.websiteUrl}
                                className="w-full h-full border-0"
                                title={`${project.title} Live Preview`}
                                scrolling="yes"
                                allowFullScreen
                                style={{
                                  display: "block",
                                }}
                              />
                            </div>
                          ) : (
                            <div className="relative w-full aspect-[4/3] bg-white border-b border-border overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain p-8"
                                sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                              />

                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-black/0 hover:bg-black/15 transition-colors duration-300 flex items-center justify-center group">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="text-white text-lg font-medium bg-black/50 px-6 py-3 rounded-md">
                                    View project
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Content */}
                          <div className="space-y-3 px-6 pb-8 bg-background">
                            <div className="flex items-baseline justify-between gap-4">
                              <h3 className="text-2xl md:text-3xl font-serif">
                                {project.title}
                              </h3>
                              <span className="text-sm text-muted-foreground whitespace-nowrap">
                                {project.year}
                              </span>
                            </div>
                            <p className="text-base text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                            <div className="pt-2">
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
            </div>
          </div>
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

