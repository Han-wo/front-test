"use client";

import { useState } from "react";

import Navigation from "./index";

export default function NavigationWrapper() {
  const [activeTab, setActiveTab] = useState(0);

  return <Navigation activeTab={activeTab} onTabChange={setActiveTab} />;
}
