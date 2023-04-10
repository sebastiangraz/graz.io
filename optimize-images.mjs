// optimize-images.js
import sharp from "sharp";
import { sync } from "glob";
import { copyFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";

const processImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath).avif({ quality: 88 }).toFile(outputPath);
    console.log(`Optimized image: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Failed to optimize image: ${inputPath}`, error);
  }
};

const copyFile = async (src, dest) => {
  try {
    copyFileSync(src, dest);
    console.log(`Copied image: ${src} -> ${dest}`);
  } catch (err) {
    console.error(`Failed to copy image: ${src}`, err);
  }
};

(async () => {
  const pngFiles = sync("public/**/*.png");
  const outputDirectory = "dist/";

  if (!existsSync(outputDirectory)) {
    mkdirSync(outputDirectory, { recursive: true });
  }

  await Promise.all(
    pngFiles.map((file) => {
      const relativePath = file.replace(/^public\//, "");
      const outputPath = join(outputDirectory, relativePath);
      const outputDirectoryPath = dirname(outputPath);

      if (!existsSync(outputDirectoryPath)) {
        mkdirSync(outputDirectoryPath, { recursive: true });
      }

      const avifPath = outputPath.replace(/\.png$/, ".avif");
      return Promise.all([
        processImage(file, avifPath),
        copyFile(file, outputPath),
      ]);
    })
  );

  console.log("Images optimized");
})();
