function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <p className="font-hand text-2xl text-sienna mb-2">welcome to the studio</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-walnut">
            Paintings made <em className="text-terracotta not-italic ink-underline">by hand</em>,<br/>
            ordered with <span className="font-hand text-sienna">heart.</span>
          </h1>
          <p className="mt-6 text-walnut/75 max-w-md text-lg">
            Original works from a small studio in India — landscapes, portraits, florals, and devotional pieces.
            Browse the gallery, take a piece home, or commission something just for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#gallery" className="px-6 py-3 rounded-full bg-walnut text-cream hover:bg-ink transition shadow-frame">Explore the gallery</a>
            <a href="#commission" className="px-6 py-3 rounded-full border border-walnut/30 text-walnut hover:bg-walnut/5 transition">Commission a piece</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-walnut/70">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sage"></span> Hand-painted, never printed</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-terracotta"></span> Ships worldwide</span>
          </div>
        </div>

        <div className="relative reveal">
          <div className="absolute -top-4 -left-4 w-2/3 aspect-[4/5] rotate-[-5deg] bg-parchment p-3 shadow-frame">
            <div className="w-full h-full overflow-hidden border border-walnut/10">
              <PaintingPlaceholder seed={2} />
            </div>
          </div>
          <div className="ml-auto w-3/4 aspect-[4/5] rotate-[3deg] bg-parchment p-3 shadow-frame relative">
            <div className="w-full h-full overflow-hidden border border-walnut/10">
              <PaintingPlaceholder seed={5} />
            </div>
            <span className="absolute -bottom-4 -right-4 bg-terracotta text-cream font-hand text-lg px-4 py-1 rounded-full rotate-[-6deg] shadow-md">new this week</span>
          </div>

          <svg className="absolute -bottom-10 left-4 w-40" viewBox="0 0 200 80" fill="none">
            <path className="draw-stroke" d="M5 40 C 60 5, 130 75, 190 30" stroke="#3E2C1C" strokeWidth="2" strokeLinecap="round"/>
            <path d="M180 22 L 192 30 L 184 42" stroke="#3E2C1C" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div className="brush-divider"></div>
    </section>
  );
}
