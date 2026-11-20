import sharp from "sharp";
import fs from "fs";

const src = "recycle/original-images/tiny-totz-kids-clinic-logo.png";

const markBuf = await sharp(src)
  .extract({ left: 35, top: 55, width: 250, height: 290 })
  .resize(512, 512, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

async function square(size, file) {
  const inner = Math.round(size * 0.82);
  const icon = await sharp(markBuf)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  const left = Math.floor((size - inner) / 2);
  const top = Math.floor((size - inner) / 2);
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 37, g: 38, b: 74, alpha: 1 },
    },
  })
    .composite([{ input: icon, left, top }])
    .png()
    .toFile(file);
  console.log(file, fs.statSync(file).size);
}

await square(32, "app/icon.png");
await square(180, "app/apple-icon.png");
await square(192, "public/images/favicon-192.png");
await square(512, "public/images/favicon-512.png");

function createIco(entries) {
  const count = entries.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entryBufs = [];
  let offset = 6 + count * 16;
  for (const { size, data } of entries) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entryBufs.push(entry);
    offset += data.length;
  }

  return Buffer.concat([
    header,
    ...entryBufs,
    ...entries.map((e) => e.data),
  ]);
}

const icoEntries = [];
for (const s of [16, 32, 48]) {
  const tmp = `app/_fav-${s}.png`;
  await square(s, tmp);
  icoEntries.push({ size: s, data: fs.readFileSync(tmp) });
  fs.unlinkSync(tmp);
}

fs.writeFileSync("app/favicon.ico", createIco(icoEntries));
console.log("favicon.ico", fs.statSync("app/favicon.ico").size);
