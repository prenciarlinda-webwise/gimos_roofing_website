const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = imagesDir;

// Images to optimize (the largest ones from PageSpeed report)
const imagesToOptimize = [
  { src: '1) Home page roofing services.jpg', maxWidth: 800 },
  { src: '2) Home page siding services.JPG', maxWidth: 800 },
  { src: 'new-roof-installation-blue-house-florida.jpg', maxWidth: 800 },
  { src: 'siding-project-closeup.jpg', maxWidth: 800 },
  { src: 'roofing-crew-installation-action.jpg', maxWidth: 1000 },
  { src: 'roofing-jacksonville-hero.webp', maxWidth: 1400, isWebp: true },
  { src: 'roof-repair-in-progress-jacksonville.jpg', maxWidth: 800 },
  { src: '4) Commercial roofing services.jpg', maxWidth: 800 },
  { src: '5) Residential roofing Services page.jpg', maxWidth: 800 },
  { src: 'architectural-shingle-roof-aerial-view.jpg', maxWidth: 1400 },
  { src: 'siding-installation-jacksonville-home.jpg', maxWidth: 800 },
  { src: 'yellow-siding-home-renovation.jpg', maxWidth: 800 },
];

async function optimizeImage(filename, maxWidth, isWebp = false) {
  const inputPath = path.join(imagesDir, filename);
  const baseName = path.parse(filename).name;
  const outputPath = path.join(outputDir, `${baseName}.webp`);

  if (!fs.existsSync(inputPath)) {
    console.log(`Skipping ${filename} - file not found`);
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Processing ${filename} (${metadata.width}x${metadata.height})...`);

    await image
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 80 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`  ✓ Saved as ${baseName}.webp (${(newSize/1024).toFixed(0)}KB, ${savings}% smaller)`);
  } catch (err) {
    console.error(`  ✗ Error processing ${filename}:`, err.message);
  }
}

async function optimizeLogos() {
  const logos = [
    { src: '../public/gimos-roofing-logo.png', maxWidth: 200 },
    { src: '../public/gimos-roofing-logo-alt.png', maxWidth: 200 },
  ];

  for (const logo of logos) {
    const inputPath = path.join(__dirname, logo.src);
    const baseName = path.parse(logo.src).name;
    const outputPath = path.join(__dirname, '../public', `${baseName}.webp`);

    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${logo.src} - file not found`);
      continue;
    }

    try {
      await sharp(inputPath)
        .resize(logo.maxWidth, null, { withoutEnlargement: true, fit: 'inside' })
        .webp({ quality: 85 })
        .toFile(outputPath);

      const originalSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      console.log(`  ✓ Logo ${baseName}.webp (${(newSize/1024).toFixed(0)}KB from ${(originalSize/1024).toFixed(0)}KB)`);
    } catch (err) {
      console.error(`  ✗ Error processing logo:`, err.message);
    }
  }
}

async function main() {
  console.log('Optimizing images...\n');

  // Optimize all listed images
  for (const img of imagesToOptimize) {
    await optimizeImage(img.src, img.maxWidth, img.isWebp);
  }

  // Also optimize all other jpg/png in the folder
  console.log('\nOptimizing remaining images...');
  const allFiles = fs.readdirSync(imagesDir);
  for (const file of allFiles) {
    if ((file.endsWith('.jpg') || file.endsWith('.JPG') || file.endsWith('.png'))
        && !imagesToOptimize.some(img => img.src === file)) {
      await optimizeImage(file, 1200);
    }
  }

  console.log('\nOptimizing logos...');
  await optimizeLogos();

  console.log('\nDone! Now update your code to use .webp versions.');
}

main().catch(console.error);
