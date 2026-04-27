function App() {
  const [active, setActive] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(()=>{
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    }, { threshold: 0.12 });
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  }, []);

  const addToCart = (a)=>{ setCart(c=>[...c, a]); };
  const removeFromCart = (i)=>{ setCart(c=>c.filter((_,idx)=>idx!==i)); };

  return (
    <div>
      <Nav cartCount={cart.length} onOpenCart={()=>setCartOpen(true)} />
      <Hero />
      <Gallery onOpen={setActive} />
      <Shop onAdd={addToCart} />
      <Commission />
      <Testimonials />
      <About />
      <Footer />
      <Lightbox art={active} onClose={()=>setActive(null)} onAdd={addToCart} />
      <CartDrawer open={cartOpen} items={cart} onClose={()=>setCartOpen(false)} onRemove={removeFromCart} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
