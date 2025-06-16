const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function optimizeImage(inputPath, maxWidth = 800, quality = 80) {
  try {
    const stats = fs.statSync(inputPath);
    const fileSizeInMB = stats.size / (1024 * 1024);

    console.log(`\nProcessing: ${path.basename(inputPath)}`);
    console.log(`Original size: ${fileSizeInMB.toFixed(2)}MB`);

    // Create temporary output file
    const tempPath = inputPath + ".tmp";

    await sharp(inputPath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: "inside",
      })
      .jpeg({ quality, progressive: true })
      .toFile(tempPath);

    // Replace original with optimized version
    fs.renameSync(tempPath, inputPath);

    const newStats = fs.statSync(inputPath);
    const newFileSizeInMB = newStats.size / (1024 * 1024);
    const reduction = (
      ((fileSizeInMB - newFileSizeInMB) / fileSizeInMB) *
      100
    ).toFixed(1);

    console.log(`Optimized size: ${newFileSizeInMB.toFixed(2)}MB`);
    console.log(`Reduction: ${reduction}%`);

    return { original: fileSizeInMB, optimized: newFileSizeInMB, reduction };
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function main() {
  const profilesDir = "public/images/profiles";
  const backupDir = "public/images/profiles/backup";

  // Create backup directory
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  // Images to optimize (over 1MB)
  const imagesToOptimize = [
    "RohitPic.jpg", // 10.3MB -> target ~500KB
    "AndersonPic.jpg", // 3.8MB -> target ~400KB
  ];

  console.log("🖼️  Image Optimization Starting...\n");

  for (const filename of imagesToOptimize) {
    const inputPath = path.join(profilesDir, filename);
    const backupPath = path.join(backupDir, filename);

    if (fs.existsSync(inputPath)) {
      // Backup original
      fs.copyFileSync(inputPath, backupPath);
      console.log(`✅ Backed up to: ${backupPath}`);

      // Optimize
      await optimizeImage(inputPath, 600, 75);
    } else {
      console.log(`❌ File not found: ${inputPath}`);
    }
  }

  console.log("\n✨ Optimization complete!");
  console.log("\n📋 Next steps:");
  console.log("1. Test: http://localhost:3000/test-images");
  console.log("2. Check mobile loading");
  console.log("3. If issues persist, check console for errors");
}

main().catch(console.error);
