import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicPath = path.join(__dirname, "public");

async function convertImage(filePath: string): Promise<void> {
  try {
    const outputPath = filePath.replace(/\.png$/, ".avif");

    if (fs.existsSync(outputPath)) {
      console.log(`Skipping ${filePath}, AVIF file already exists.`);
      return;
    }

    await sharp(filePath).avif().toFile(outputPath);
    console.log(`Converted ${filePath} to ${outputPath}`);
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
