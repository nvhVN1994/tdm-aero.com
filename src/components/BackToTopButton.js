import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-[100px] right-8 w-12 h-12 flex items-center justify-center border border-black rounded-full text-black hover:bg-[#22BDB6] transition duration-300 z-50 shadow-md"
        aria-label="Back to top"
      >
        ▲
      </button>
    )
  );
}
