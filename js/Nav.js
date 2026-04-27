function Nav({ cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['Gallery','#gallery'],
    ['Shop','#shop'],
    ['Commission','#commission'],
    ['About','#about'],
    ['Contact','#contact'],
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-cream/80 border-b border-walnut/10">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-7">
          {links.map(([l,h])=>(
            <a key={l} href={h} className="text-sm text-walnut/80 hover:text-terracotta transition">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onOpenCart}
            className="relative px-3 py-2 rounded-full border border-walnut/20 text-walnut hover:bg-walnut hover:text-cream transition">
            <span className="text-sm">Cart</span>
            {cartCount>0 && (
              <span className="absolute -top-2 -right-2 bg-terracotta text-cream text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
            )}
          </button>
          <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded text-walnut">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-walnut/10 px-5 py-3 space-y-2 bg-cream">
          {links.map(([l,h])=>(
            <a key={l} href={h} onClick={()=>setOpen(false)} className="block text-walnut/80">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}
