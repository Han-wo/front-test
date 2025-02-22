"use client";

import { AnimatePresence, motion } from "framer-motion";

import useBannerSlider from "@/hooks/useBannerSlider";

import SlideContent from "./SlideContents";

export default function BannerSlider() {
  const {
    currentSlide,
    isAnimating,
    handleSlideChange,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    BANNERS,
  } = useBannerSlider();

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden bg-gradient-to-b from-pink-100"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SlideContent
              banner={BANNERS[currentSlide]}
              currentSlide={currentSlide}
              totalSlides={BANNERS.length}
              onSlideChange={handleSlideChange}
              isAnimating={isAnimating}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
