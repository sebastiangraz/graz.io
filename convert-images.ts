import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicPath = path.join(__dirname, "public");
const redo = process.argv.includes("--redo");

async function convertImage(filePath: string): Promise<void> {
  try {
    const outputPath = filePath.replace(/\.png$/, ".avif");

    if (redo || !fs.existsSync(outputPath)) {
      await sharp(filePath).avif({ quality: 80, effort: 8 }).toFile(outputPath);
      console.log(`Converted ${filePath} to ${outputPath}`);
    } else {
      console.log(`Skipping ${filePath}, AVIF file already exists.`);
    }
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
  }
}

async function processDirectory(dirPath: string): Promise<void[]> {
  const items = fs.readdirSync(dirPath);
  const convertPromises: Promise<void>[] = [];

  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      await processDirectory(itemPath);
    } else if (stat.isFile() && itemPath.endsWith(".png")) {
      convertPromises.push(convertImage(itemPath));
    }
  }

  return Promise.all(convertPromises);
}

processDirectory(publicPath).catch((error) => {
  console.error("Error processing directory:", error);
  process.exit(1);
});
