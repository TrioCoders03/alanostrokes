function CartDrawer({ open, items, onClose, onRemove }) {
  const total = items.reduce((s,i)=>s+i.price,0);
  return (
    <div className={`fixed inset-0 z-50 ${open?'':'pointer-events-none'}`}>
      <div onClick={onClose} className={`absolute inset-0 bg-ink/50 transition ${open?'opacity-100':'opacity-0'}`}/>
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-cream shadow-frame transition-transform duration-300 ${open?'translate-x-0':'translate-x-full'}`}>
        <div className="p-5 border-b border-walnut/10 flex items-center justify-between">
          <h3 className="font-serif text-2xl text-walnut">Your cart</h3>
          <button onClick={onClose} className="text-walnut/60 hover:text-walnut">✕</button>
        </div>
        <div className="p-5 overflow-y-auto h-[calc(100%-180px)]">
          {items.length===0 ? (
            <p className="text-walnut/60 text-sm">Your cart is empty. Browse the <a href="#shop" onClick={onClose} className="text-terracotta underline">shop</a> to add a piece.</p>
          ) : items.map((it,idx)=>(
            <div key={idx} className="flex gap-3 py-3 border-b border-walnut/10">
              <div className="w-16 h-20 overflow-hidden bg-parchment p-1">
                <PaintingPlaceholder seed={it.id}/>
              </div>
              <div className="flex-1">
                <div className="flex justify-between gap-2">
                  <p className="font-serif text-lg text-walnut leading-tight">{it.title}</p>
                  <p className="text-terracotta">${it.price}</p>
                </div>
                <p className="text-xs text-walnut/55">{it.size}</p>
                <button onClick={()=>onRemove(idx)} className="text-xs text-walnut/55 hover:text-terracotta mt-2">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-walnut/10 bg-cream">
          <div className="flex justify-between mb-3">
            <span className="text-walnut/70">Subtotal</span>
            <span className="font-serif text-xl text-walnut">${total}</span>
          </div>
          <button disabled={items.length===0} className="w-full py-3 rounded-full bg-terracotta text-cream hover:bg-sienna disabled:opacity-40 disabled:cursor-not-allowed">
            Checkout
          </button>
          <p className="text-[11px] text-walnut/50 mt-2 text-center">Payment integration coming soon.</p>
        </div>
      </aside>
    </div>
  );
}
