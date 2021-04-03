const { rmdirSync } = require("fs");

const oldFilesAndFoldersPaths = [
  "./_docusaurus/docs",
  "./_docusaurus/sidebars.js",
];

for (const path of oldFilesAndFoldersPaths) {
  rmdirSync(path, { recursive: true });
}
