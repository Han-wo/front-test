"use client";

import { motion } from "framer-motion";

import useContentList from "@/hooks/useContentList";

import ContentItem from "./ContentsItem";

export default function ContentList() {
  const { contents, isLoading, hasMore, lastItemRef } = useContentList();

  return (
    <div className="px-4">
      <div className="mb-10 py-4 text-18-600">컨텐츠 큐레이션 제목</div>
      <motion.div className="space-y-4">
        {contents.map((content, index) => (
          <ContentItem
            key={content.id}
            content={content}
            index={index}
            isLast={index === contents.length - 1}
            lastItemRef={lastItemRef}
          />
        ))}
      </motion.div>

      {isLoading && (
        <div className="py-4 text-center text-gray-500">로딩 중...</div>
      )}

      {!hasMore && (
        <div className="py-4 text-center text-gray-500">
          더 이상 콘텐츠가 없습니다.
        </div>
      )}

      <div className="py-4 text-center text-gray-500">
        {contents.length === 0 && !isLoading && "콘텐츠가 없습니다."}
      </div>
    </div>
  );
}
