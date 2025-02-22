export const TABS = [
  "차트",
  "Whook",
  "이벤트",
  "뉴스",
  "스토어",
  "총진수",
] as const;
export type Tab = (typeof TABS)[number];
