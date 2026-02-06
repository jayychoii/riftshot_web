"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const features = [
  "All Split Layouts",
  "Professional Frame Styles",
  "40+ Background Presets",
  "Up to 8K Resolution Export",
  "PNG & JPEG Export",
  "All Future Updates",
];

export function Pricing() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    if (!user) {
      router.push("/auth");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          userId: user.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Purchase error:", error);
      alert("Failed to start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-12 md:py-24 px-6 bg-[#FBF5DF]/50">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Unlock Everything</h2>
          <p className="text-base md:text-lg text-black/50">
            Pay once, use forever. No subscriptions.
            <br />
            Now is the lowest price ever.
          </p>
        </div>

        <div className="bg-[#F5EDD3] rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="inline-block text-black text-sm font-medium mb-4">
              LIFETIME ACCESS
            </div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl md:text-6xl font-bold">$9.99</span>
            </div>
          </div>

          <div className="border-t border-black/10 pt-8 mb-8">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-black/70 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-black/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handlePurchase}
            disabled={loading || authLoading}
            className="w-full inline-flex items-center justify-center bg-black text-white px-6 py-4 rounded-2xl text-base md:text-lg font-medium hover:bg-black/80 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? "Processing..."
              : authLoading
                ? "Loading..."
                : "Get Riftshot Now"}
          </button>
        </div>
      </div>
    </section>
  );
}
