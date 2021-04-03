const { copyFile, mkdir, readdir } = require("fs").promises;
const path = require("path");

const SOURCE = "./notes";
const DESTINATION = "./_docusaurus/docs";

async function copyDir(src = SOURCE, dest = DESTINATION) {
  const entries = await readdir(src, { withFileTypes: true });

  await mkdir(dest);

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

copyDir().then(() => console.log("Notes have been copied"));
