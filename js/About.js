function Stat({n,l}) {
  return (
    <div className="bg-cream/5 border border-cream/15 rounded-lg py-4">
      <div className="font-serif text-3xl text-gold">{n}</div>
      <div className="text-xs text-cream/70 uppercase tracking-wider mt-1">{l}</div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 px-5 bg-walnut text-cream relative overflow-hidden">
      <svg className="absolute -top-10 -right-10 w-80 opacity-10" viewBox="0 0 200 200">
        <path d="M20 100 C 40 30, 160 30, 180 100 S 40 170, 20 100" fill="none" stroke="#F5EDE0" strokeWidth="2"/>
      </svg>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
        <div className="reveal">
          <div className="bg-parchment p-3 inline-block shadow-frame rotate-[-3deg]">
            <div className="w-72 aspect-[4/5] overflow-hidden">
              <PaintingPlaceholder seed={9} palette={['#E2C5B0','#B86A4D','#5C6E58','#2A1F14']}/>
            </div>
          </div>
        </div>
        <div className="reveal">
          <p className="font-hand text-2xl text-gold">the artist</p>
          <h2 className="font-serif text-4xl mt-1">Meet the hands behind every stroke</h2>
          <p className="mt-5 text-cream/85 leading-relaxed">
            I paint from my home in India, drawing on the color, light, and quiet rituals I grew up around.
            Every piece starts with something real — a morning, a memory, a face I love — and ends up on
            canvas, made entirely by hand, then carefully packed and shipped to your door.
          </p>
          <p className="mt-4 text-cream/85 leading-relaxed">
            I believe in slow art. Every piece is one of a kind, signed on the back, and shipped with a small
            note about how it was made.
          </p>
          <div className="mt-7 grid grid-cols-3 gap-4 text-center">
            <Stat n="120+" l="paintings sold"/>
            <Stat n="14" l="countries shipped"/>
            <Stat n="100%" l="hand-painted"/>
          </div>
        </div>
      </div>
    </section>
  );
}
