const https = require('https');

const urls = [
  "https://pin.it/5GCRYdzUj",
  "https://pin.it/7ln3vm7yh",
  "https://pin.it/3x4cCamDX",
  "https://pin.it/7CaWaTGKI"
];

function fetchPin(pinUrl) {
  return new Promise((resolve) => {
    https.get(pinUrl, (res) => {
      let url = res.headers.location;
      if (url) {
        https.get(url, (res2) => {
          let data = '';
          res2.on('data', chunk => data += chunk);
          res2.on('end', () => {
            // Find the highest quality mp4. We'll grab all and take the one that contains 720p or similar, or just the first match for simplicity, usually there's one main video.
            // Let's just find all mp4s and pick the one with 720p, or fallback to the first one.
            const matches = [...data.matchAll(/(https:\/\/v1\.pinimg\.com\/videos\/[^"]+\.mp4)/g)];
            if (matches.length > 0) {
              const uniqueUrls = [...new Set(matches.map(m => m[1]))];
              const bestUrl = uniqueUrls.find(u => u.includes('720p') || u.includes('1080p') || u.includes('expMp4')) || uniqueUrls[0];
              resolve(bestUrl);
            } else {
              resolve("No MP4 found for " + pinUrl);
            }
          });
        });
      } else {
        resolve("No redirect found for " + pinUrl);
      }
    });
  });
}

async function run() {
  for (const url of urls) {
    const mp4 = await fetchPin(url);
    console.log(mp4);
  }
}

run();
