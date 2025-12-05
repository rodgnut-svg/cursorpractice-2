"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full px-8 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.1] text-balance">
            404
            <br />
            FOUND
            <br />
            US
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
      </div>
    </section>
  );
}

