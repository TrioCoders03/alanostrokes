function PaintingPlaceholder({ seed = 1, palette, image }) {
  if (image) return <img src={image} alt="" className="w-full h-full object-cover block" />;

  const rng = (n) => {
    let x = Math.sin(seed * 9999 + n) * 10000;
    return x - Math.floor(x);
  };
  const cols = palette || [
    ['#E8B79A','#C97D5D','#8A9A7B','#3E2C1C'],
    ['#D9C7A0','#A85A3C','#6E7F5C','#2A1F14'],
    ['#F2D7A2','#C9A86A','#8A9A7B','#3E2C1C'],
    ['#E2C5B0','#B86A4D','#5C6E58','#2A1F14'],
    ['#EFD9B8','#D08760','#9CAE8A','#3E2C1C'],
  ][seed % 5];

  const shapes = Array.from({length: 6}).map((_,i)=>({
    cx: 30 + rng(i)*240, cy: 30 + rng(i+1)*180,
    r: 30 + rng(i+2)*70,
    fill: cols[Math.floor(rng(i+3)*cols.length)],
    o: 0.45 + rng(i+4)*0.45,
  }));

  return (
    <svg viewBox="0 0 300 240" className="w-full h-full block">
      <defs>
        <filter id={`grain-${seed}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0.08 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <linearGradient id={`bg-${seed}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={cols[0]} />
          <stop offset="100%" stopColor={cols[1]} />
        </linearGradient>
      </defs>
      <rect width="300" height="240" fill={`url(#bg-${seed})`} />
      {shapes.map((s,i)=>(
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill} opacity={s.o} />
      ))}
      <path d={`M 10 ${40+rng(20)*160} C 80 ${rng(21)*240}, 200 ${rng(22)*240}, 290 ${40+rng(23)*160}`}
            stroke={cols[3]} strokeWidth="6" fill="none" opacity="0.55" strokeLinecap="round"/>
      <path d={`M 20 ${60+rng(24)*140} C 90 ${rng(25)*220}, 210 ${rng(26)*220}, 280 ${60+rng(27)*140}`}
            stroke={cols[2]} strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round"/>
      <rect width="300" height="240" filter={`url(#grain-${seed})`} />
    </svg>
  );
}
