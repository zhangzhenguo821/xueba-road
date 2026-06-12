#!/usr/bin/env python3
"""Download K12 datasets from GitHub with retry logic."""
import urllib.request
import time
import os

DATASETS = {
    "tangshisanbaishou": "https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/%E8%92%99%E5%AD%A6/tangshisanbaishou.json",
    "idiom": "https://raw.githubusercontent.com/pwxcoo/chinese-xinhua/master/data/idiom.json",
    "xiehouyu": "https://raw.githubusercontent.com/pwxcoo/chinese-xinhua/master/data/xiehouyu.json",
    "word": "https://raw.githubusercontent.com/pwxcoo/chinese-xinhua/master/data/word.json",
}

OUTDIR = "/tmp/k12-datasets"
os.makedirs(OUTDIR, exist_ok=True)

for name, url in DATASETS.items():
    outpath = os.path.join(OUTDIR, f"{name}.json")
    if os.path.exists(outpath):
        size = os.path.getsize(outpath)
        print(f"⏭️  {name}: already exists ({size:,} bytes)")
        continue
    
    print(f"⬇️  Downloading {name}...")
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = resp.read()
            with open(outpath, "wb") as f:
                f.write(data)
            import json
            d = json.loads(data)
            if isinstance(d, list):
                count = len(d)
            elif isinstance(d, dict):
                count = sum(len(t.get("content",[])) for t in d.get("content",[])) if "content" in d else len(d)
            print(f"  ✅ {name}: {len(data):,} bytes, {count} items")
            break
        except Exception as e:
            print(f"  ⚠️  Attempt {attempt+1} failed: {e}")
            if attempt < 2:
                time.sleep(3)
    else:
        print(f"  ❌ {name}: FAILED after 3 attempts")

print("\nDone!")
