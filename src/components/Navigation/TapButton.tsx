import clsx from "clsx";
import React, { memo } from "react";

import { Tab } from "@/constant/tap";

interface TabButtonProps {
  tab: Tab;
  index: number;
  activeTab: number;
  onTabChange: (index: number) => void;
}

const TabButton = memo<TabButtonProps>(
  ({ tab, index, activeTab, onTabChange }) => (
    <button
      type="button"
      onClick={() => onTabChange(index)}
      className={clsx("px-4 py-10 text-18-600 transition-colors", {
        "text-black font-bold": activeTab === index,
        "text-gray-400": activeTab !== index,
      })}
    >
      {tab}
    </button>
  ),
);

TabButton.displayName = "TabButton";
export default TabButton;
