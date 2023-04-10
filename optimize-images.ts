import sharp from "sharp";
import glob from "glob";
import fs from "fs";
import path from "path";

const processImage = async (
  inputPath: string,
  outputPath: string
): Promise<void> => {
  try {
    await sharp(inputPath).avif({ quality: 88 }).toFile(outputPath);
    console.log(`Optimized image: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Failed to optimize image: ${inputPath}`, error);
  }
};

const copyFile = async (src: string, dest: string): Promise<void> => {
  try {
    fs.copyFileSync(src, dest);
    console.log(`Copied image: ${src} -> ${dest}`);
  } catch (err) {
    console.error(`Failed to copy image: ${src}`, err);
  }
};

(async () => {
  const pngFiles = glob.sync("public/**/*.png");
  const outputDirectory = "dist/";

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  await Promise.all(
    pngFiles.map((file) => {
      const relativePath = file.replace(/^public\//, "");
      const outputPath = path.join(outputDirectory, relativePath);
      const outputDirectoryPath = path.dirname(outputPath);

      if (!fs.existsSync(outputDirectoryPath)) {
        fs.mkdirSync(outputDirectoryPath, { recursive: true });
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
