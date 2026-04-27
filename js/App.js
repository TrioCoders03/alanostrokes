function App() {
  const [active, setActive] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtworks()
      .then(data => { setArtworks(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [artworks]);

  const addToCart = (a) => { setCart(c => [...c, a]); };
  const removeFromCart = (i) => { setCart(c => c.filter((_, idx) => idx !== i)); };

  return (
    <div>
      <Nav cartCount={cart.length} onOpenCart={() => setCartOpen(true)} />
      <Hero artworks={artworks} />
      {loading ? (
        <div className="py-32 text-center">
          <p className="font-serif text-2xl text-walnut/50">Loading paintings...</p>
        </div>
      ) : (
        <>
          <Gallery artworks={artworks} onOpen={setActive} />
          <Shop artworks={artworks} onAdd={addToCart} />
        </>
      )}
      <Commission />
      <Testimonials />
      <About />
      <Footer />
      <Lightbox art={active} onClose={() => setActive(null)} onAdd={addToCart} />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
