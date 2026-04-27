function Lightbox({ art, onClose, onAdd }) {
  if(!art) return null;
  return (
    <div className="fixed inset-0 z-50 bg-ink/70 backdrop-blur flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-cream max-w-3xl w-full grid md:grid-cols-2 shadow-frame" onClick={e=>e.stopPropagation()}>
        <div className="bg-parchment p-3">
          <div className="aspect-[4/5] overflow-hidden">
            <PaintingPlaceholder seed={art.id} />
          </div>
        </div>
        <div className="p-7 flex flex-col">
          <p className="font-hand text-xl text-sienna">{art.category}</p>
          <h3 className="font-serif text-3xl text-walnut">{art.title}</h3>
          <p className="text-walnut/70 mt-1">{art.medium} · {art.size}</p>
          <p className="font-serif text-3xl text-terracotta mt-4">${art.price}</p>
          <p className="text-walnut/75 mt-4 text-sm leading-relaxed">
            An original, one-of-a-kind painting. Signed on the back, shipped flat or rolled depending on size,
            and arrives ready to frame. Each piece is photographed in natural light and may have subtle texture
            and brushwork that the photo can only hint at.
          </p>
          <div className="mt-auto pt-6 flex gap-2">
            <button onClick={()=>{ onAdd(art); onClose(); }}
              className="flex-1 px-5 py-3 rounded-full bg-walnut text-cream hover:bg-ink">Add to cart — ${art.price}</button>
            <button onClick={onClose} className="px-5 py-3 rounded-full border border-walnut/25 text-walnut hover:bg-walnut/5">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
