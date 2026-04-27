function Field({ label, children, className='' }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-wider text-walnut/60 mb-1">{label}</span>
      {children}
    </label>
  );
}

function Commission() {
  const [form, setForm] = useState({ name:'', email:'', size:'Medium (16×20 in)', medium:'Acrylic on canvas', budget:'$200 – $400', desc:'' });
  const [sent, setSent] = useState(false);
  const update = (k,v)=>setForm(f=>({...f,[k]:v}));
  const submit = (e)=>{ e.preventDefault(); setSent(true); };

  return (
    <section id="commission" className="py-20 px-5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 reveal">
          <p className="font-hand text-2xl text-sienna">just for you</p>
          <h2 className="font-serif text-4xl text-walnut mt-1">Commission a custom piece</h2>
          <p className="mt-4 text-walnut/75">
            A portrait of a loved one. The street you grew up on. A wedding gift.
            Tell us what you have in mind — the artist will respond within 2 days with a sketch idea and a quote.
          </p>
          <ul className="mt-6 space-y-3 text-walnut/80 text-sm">
            <li className="flex gap-3"><span className="text-terracotta">●</span> Free concept consultation</li>
            <li className="flex gap-3"><span className="text-terracotta">●</span> 2 rounds of revisions included</li>
            <li className="flex gap-3"><span className="text-terracotta">●</span> 3–5 weeks from approval to ship</li>
          </ul>
        </div>

        <form onSubmit={submit} className="md:col-span-3 bg-parchment p-6 md:p-8 shadow-frame border border-walnut/10 reveal">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl">🎨</div>
              <h3 className="font-serif text-3xl text-walnut mt-3">Thank you, {form.name || 'friend'}.</h3>
              <p className="text-walnut/70 mt-2">Your request is on its way to the studio. You'll hear back within 2 days.</p>
              <button onClick={()=>{setSent(false); setForm({ name:'', email:'', size:'Medium (16×20 in)', medium:'Acrylic on canvas', budget:'$200 – $400', desc:'' });}}
                className="mt-6 px-5 py-2 rounded-full border border-walnut/25 text-walnut hover:bg-walnut/5">Send another</button>
            </div>
          ) : (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name">
                <input required value={form.name} onChange={e=>update('name',e.target.value)} className="input" placeholder="Priya"/>
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={e=>update('email',e.target.value)} className="input" placeholder="you@email.com"/>
              </Field>
              <Field label="Size">
                <select value={form.size} onChange={e=>update('size',e.target.value)} className="input">
                  <option>Small (8×10 in)</option>
                  <option>Medium (16×20 in)</option>
                  <option>Large (24×30 in)</option>
                  <option>Extra Large (30×40 in+)</option>
                </select>
              </Field>
              <Field label="Medium">
                <select value={form.medium} onChange={e=>update('medium',e.target.value)} className="input">
                  <option>Acrylic on canvas</option>
                  <option>Oil on canvas</option>
                  <option>Watercolor</option>
                  <option>Mixed media</option>
                </select>
              </Field>
              <Field label="Budget" className="sm:col-span-2">
                <select value={form.budget} onChange={e=>update('budget',e.target.value)} className="input">
                  <option>Under $200</option>
                  <option>$200 – $400</option>
                  <option>$400 – $700</option>
                  <option>$700+</option>
                </select>
              </Field>
              <Field label="Tell us about it" className="sm:col-span-2">
                <textarea required rows="4" value={form.desc} onChange={e=>update('desc',e.target.value)}
                  className="input" placeholder="A portrait of my grandmother, sitting in her garden in Pune. I'll send reference photos."/>
              </Field>
              <Field label="Reference images (optional)" className="sm:col-span-2">
                <input type="file" multiple className="text-sm text-walnut/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-walnut file:text-cream hover:file:bg-ink"/>
              </Field>
            </div>
            <button type="submit" className="mt-6 w-full sm:w-auto px-7 py-3 rounded-full bg-terracotta text-cream hover:bg-sienna transition shadow-frame">
              Send request
            </button>
            <p className="text-xs text-walnut/55 mt-3">No obligation. We'll only use your details to respond to your inquiry.</p>
          </>
          )}
        </form>
      </div>
    </section>
  );
}
