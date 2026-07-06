import fs from 'fs';
import { execSync } from 'child_process';
import https from 'https';

const CLIENT_ID = '178c6fc778ccc68e1d6a';

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

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function pollForTokenAndDeploy() {
  if (!fs.existsSync('github_auth_info.json')) {
    console.error('No auth info found. Run github-auth.js first.');
    return;
  }
  
  const authInfo = JSON.parse(fs.readFileSync('github_auth_info.json', 'utf8'));
  console.log('Waiting for you to authorize on GitHub...');
  
  let accessToken = null;
  while (!accessToken) {
    const data = await request('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, JSON.stringify({
      client_id: CLIENT_ID,
      device_code: authInfo.device_code,
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
    }));
    
    if (data.access_token) {
      accessToken = data.access_token;
      console.log('Successfully authenticated!');
      break;
    } else if (data.error === 'authorization_pending') {
      await sleep((authInfo.interval || 5) * 1000);
    } else if (data.error === 'slow_down') {
      await sleep((authInfo.interval || 5) * 1000 + 5000);
    } else {
      console.error('Error during authentication:', data);
      return;
    }
  }
  
  console.log('Creating repository "our-website"...');
  const repoData = await request('https://api.github.com/user/repos', {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${accessToken}`,
      'User-Agent': 'NodeJS-Deploy-Script'
    }
  }, JSON.stringify({
    name: 'our-website',
    description: 'MasterTechGlobal Website created via AI',
    private: false
  }));
  
  if (repoData.clone_url || (repoData.errors && repoData.errors[0].message === 'name already exists on this account')) {
    console.log('Repository ready. Pushing code...');
    
    let repoUrl = repoData.clone_url;
    if (!repoUrl) {
      // Fetch user info to get username
      const user = await request('https://api.github.com/user', {
        headers: {
          'Authorization': `token ${accessToken}`,
          'User-Agent': 'NodeJS-Deploy-Script'
        }
      });
      repoUrl = `https://github.com/${user.login}/our-website.git`;
    }
    
    // Add token to URL for push
    const authUrl = repoUrl.replace('https://', `https://oauth2:${accessToken}@`);
    
    try {
      execSync('git remote remove origin', { stdio: 'ignore' });
    } catch(e) {}
    
    try {
      execSync(`git remote add origin ${authUrl}`);
      console.log('Pushing to GitHub...');
      execSync(`git push -u origin main`, { stdio: 'inherit' });
      console.log('Successfully pushed code to GitHub!');
      
      // Clean up remote URL to remove token
      execSync('git remote remove origin');
      execSync(`git remote add origin ${repoUrl}`);
      
      fs.unlinkSync('github_auth_info.json');
      console.log(`Repository is at: ${repoUrl}`);
    } catch (e) {
      console.error('Failed to push:', e.message);
    }
  } else {
    console.error('Failed to create repository:', repoData);
  }
}

pollForTokenAndDeploy().catch(console.error);
