"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageData {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export function ImageCarouselComponent({ images }: { images: ImageData[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });

  const handleZoom = (factor: number) => {
    setZoom((prevZoom) => {
      const newZoom = Math.max(1, Math.min(3, prevZoom + factor));
      if (newZoom === 1) {
        setPan({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoom > 1) {
      setIsDragging(true);
      setStartPan({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && zoom > 1) {
      const newX = e.clientX - startPan.x;
      const newY = e.clientY - startPan.y;
      setPan({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const navigateImage = useCallback(
    (direction: "next" | "prev") => {
      if (selectedImageIndex === null) return;
      const newIndex =
        direction === "next"
          ? (selectedImageIndex + 1) % images.length
          : (selectedImageIndex - 1 + images.length) % images.length;
      setSelectedImageIndex(newIndex);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    },
    [selectedImageIndex]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        case "Escape":
          setSelectedImageIndex(null);
          break;
      }
    },
    [navigateImage]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };

    window.addEventListener("mouseup", handleMouseUpGlobal);
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal);
    };
  }, []);

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <div className="w-full mx-auto p-4">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div
                  className="relative overflow-hidden rounded-lg cursor-pointer"
                  style={{ paddingBottom: "75%" }}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Dialog
        open={selectedImageIndex !== null}
        onOpenChange={() => {
          setSelectedImageIndex(null);
          setZoom(1);
          setPan({ x: 0, y: 0 });
        }}
      >
        <DialogContent
          className="max-w-[95vw] w-full max-h-[95vh] p-0 bg-transparent border-none"
          closable={false}
        >
          <div
            className="relative w-full h-full flex flex-col"
            style={{ height: "calc(95vh - 2rem)" }}
          >
            <div className="bg-black bg-opacity-50 p-2 flex justify-between items-center">
              <div className="text-white">
                <h2 className="text-lg font-semibold">
                  {selectedImage?.title}
                </h2>
                <p className="text-sm">{selectedImage?.description}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleZoom(0.5)}
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleZoom(-0.5)}
                  aria-label="Zoom out"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setSelectedImageIndex(null)}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div
              ref={imageRef}
              className="flex-grow overflow-hidden cursor-move relative"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {selectedImage && (
                <div className="absolute inset-0">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain transition-transform duration-200 ease-in-out"
                    style={{
                      transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${
                        pan.y / zoom
                      }px)`,
                      transformOrigin: "0 0",
                    }}
                  />
                </div>
              )}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                onClick={() => navigateImage("prev")}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => navigateImage("next")}
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
