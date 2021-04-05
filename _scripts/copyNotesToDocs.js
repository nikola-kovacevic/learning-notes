const { copyFile, mkdir, readdir } = require("fs").promises;
const { join } = require("path");

const SOURCE = "./notes";
const DESTINATION = "./_docusaurus/docs";

const copyDir = async (src = SOURCE, dest = DESTINATION) => {
  const entries = await readdir(src, { withFileTypes: true });

  await mkdir(dest);

  for (let entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    entry.isDirectory()
      ? await copyDir(srcPath, destPath)
      : await copyFile(srcPath, destPath);
  }
};

copyDir().catch(console.error);
