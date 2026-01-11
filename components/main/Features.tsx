function LayoutCard({
  name,
  layout,
}: {
  name: string;
  layout: React.ReactNode;
}) {
  return (
    <div className="group cursor-pointer flex flex-col items-center">
      <div className="aspect-square w-full rounded-2xl p-4 flex items-center justify-center">
        {layout}
      </div>
      <p className="text-sm font-medium text-black/60">{name}</p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-12 md:py-20 px-6 bg-[#FBF5DF]/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Split Layouts</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Row 1 */}
          {/* Single */}
          <LayoutCard
            name="Single"
            layout={<div className="w-full h-full bg-black/70 rounded"></div>}
          />
          {/* Horizontal Split */}
          <LayoutCard
            name="Horizontal"
            layout={
              <div className="w-full h-full flex gap-1">
                <div className="flex-1 bg-black/70 rounded"></div>
                <div className="flex-1 bg-black/40 rounded"></div>
              </div>
            }
          />
          {/* Vertical Split */}
          <LayoutCard
            name="Vertical"
            layout={
              <div className="w-full h-full flex flex-col gap-1">
                <div className="flex-1 bg-black/70 rounded"></div>
                <div className="flex-1 bg-black/40 rounded"></div>
              </div>
            }
          />
          {/* 2x2 Grid */}
          <LayoutCard
            name="Grid"
            layout={
              <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
                <div className="bg-black/70 rounded"></div>
                <div className="bg-black/40 rounded"></div>
                <div className="bg-black/40 rounded"></div>
                <div className="bg-black/70 rounded"></div>
              </div>
            }
          />

          {/* Row 2 */}
          {/* Featured Left */}
          <LayoutCard
            name="Left"
            layout={
              <div className="w-full h-full flex gap-1">
                <div className="w-1/2 bg-black/70 rounded"></div>
                <div className="w-1/2 flex flex-col gap-1">
                  <div className="flex-1 bg-black/40 rounded"></div>
                  <div className="flex-1 bg-black/70 rounded"></div>
                </div>
              </div>
            }
          />
          {/* Featured Right */}
          <LayoutCard
            name="Right"
            layout={
              <div className="w-full h-full flex gap-1">
                <div className="w-1/2 flex flex-col gap-1">
                  <div className="flex-1 bg-black/70 rounded"></div>
                  <div className="flex-1 bg-black/40 rounded"></div>
                </div>
                <div className="w-1/2 bg-black/70 rounded"></div>
              </div>
            }
          />
          {/* Quincunx */}
          <LayoutCard
            name="Quincunx"
            layout={
              <div className="w-full h-full relative">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
                  <div className="bg-black/70 rounded"></div>
                  <div className="bg-black/40 rounded"></div>
                  <div className="bg-black/40 rounded"></div>
                  <div className="bg-black/70 rounded"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/3 h-1/3 bg-black rounded"></div>
                </div>
              </div>
            }
          />
          {/* Bento */}
          <LayoutCard
            name="Bento"
            layout={
              <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-1">
                <div className="bg-black/70 rounded col-span-2"></div>
                <div className="bg-black/40 rounded row-span-2"></div>
                <div className="bg-black/70 rounded"></div>
                <div className="bg-black/40 rounded"></div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
