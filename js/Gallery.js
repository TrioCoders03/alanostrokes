function Gallery({ onOpen }) {
  const [cat, setCat] = useState('All');
  const items = useMemo(
    () => cat==='All' ? ARTWORKS : ARTWORKS.filter(a=>a.category===cat),
    [cat]
  );
  return (
    <section id="gallery" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="the gallery"
          title="A small, evolving collection"
          sub="Click any piece to see details. New work is added every few weeks."
        />
        <div className="flex flex-wrap gap-2 justify-center mb-10 reveal">
          {CATEGORIES.map(c=>(
            <button key={c} onClick={()=>setCat(c)}
              className={`px-4 py-1.5 rounded-full text-sm border transition
                ${cat===c
                  ? 'bg-walnut text-cream border-walnut'
                  : 'bg-cream text-walnut/80 border-walnut/20 hover:border-terracotta hover:text-terracotta'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map(a=>(
            <button key={a.id} onClick={()=>onOpen(a)}
              className="art-card text-left group">
              <div className="art-frame bg-parchment p-2.5 shadow-frame">
                <div className="aspect-[4/5] overflow-hidden border border-walnut/10">
                  <PaintingPlaceholder seed={a.id} />
                </div>
              </div>
              <div className="mt-3 px-1">
                <h3 className="font-serif text-xl text-walnut leading-tight">{a.title}</h3>
                <p className="text-xs text-walnut/60 mt-0.5">{a.category} · {a.size}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
