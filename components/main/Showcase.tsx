import Image from "next/image";

const showcaseImages = [
  { id: 1, src: "/showcase/1.png", alt: "Showcase 1" },
  { id: 2, src: "/showcase/2.png", alt: "Showcase 2" },
  { id: 3, src: "/showcase/3.png", alt: "Showcase 3" },
  { id: 4, src: "/showcase/4.png", alt: "Showcase 4" },
  { id: 5, src: "/showcase/5.png", alt: "Showcase 5" },
  { id: 6, src: "/showcase/6.png", alt: "Showcase 6" },
];

export function Showcase() {
  return (
    <section className="py-12 md:py-24 px-6 bg-[#FBF5DF]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl font-bold mb-2">Made with Riftshot</h2>
          <p className="text-lg text-black/50">
            See what creators are building
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {showcaseImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
