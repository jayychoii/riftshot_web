import Image from "next/image";

const useCases = [
  {
    id: "developer",
    image: "/sub/developer.avif",
    title: "Developers",
    description:
      "Showcase your web projects, landing pages, and apps on Twitter, LinkedIn, or your portfolio. Split layouts let you show the full scope of your work in a single, stunning image.",
  },
  {
    id: "designer",
    image: "/sub/designer.avif",
    title: "Designers",
    description:
      "Present your web designs with professional frames and beautiful backgrounds. Perfect for Dribbble, Behance, or client presentations.",
  },
  {
    id: "marketer",
    image: "/sub/marketer.avif",
    title: "Marketers",
    description:
      "Create scroll-stopping social media content. Transform landing pages into engaging visual stories that drive clicks and conversions.",
  },
  {
    id: "creator",
    image: "/sub/creator.avif",
    title: "Content Creators",
    description:
      "Enhance your blog posts, tutorials, and documentation with beautiful screenshots that explain everything at a glance.",
  },
];

export function UseCases() {
  return (
    <section className="bg-[#FBF5DF]/50 py-16 md:py-32">
      <div className="text-center py-8 md:py-16">
        <h2 className="text-2xl font-bold mb-2">Made for Creators</h2>
        <p className="text-lg text-black/50">
          Perfect for showcasing your digital work
        </p>
      </div>

      <div className="space-y-6 md:space-y-8 px-4 md:px-6">
        {useCases.map((useCase) => (
          <div
            key={useCase.id}
            className="relative h-[60vh] md:h-[80vh] w-full rounded-xl md:rounded-2xl overflow-hidden"
          >
            {/* Background Image - Grayscale */}
            <div className="absolute inset-0">
              <Image
                src={useCase.image}
                alt={useCase.title}
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Card - 모바일: 하단 중앙, 데스크탑: 우측 하단 */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-12 md:right-12 md:left-auto md:max-w-md">
              <div className="bg-[#FBF5DF]/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
                  {useCase.title}
                </h3>
                <p className="text-sm md:text-base text-black/60 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
