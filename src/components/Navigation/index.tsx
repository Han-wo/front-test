"use client";

import React from "react";

import { TABS } from "@/constant/tap";
import useTouchSwipe from "@/hooks/useTouchSwipe";
import { NavigationProps } from "@/types/navigation";

import TabButton from "./TapButton";

export default function Navigation({
  activeTab,
  onTabChange,
}: NavigationProps) {
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchSwipe(
    activeTab,
    onTabChange,
  );

  return (
    <nav
      className="mx-auto flex max-w-430 overflow-x-auto whitespace-nowrap bg-pink-100 py-10"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {TABS.map((tab, index) => (
        <TabButton
          key={tab}
          tab={tab}
          index={index}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      ))}
    </nav>
  );
}
