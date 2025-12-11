"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import TextType from "@/components/TextType";
import Cubes from "@/components/Cubes";

export default function HeroSection() {
  const handleScrollToWork = () => {
    const target = document.querySelector("#work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full px-8 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex min-h-[72vh] flex-col md:flex-row items-center md:items-end gap-8 md:gap-12">
          <div className="flex-1 space-y-8 md:space-y-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-[1.1] text-balance">
              <TextType 
                text={["404 FOUND", "We Design", "We Build"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                as="span"
                textClassNames={["font-bold uppercase", "", ""]}
              />
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              We partner with ambitious brands to design and build websites that don't just look beautiful — they drive results.
            </p>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 rounded-sm hover:opacity-90 transition-opacity"
              >
                Start a conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex w-full md:w-auto md:flex-shrink-0 items-center justify-center md:justify-end">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
              <Cubes 
                gridSize={10}
                faceColor="#1a0b2e"
                borderStyle="1px solid rgba(0, 255, 255, 0.6)"
                shadow={false}
                autoAnimate={true}
                rippleOnClick={true}
                rippleColor="#00ffff"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll to portfolio"
        onClick={handleScrollToWork}
        className="absolute left-6 bottom-6 md:left-8 md:bottom-8 text-neutral-900 hover:text-neutral-700 transition-colors animate-bounce motion-reduce:animate-none"
      >
        <ArrowDown className="h-6 w-6" strokeWidth={2.5} />
      </button>
    </section>
  );
}

