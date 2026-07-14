import urllib.request
import re

url = "https://pin.it/lgea4XSnM"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    response = urllib.request.urlopen(req)
    html = response.read().decode('utf-8', errors='ignore')
    urls = re.findall(r'https://[^\s\"\']+\.(?:mp4|m3u8)', html)
    for u in set(urls):
        print(u)
except Exception as e:
    print(e)
