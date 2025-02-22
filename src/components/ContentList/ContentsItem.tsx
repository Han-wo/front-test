import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { Content } from "@/types/contents";

interface ContentItemProps {
  content: Content;
  index: number;
  isLast: boolean;
  lastItemRef?: React.RefObject<HTMLDivElement>;
}

export default function ContentItem({
  content,
  index,
  isLast,
  lastItemRef,
}: ContentItemProps) {
  return (
    <motion.div
      key={content.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      ref={isLast ? lastItemRef : null}
      className="flex items-center gap-4 border-b border-gray-100 pb-4"
    >
      <div className="relative size-40 shrink-0 overflow-hidden rounded-md">
        <Image
          src={content.image}
          alt={content.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="line-clamp-2">{content.title}</h3>
      </div>
    </motion.div>
  );
}
