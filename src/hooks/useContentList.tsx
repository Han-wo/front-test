import { useCallback, useEffect, useRef, useState } from "react";

import { Content } from "@/types/contents";

const useContentList = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver>();
  const lastItemRef = useRef<HTMLDivElement>(null);

  const loadMoreContents = useCallback(() => {
    // 100개 초과시 더 이상 로드하지 않음
    if (contents.length >= 100) {
      setHasMore(false);
      return;
    }

    setIsLoading(true);
    // 실제 API 호출 대신 임시 데이터 생성
    setTimeout(() => {
      const newContents = Array.from({ length: 10 }, (_, i) => ({
        id: contents.length + i,
        title: `콘텐츠 ${contents.length + i}`,
        image: "/placeholder.jpg",
      }));

      // 마지막 로드에서 100개를 초과하지 않도록 조정
      const filteredContents = newContents.slice(
        0,
        Math.min(10, 100 - contents.length),
      );

      setContents((prev) => [...prev, ...filteredContents]);

      // 100개 도달 시 더 이상의 로드 방지
      if (contents.length + filteredContents.length >= 100) {
        setHasMore(false);
      }

      setIsLoading(false);
    }, 500); // 로딩 시뮬레이션
  }, [contents.length]);

  useEffect(() => {
    if (contents.length === 0) {
      loadMoreContents();
    }
  }, [loadMoreContents]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          loadMoreContents();
        }
      },
      { threshold: 0.1 },
    );

    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [isLoading, hasMore, loadMoreContents]);

  return {
    contents,
    isLoading,
    hasMore,
    lastItemRef,
    loadMoreContents,
  };
};

export default useContentList;
