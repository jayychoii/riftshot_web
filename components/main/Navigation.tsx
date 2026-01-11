import Image from "next/image";
import { ChromeIcon } from "../../icons/ChromeIcon";

export function Navigation() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/50 backdrop-blur-lg rounded-2xl px-6 py-3 shadow-lg shadow-black/5 flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Riftshot Logo"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <span className="font-semibold hidden md:block">Riftshot</span>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/75 transition-colors"
        >
          <ChromeIcon className="w-4 h-4" />
          Add<span className="hidden sm:inline"> to Chrome</span>
        </a>
      </div>
    </nav>
  );
}
