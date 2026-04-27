function SectionHeader({ kicker, title, sub }) {
  return (
    <div className="text-center mb-10 reveal">
      <p className="font-hand text-2xl text-sienna">{kicker}</p>
      <h2 className="font-serif text-4xl md:text-5xl text-walnut mt-1">{title}</h2>
      {sub && <p className="text-walnut/70 mt-3 max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}
