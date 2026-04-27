function Testimonials() {
  const items = [
    { q: "The portrait of my mother brought me to tears. It's exactly her.", a: "— Anita R., London" },
    { q: "Packaging was beautiful, the painting even more so. Will order again.", a: "— Marcus T., New York" },
    { q: "She captured my grandmother's home in Kerala perfectly from photos.", a: "— Deepa K., Toronto" },
  ];
  return (
    <section className="py-16 px-5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {items.map((t,i)=>(
          <div key={i} className="bg-parchment p-6 shadow-frame border border-walnut/10 reveal">
            <div className="text-4xl text-terracotta font-serif leading-none">"</div>
            <p className="font-serif text-lg text-walnut leading-snug mt-1">{t.q}</p>
            <p className="text-sm text-walnut/60 mt-4 font-hand text-base">{t.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
