"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import { Banner } from "@/types/banner";

interface SlideContentProps {
  banner: Banner;
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
  isAnimating: boolean;
}

export default function SlideContent({
  banner,
  currentSlide,
  totalSlides,
  onSlideChange,
  isAnimating,
}: SlideContentProps) {
  const indicatorIds = useMemo(
    () => Array.from({ length: totalSlides }, () => uuidv4()),
    [totalSlides],
  );

  return (
    <div className="w-full bg-white">
      <div className="shadow-sm mx-4 rounded-2xl bg-white">
        <Link
          href={banner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="size-full object-cover"
              priority
            />
            <div className="absolute left-4 top-4 rounded bg-pink-400 px-2 py-0.5 text-14-500 text-white">
              {banner.badge}
            </div>
          </div>

          <div className="px-4 py-3">
            <div className="flex items-start justify-between">
              <div className="line-clamp-1 flex-1 text-16-600 text-gray-900">
                {banner.title}
              </div>
              <button
                type="button"
                className="ml-2 shrink-0 rounded-full border border-pink-400 px-3 py-0.5 text-14-500 text-pink-400"
                onClick={(e) => {
                  e.preventDefault(); // 배너 링크 이동 중지
                  /* TODO - 투표하기 버튼 클릭 시 투표 페이지로 이동 */
                }}
              >
                투표하기
              </button>
            </div>
            <p className="mt-3 text-12-500 text-gray-500">{banner.period}</p>
          </div>
        </Link>
      </div>

      <div className="relative mt-15 pb-4 text-center">
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-1">
          {indicatorIds.map((id, index) => (
            <button
              type="button"
              key={id}
              onClick={() => {
                if (!isAnimating) {
                  onSlideChange(index);
                }
              }}
              className={clsx("size-1.5 rounded-full transition-colors", {
                "bg-pink-400": currentSlide === index,
                "bg-gray-200": currentSlide !== index,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
