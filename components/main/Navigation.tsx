"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChromeIcon } from "../../icons/ChromeIcon";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";

const navLinks = [
  { href: "/#", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/changelog", label: "Changelog" },
];

export function Navigation() {
  const { user, loading, isPaid } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setShowDropdown(false);
  };

  const getUserInitial = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "U";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-300">
      <div
        className={`mx-auto px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-white/50 max-w-4xl backdrop-blur-xl shadow-lg shadow-black/5 rounded-2xl"
            : "bg-transparent max-w-6xl"
        }`}
      >
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image
            src="/logo.png"
            alt="Riftshot Logo"
            width={28}
            height={28}
            className="w-7 h-7 mt-0.5"
          />
          <span className="text-lg hidden md:block font-semibold">
            Riftshot
          </span>
        </Link>

        {/* Nav Links - Absolute Center */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm hover:text-black/75 text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions - Right */}
        <div className="flex items-center gap-2 md:gap-3 z-10">
          {!loading &&
            (user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-8 h-8 rounded-full bg-black text-white text-sm font-medium flex items-center justify-center hover:bg-black/80 transition-colors overflow-hidden ring-2 ring-offset-2 ring-transparent hover:ring-black/20"
                >
                  {user.user_metadata?.avatar_url ? (
                    <Image
                      src={user.user_metadata.avatar_url}
                      alt="Profile"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    getUserInitial()
                  )}
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg shadow-black/10 border border-black/5 overflow-hidden">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-black/5">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-black/80 truncate">
                          {user.user_metadata?.full_name || "User"}
                        </p>
                        {isPaid ? (
                          <span className="shrink-0 px-2 py-0.5 bg-black text-white text-[10px] font-semibold rounded-full">
                            LIFETIME
                          </span>
                        ) : (
                          <span className="shrink-0 px-2 py-0.5 bg-black/10 text-black/60 text-[10px] font-semibold rounded-full">
                            FREE
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-black/40 truncate mt-0.5">
                        {user.email}
                      </p>
                    </div>

                    {/* Status Card */}
                    {isPaid ? (
                      <div className="px-4 py-2 border-b border-black/5 bg-black/5">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div>
                            <p className="text-xs font-medium text-black/80">
                              Lifetime Access
                            </p>
                            <p className="text-[10px] text-black/40">
                              All features unlocked
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href="#pricing"
                        onClick={() => setShowDropdown(false)}
                        className="block px-4 py-2 border-b border-black/5 bg-amber-50 hover:bg-amber-100 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-amber-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          <div>
                            <p className="text-xs font-medium text-black/80">
                              Upgrade now
                            </p>
                            <p className="text-[10px] text-black/40">
                              Unlock all features
                            </p>
                          </div>
                        </div>
                      </a>
                    )}

                    {/* Sign Out */}
                    <button
                      onClick={handleSignOut}
                      className="w-full px-4 py-2.5 text-left text-sm text-black/60 hover:text-black hover:bg-black/5 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth"
                className="px-4 py-2 text-sm font-medium text-black hover:text-black/75 transition-colors"
              >
                Sign in
              </Link>
            ))}
          <a
            href="https://chromewebstore.google.com/detail/riftshot/ggfcmgjjafcapbmclbehjkcbjpbgpfia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/75 transition-colors"
          >
            <ChromeIcon className="w-4 h-4" />
            Add to Chrome
          </a>
        </div>
      </div>
    </nav>
  );
}
