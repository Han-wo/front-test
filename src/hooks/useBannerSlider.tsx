import { TouchEvent, useEffect, useRef, useState } from "react";

import BANNERS from "@/constant/banner";

const useBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleSlideChange = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrevSlide = () => {
    handleSlideChange(
      currentSlide === 0 ? BANNERS.length - 1 : currentSlide - 1,
    );
  };

  const handleNextSlide = () => {
    handleSlideChange(
      currentSlide === BANNERS.length - 1 ? 0 : currentSlide + 1,
    );
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isAnimating) return;

    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrevSlide();
      } else {
        handleNextSlide();
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNextSlide();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  return {
    currentSlide,
    isAnimating,
    handleSlideChange,
    handlePrevSlide,
    handleNextSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    BANNERS,
  };
};

export default useBannerSlider;
