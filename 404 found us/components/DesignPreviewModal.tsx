"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Image as ImageIcon, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DesignPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  websiteUrl?: string;
}

export default function DesignPreviewModal({ 
  isOpen, 
  onClose, 
  title, 
  images,
  websiteUrl 
}: DesignPreviewModalProps) {
  const [viewMode, setViewMode] = useState<"images" | "live">(websiteUrl ? "live" : "images");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-serif">{title}</DialogTitle>
          
          {/* Toggle between images and live preview */}
          {websiteUrl && images.length > 0 && (
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setViewMode("live")}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm transition-colors ${
                  viewMode === "live" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                <Globe className="h-4 w-4" />
                Live Preview
              </button>
              <button
                onClick={() => setViewMode("images")}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm transition-colors ${
                  viewMode === "images" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                <ImageIcon className="h-4 w-4" />
                Screenshots
              </button>
            </div>
          )}
          
          {/* Show only live preview button if no images */}
          {websiteUrl && images.length === 0 && (
            <div className="flex gap-2 mt-4">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm bg-primary text-primary-foreground"
              >
                <Globe className="h-4 w-4" />
                Live Preview
              </button>
            </div>
          )}
        </DialogHeader>
        
        <div className="overflow-y-auto" style={{ height: 'calc(90vh - 140px)' }}>
          {viewMode === "live" && websiteUrl ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center">
              <Globe className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-serif mb-2">Live Preview Unavailable</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                This website doesn't allow embedding. Click the button below to view it in a new tab.
              </p>
              <Button
                onClick={() => window.open(websiteUrl, '_blank', 'noopener,noreferrer')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Open Website
              </Button>
            </div>
          ) : (
            <div className="space-y-6 p-6">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className="relative w-full aspect-video bg-muted rounded-sm overflow-hidden">
                    <Image
                      src={image}
                      alt={`${title} preview ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No preview images available yet.</p>
                  <p className="text-sm text-muted-foreground mt-2">Add images to the images array for this project.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

