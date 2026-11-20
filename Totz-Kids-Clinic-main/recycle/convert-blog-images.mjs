import sharp from "sharp";
import path from "path";
import fs from "fs";

const assets =
  "C:/Users/kanik/.cursor/projects/c-Users-kanik-Downloads-tinny-tozss/assets";

const jobs = [
  [
    "newborn-care-paediatrician-puppalguda.png",
    "public/images/clinic/newborn-care-paediatrician-puppalguda.webp",
  ],
  [
    "child-vaccination-puppalguda.png",
    "public/images/services/child-vaccination-puppalguda.webp",
  ],
  [
    "paediatric-consultation-room-puppalguda.png",
    "public/images/clinic/paediatric-consultation-room-puppalguda.webp",
  ],
  [
    "tiny-totz-kids-clinic-puppalguda.png",
    "public/images/clinic/tiny-totz-kids-clinic-puppalguda.webp",
  ],
];

for (const [src, dest] of jobs) {
  const input = path.join(assets, src);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
  console.log("wrote", dest, fs.statSync(dest).size);
}
