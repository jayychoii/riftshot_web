import { ChromeIcon } from "../../icons/ChromeIcon";

export function CTA() {
  return (
    <section className="py-12 md:py-24 px-6 bg-[#FBF5DF]/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#F5EDD3] rounded-2xl p-12 md:p-16 text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-black">
            Ready to Split Your Screenshots?
          </h2>
          <p className="text-base md:text-lg text-black/50 mb-6">
            Stop taking boring screenshots. Start creating visuals that get
            noticed.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 md:px-12 md:py-5 rounded-2xl text-base md:text-lg font-medium hover:bg-black/80 transition-all shadow-xl"
          >
            <ChromeIcon className="w-6 h-6" />
            Add to Chrome
          </a>
        </div>
      </div>
    </section>
  );
}
