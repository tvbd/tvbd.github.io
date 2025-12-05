#!/usr/bin/env node
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function ensureDir(p) {
  await fsp.mkdir(p, { recursive: true });
}

function parseM3U(content) {
  const items = [];
  let pending = null;
  content = content.replace(/^\uFEFF/, '');
  const lines = content.split(/\r?\n/);

  const commitPending = (url) => {
    if (pending) {
      pending.url = url;
      items.push(pending);
      pending = null;
    } else {
      items.push({ name: null, url, duration: null, attributes: {} });
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = (lines[i] || '').trim();
    if (!raw) continue;

    if (raw.startsWith('#EXTINF')) {
      const m = raw.match(/^#EXTINF:([^,]*)(?:,(.*))?$/i);
      const meta = m ? (m[1] || '').trim() : '';
      const title = m ? (m[2] || '').trim() : null;

      let duration = null;
      let attributes = {};
      if (meta) {
        const [durToken, ...rest] = meta.split(/\s+/);
        const d = parseFloat(durToken);
        if (!Number.isNaN(d)) duration = d;
        const attrStr = rest.join(' ');
        if (attrStr) {
          const re = /([\w-]+)="([^"]*)"/g;
          let a;
          while ((a = re.exec(attrStr)) !== null) attributes[a[1]] = a[2];
        }
      }
      pending = { name: title || null, url: null, duration, attributes };
      continue;
    }

    if (raw.startsWith('#')) continue; // ignore other comments/tags
    commitPending(raw);
  }

  return { items };
}

async function main() {
  const SRC = path.join(process.cwd(), 'playlists');
  const OUT_ROOT = path.join(process.cwd(), 'site');
  const OUT_API = path.join(OUT_ROOT, 'api');
  const OUT_PL = path.join(OUT_API, 'playlists');

  await fsp.rm(OUT_ROOT, { recursive: true, force: true });
  await ensureDir(OUT_PL);

  const entries = await fsp.readdir(SRC).catch(() => []);
  const files = entries.filter(f => /\.(m3u8?|M3U8?)$/.test(f));
  const list = [];
  const now = new Date().toISOString();

  for (const file of files) {
    const base = path.basename(file, path.extname(file));
    const slug = slugify(base);
    const text = await fsp.readFile(path.join(SRC, file), 'utf8');
    const { items } = parseM3U(text);

    // Keep only name and url in items
    const itemsSimple = items.map(({ name, url }) => ({ name: name ?? null, url }));

    // No "slug" in sub JSON file
    const data = {
      name: base,
      sourceFile: `playlists/${file}`,
      count: itemsSimple.length,
      generatedAt: now,
      items: itemsSimple
    };

    await fsp.writeFile(
      path.join(OUT_PL, `${slug}.json`),
      JSON.stringify(data, null, 2),
      'utf8'
    );

    // No "slug" in main index entries
    list.push({
      name: base,
      url: `api/playlists/${slug}.json`,
      count: itemsSimple.length
    });
  }

  await ensureDir(OUT_API);
  await fsp.writeFile(
    path.join(OUT_API, 'index.json'),
    JSON.stringify(
      {
        generatedAt: now,
        totalPlaylists: list.length,
        playlists: list
      },
      null,
      2
    ),
    'utf8'
  );

  const html = `<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8">
<title>Radio API</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<body><pre>See api/index.json</pre></body>
</html>`;
  await fsp.writeFile(path.join(OUT_ROOT, 'index.html'), html, 'utf8');

  console.log(`Built ${list.length} playlist(s).`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});