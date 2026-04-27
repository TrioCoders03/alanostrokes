const CATEGORIES = ['All', 'Portraits', 'Landscapes', 'Abstract', 'Spiritual', 'Florals'];

async function fetchArtworks() {
  const res = await fetch('/.netlify/functions/paintings');
  return res.json();
}
