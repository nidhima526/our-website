const urls = [
  "https://pin.it/5GCRYdzUj",
  "https://pin.it/7ln3vm7yh",
  "https://pin.it/3x4cCamDX",
  "https://pin.it/7CaWaTGKI"
];

async function fetchPin(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
      },
      redirect: 'follow'
    });
    const text = await res.text();
    const match = text.match(/https:\/\/v1\.pinimg\.com\/videos\/[^"]+\.mp4/g);
    if (match) {
        // Find best match (720p or similar)
        const unique = [...new Set(match)];
        const best = unique.find(u => u.includes('720p') || u.includes('1080p') || u.includes('expMp4')) || unique[0];
        return best;
    } else {
        // Check for images if no video
        const imgMatch = text.match(/https:\/\/i\.pinimg\.com\/originals\/[^"]+\.(jpg|png)/g);
        if (imgMatch) {
             return [...new Set(imgMatch)][0];
        }
        return "No media found for " + url;
    }
  } catch(e) {
    return "Error: " + e.message;
  }
}

async function run() {
  for (const url of urls) {
    const media = await fetchPin(url);
    console.log(media);
  }
}

run();
