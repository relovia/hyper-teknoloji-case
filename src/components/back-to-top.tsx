"use client";

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {backToTop && (
        <button
          onClick={scrollToTop}
          className="flex items-center gap-x-2 fixed z-[50] px-4 py-2 bottom-4 right-4 bg-[#3D7DC8] text-white rounded-full transition-all duration-500 cursor-pointer"
        >
          <ArrowUp /> Başa Dön
        </button>
      )}
    </div>
  );
}
