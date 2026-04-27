function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream/80 py-14 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <Logo className="text-cream" />
          <p className="mt-4 text-sm text-cream/65 max-w-xs">Original handcrafted paintings from a small studio in India, shipped worldwide.</p>
        </div>
        <div>
          <h4 className="font-serif text-xl text-cream">Get in touch</h4>
          <p className="text-sm mt-3">hello@alanostrokes.com</p>
          <p className="text-sm">For commissions, use the form above.</p>
        </div>
        <div>
          <h4 className="font-serif text-xl text-cream">Stay in the studio</h4>
          <p className="text-sm mt-3 text-cream/65">A short letter every month — new pieces and behind-the-scenes from the easel.</p>
          <form onSubmit={e=>e.preventDefault()} className="mt-3 flex">
            <input type="email" placeholder="your email" className="flex-1 bg-cream/10 border border-cream/15 px-3 py-2 text-sm rounded-l outline-none focus:border-gold"/>
            <button className="bg-terracotta text-cream px-4 rounded-r text-sm hover:bg-sienna">Join</button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-cream/10 text-xs text-cream/50 flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Alano Strokes. All paintings copyright the artist.</span>
        <span>Made with care · Painted in India · Shipped worldwide</span>
      </div>
    </footer>
  );
}
