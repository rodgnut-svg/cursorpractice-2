"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Image as ImageIcon, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-serif">{title}</DialogTitle>
            <button
              onClick={onClose}
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          
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
            <div className="w-full h-full">
              <iframe
                src={websiteUrl}
                className="w-full h-full border-0"
                style={{ minHeight: 'calc(90vh - 140px)' }}
                title={`${title} website preview`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
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

