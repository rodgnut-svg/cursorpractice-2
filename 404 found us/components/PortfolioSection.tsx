"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import DesignPreviewModal from "@/components/DesignPreviewModal";

const projects = [
  {
    title: "Cyber Security",
    category: "Security Solutions",
    description: "A complete digital transformation for a leading cyber security firm, focusing on minimal design and maximum impact.",
    year: "2024",
    websiteUrl: "https://www.zimsaas.io",
    image: "/portfolio/cyber-security.svg",
    images: [],
  },
  {
    title: "Loft Golf Studio",
    category: "Premium Experience",
    description: "Elegant landing page for a mobile golf simulation studio, emphasizing luxury and accessibility.",
    year: "2024",
    websiteUrl: "",
    image: "/portfolio/loft-golf.svg",
    images: [],
  },
  {
    title: "Urban Collective",
    category: "Architecture Firm",
    description: "Portfolio website showcasing innovative architectural projects with a focus on visual storytelling.",
    year: "2023",
    websiteUrl: "",
    image: "/portfolio/urban-collective.svg",
    images: [],
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });
  
  // Calculate transform based on number of items
  // Each item is ~600px + 48px gap, we want to scroll through all items
  const x = useTransform(scrollYProgress, [0, 1], isMounted ? ["1%", "-66%"] : ["0%", "0%"]);

  return (
    <>
      <section ref={targetRef} id="work" className="relative w-full h-[400vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="px-8 md:px-12 lg:px-16 mb-16">
            <div className="max-w-7xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Selected work.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                We've helped ambitious brands transform their digital presence.
              </p>
            </div>
          </div>

          <motion.div 
            style={{ x }}
            className="flex gap-8 md:gap-12 px-8 md:px-12 lg:px-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[400px] md:w-[500px] lg:w-[600px] group cursor-pointer"
                onClick={() => setSelectedProject(index)}
              >
                <div className="space-y-6">
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] bg-muted rounded-sm overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
              </motion.div>
            ))}
            
            {/* Add spacer at the end */}
            <div className="flex-shrink-0 w-8 md:w-12 lg:w-16" />
          </motion.div>
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

