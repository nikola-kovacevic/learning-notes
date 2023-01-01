const { rmdirSync, existsSync } = require("fs");

const oldFilesAndFoldersPaths = [
  "./_docusaurus/docs",
  "./_docusaurus/sidebars.js",
];

for (const path of oldFilesAndFoldersPaths) {
  if (existsSync(path)) {
    rmdirSync(path, { recursive: true });
  }
}
