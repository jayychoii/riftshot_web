"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    id: "capture",
    title: "Full-Page Capture",
    description: "Capture entire webpages with a single click.",
    image: "/main/capture.png",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "split",
    title: "Auto Split Layouts",
    description:
      "Automatically divide your screenshot into stunning multi-panel layouts.",
    image: "/main/split.png",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    id: "styling",
    title: "Beautiful Styling",
    description:
      "Add frames, shadows, backgrounds, and effects to make your shots stand out.",
    image: "/main/styling.png",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    id: "export",
    title: "Export in 8K",
    description: "Download as PNG or JPEG with resolution options up to 8K.",
    image: "/main/export.png",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    ),
  },
];

export function ValueProposition() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - windowCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 md:pb-[20vh] px-6 bg-[#FBF5DF]/50">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout - 설명 -> 이미지 순서로 반복 */}
        <div className="md:hidden space-y-6">
          {features.map((feature, index) => (
            <div key={feature.id} className="space-y-2">
              {/* 설명 카드 */}
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="p-6 rounded-2xl"
              >
                <div className="w-12 h-12 flex items-start justify-start text-black mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">
                  {feature.title}
                </h3>
                <p className="text-base text-black/50">{feature.description}</p>
              </div>
              {/* 이미지 */}
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className={`object-contain ${
                    feature.id === "export" ? "scale-75" : ""
                  }`}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - 기존 레이아웃 유지 */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-start">
          {/* Left side - Features cards */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={() => setActiveIndex(index)}
                className={`aspect-square p-8 rounded-2xl cursor-pointer transition-all duration-500 flex flex-col justify-center ${
                  activeIndex === index ? "scale-100" : "scale-95 opacity-60"
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-start justify-start text-black transition-colors duration-300 ${
                    activeIndex === index ? "text-black" : "text-black/50"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    activeIndex === index ? "text-black" : "text-black/50"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-base transition-colors duration-300 ${
                    activeIndex === index ? "text-black/50" : "text-black/20"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - Sticky Image */}
          <div className="sticky top-[calc(50vh-300px)] h-[600px]">
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className={`object-contain ${
                      feature.id === "export" ? "scale-75" : ""
                    }`}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
