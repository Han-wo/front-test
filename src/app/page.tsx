import BannerSlider from "@/components/BannerSlider";
import ContentList from "@/components/ContentList";

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      <BannerSlider />
      <ContentList />
    </main>
  );
}
