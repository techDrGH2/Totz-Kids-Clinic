import sharp from "sharp";
import fs from "fs";
import path from "path";

const root = process.cwd();
const recycle = path.join(root, "recycle", "original-images");
fs.mkdirSync(recycle, { recursive: true });

async function toWebp(inputRel, outputRel, { width, quality = 72 }) {
  const input = path.join(root, inputRel);
  const output = path.join(root, outputRel);
  if (!fs.existsSync(input)) {
    console.log("skip missing", inputRel);
    return;
  }

  const recycleName = inputRel.replace(/[\\/]/g, "__");
  const recyclePath = path.join(recycle, recycleName);
  if (!fs.existsSync(recyclePath)) {
    fs.copyFileSync(input, recyclePath);
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(output);

  const before = fs.statSync(input).size;
  const after = fs.statSync(output).size;
  console.log(
    `${inputRel} -> ${outputRel} | ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`,
  );

  // Remove original only when converting to a different path/extension
  if (path.resolve(input) !== path.resolve(output)) {
    fs.unlinkSync(input);
  }
}

const jobs = [
  // Service cards (shown in grids) — keep lean
  ["public/images/services/developmental-concerns.png", "public/images/services/developmental-concerns.webp", 1100, 70],
  ["public/images/services/allergies-asthma.png", "public/images/services/allergies-asthma.webp", 1100, 70],
  ["public/images/services/nutrition-assessment.png", "public/images/services/nutrition-assessment.webp", 1100, 70],
  ["public/images/services/obesity-puberty.png", "public/images/services/obesity-puberty.webp", 1100, 70],
  ["public/images/services/common-illness-management.png", "public/images/services/common-illness-management.webp", 1100, 70],
  ["public/images/services/child-vaccination.png", "public/images/services/child-vaccination.webp", 1100, 70],
  ["public/images/services/newborn-care.jpg", "public/images/services/newborn-care.webp", 1100, 72],
  ["public/images/services/well-child-visits.jpg", "public/images/services/well-child-visits.webp", 1100, 72],
  ["public/images/services/seizures-development.jpg", "public/images/services/seizures-development.webp", 1100, 72],

  // Hero / doctor
  ["public/images/doctor/hero-paediatric-care.jpg", "public/images/doctor/hero-paediatric-care.webp", 1400, 74],
  ["public/images/doctor/drshilpareddy.webp", "public/images/doctor/drshilpareddy.webp", 900, 72],
  ["public/images/doctor/hero-consultation.png", "public/images/doctor/hero-consultation.webp", 1200, 72],
  ["public/images/doctor/dr-shilpa-reddy-hero.png", "public/images/doctor/dr-shilpa-reddy-hero.webp", 900, 72],
  ["public/images/doctor/dr-shilpa-reddy-diamond.png", "public/images/doctor/dr-shilpa-reddy-diamond.webp", 800, 72],

  // Logo — small on screen, huge file today
  ["public/images/tiny-totz-kids-clinic-logo.png", "public/images/tiny-totz-kids-clinic-logo.webp", 420, 80],
];

for (const [input, output, width, quality] of jobs) {
  await toWebp(input, output, { width, quality });
}
