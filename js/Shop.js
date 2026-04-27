function ShopCard({ art, onAdd }) {
  const [poof, setPoof] = useState(false);
  return (
    <div className="bg-cream p-3 shadow-frame border border-walnut/5 flex flex-col">
      <div className="aspect-[4/5] overflow-hidden border border-walnut/10">
        <PaintingPlaceholder seed={art.id} image={art.image} />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-2xl text-walnut">{art.title}</h3>
          <span className="font-serif text-xl text-terracotta whitespace-nowrap">${art.price}</span>
        </div>
        <p className="text-sm text-walnut/65 mt-1">{art.medium} · {art.size}</p>
        <div className="mt-auto pt-4 flex gap-2">
          <button
            onClick={()=>{ onAdd(art); setPoof(true); setTimeout(()=>setPoof(false),350); }}
            className={`flex-1 px-4 py-2 rounded-full bg-walnut text-cream hover:bg-ink transition ${poof?'pop':''}`}>
            Add to cart
          </button>
          <button className="px-4 py-2 rounded-full border border-walnut/25 text-walnut hover:bg-walnut/5 transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

function Shop({ artworks, onAdd }) {
  const featured = artworks.filter(a => a.available).slice(0, 6);
  return (
    <section id="shop" className="py-20 px-5 bg-parchment/60 border-y border-walnut/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="ready to ship"
          title="Take a piece home"
          sub="These originals are finished, signed, and ready to travel. Free shipping over $250."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map(a=>(
            <ShopCard key={a.id} art={a} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}
