function Logo({ className='' }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 40 40" className="-rotate-6">
        <path d="M5 28 C 12 8, 28 8, 35 30" stroke="#C97D5D" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M9 32 C 16 22, 26 22, 33 33" stroke="#3E2C1C" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
      <span className="leading-tight">
        <span className="block font-serif text-xl text-walnut tracking-wide">Alano Strokes</span>
        <span className="block font-hand text-xs text-sienna -mt-1">handmade · with love from India</span>
      </span>
    </a>
  );
}
