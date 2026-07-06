import fs from 'fs';
import { execSync } from 'child_process';
import https from 'https';

const CLIENT_ID = '178c6fc778ccc68e1d6a'; // GitHub CLI client ID

function request(url, options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function startDeviceFlow() {
  console.log('Requesting device code from GitHub...');
  
  const data = await request('https://github.com/login/device/code', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }, JSON.stringify({
    client_id: CLIENT_ID,
    scope: 'repo'
  }));
  
  if (!data.device_code) {
    console.error('Failed to get device code:', data);
    return;
  }
  
  console.log('\n======================================================');
  console.log(`Action Required: Please authenticate with GitHub!`);
  console.log(`1. Open this URL in your browser: ${data.verification_uri}`);
  console.log(`2. Enter this code: ${data.user_code}`);
  console.log('======================================================\n');
  
  fs.writeFileSync('github_auth_info.json', JSON.stringify({
    user_code: data.user_code,
    verification_uri: data.verification_uri,
    device_code: data.device_code,
    interval: data.interval
  }));
}

startDeviceFlow().catch(console.error);
