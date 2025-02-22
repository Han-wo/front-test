import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SlideButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export default function SlideButton({ direction, onClick }: SlideButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute z-10 mt-100 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 md:block ${
        direction === "prev" ? "left-4" : "right-4"
      }`}
    >
      {direction === "prev" ? (
        <IoIosArrowBack size={24} />
      ) : (
        <IoIosArrowForward size={24} />
      )}
    </button>
  );
}
