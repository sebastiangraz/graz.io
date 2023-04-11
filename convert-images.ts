import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = "public";

function walk(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });

  return results;
}

function convertToAvif(filePath: string): void {
  if (path.extname(filePath) !== ".png") return;

  const outputPath = `${path.dirname(filePath)}/${path.basename(
    filePath,
    ".png"
  )}.avif`;

  sharp(filePath)
    .avif({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
      console.log(`AVIF image saved: ${outputPath}`);
    })
    .catch((err) => {
      console.error("Error converting image:", err);
    });
}

const files = walk(publicDir);

files.forEach((file) => {
  convertToAvif(file);
});
