"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full px-8 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-12 md:space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight text-balance">
              Let's create something
              <br />
              <span className="italic">extraordinary</span>.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch and let's start the conversation.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div className="space-y-2 text-left">
                <Label htmlFor="name" className="text-sm">Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Your name"
                  className="h-12 rounded-sm border-border focus:ring-1 focus:ring-foreground"
                />
              </div>
              
              <div className="space-y-2 text-left">
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com"
                  className="h-12 rounded-sm border-border focus:ring-1 focus:ring-foreground"
                />
              </div>
              
              <div className="space-y-2 text-left">
                <Label htmlFor="message" className="text-sm">Message</Label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-3 py-2 rounded-sm border border-border focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-base px-8 py-6 rounded-sm hover:opacity-90 transition-opacity"
                >
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

