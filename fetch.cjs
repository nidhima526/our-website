const https = require('https'); 
const url = 'https://pin.it/4xWPOlDU7'; 

const fetchUrl = (url, originalUrl) => { 
  https.get(url, (res) => { 
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) { 
      let nextUrl = res.headers.location;
      if (!nextUrl.startsWith('http')) {
        nextUrl = 'https://api.pinterest.com' + nextUrl;
      }
      fetchUrl(nextUrl, originalUrl); 
    } else { 
      let data = ''; 
      res.on('data', chunk => data += chunk); 
      res.on('end', () => { 
        const mp4Match = data.match(/https:\/\/v1\.pinimg\.com\/videos\/[^\"]+\.mp4/); 
        const jpgMatch = data.match(/https:\/\/i\.pinimg\.com\/(?:originals|736x)\/[^\"]+\.jpg/); 
        console.log(originalUrl + ' -> ' + (mp4Match ? mp4Match[0] : (jpgMatch ? jpgMatch[0] : 'NONE'))); 
      }); 
    } 
  }); 
}; 

fetchUrl(url, url);
