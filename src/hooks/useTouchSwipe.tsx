import { TouchEvent, useRef } from "react";

import { TABS } from "@/constant/tap";

const useTouchSwipe = (
  activeTab: number,
  onTabChange: (index: number) => void,
) => {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && activeTab > 0) {
        onTabChange(activeTab - 1);
      } else if (swipeDistance < 0 && activeTab < TABS.length - 1) {
        onTabChange(activeTab + 1);
      }
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useTouchSwipe;
