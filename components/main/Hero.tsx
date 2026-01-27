"use client";

import { useState } from "react";
import { ChromeIcon } from "../../icons/ChromeIcon";

const VIDEO_URL =
  "https://pub-bde532205e72435fa935e2c534604e62.r2.dev/main/riftshot_x.mp4";

function LayoutPreview() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative w-full aspect-video">
        {!isLoaded && (
          <div className="absolute inset-0 bg-white/50 rounded-2xl animate-pulse" />
        )}
        <video
          className={`absolute inset-0 w-full h-full rounded-2xl transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setIsLoaded(true)}
          onContextMenu={(e) => e.preventDefault()}
          controlsList="nodownload"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <link rel="preload" href={VIDEO_URL} as="video" type="video/mp4" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-[#FBF5DF]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold font-playfair tracking-tight mb-4 md:mb-8">
            Full Screenshot
            <br />
            <span className="opacity-75 italic">Multiple Splits</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-black max-w-2xl mx-auto mb-10 leading-tight ">
            Capture your entire webpage and instantly split it into beautiful
            layouts.
            <br />
            Perfect for showcasing your work on social media, portfolios, and
            presentations.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center">
            <a
              href="https://chromewebstore.google.com/detail/riftshot/ggfcmgjjafcapbmclbehjkcbjpbgpfia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-6 py-2.5 md:px-8 md:py-4 rounded-full text-lg font-medium hover:bg-black/75 transition-all shadow-lg"
            >
              <ChromeIcon className="w-5 h-5" />
              Add to Chrome
            </a>
          </div>
        </div>

        {/* Hero Image - Layout Preview */}
        <LayoutPreview />
      </div>
    </section>
  );
}
