const https = require('https');
https.get("https://pin.it/4SWjnjjWc", (res) => {
    let url = res.headers.location;
    if (url) {
        https.get(url, (res2) => {
            let data = '';
            res2.on('data', chunk => data += chunk);
            res2.on('end', () => {
                const match = data.match(/(https:\/\/v1\.pinimg\.com\/videos\/[^"]+\.mp4)/);
                if (match) {
                    console.log(match[1]);
                } else {
                    console.log("No MP4 found");
                }
            });
        });
    }
});
