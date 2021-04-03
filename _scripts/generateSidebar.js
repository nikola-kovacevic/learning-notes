const { readdirSync, statSync, writeFileSync } = require("fs");
const { basename } = require("path");

const NOTES_PATH = "./notes";
const SIDEBAR_WRITE_PATH = "./_docusaurus/sidebars.js";
const EXCLUDED_FILES = ["README.md"];

const recurseOverNotesDirectory = (dir = NOTES_PATH) => {
  const filesAndFolders = readdirSync(dir);

  const tree = [];

  filesAndFolders.forEach((fileOrFolder) => {
    const current = `${dir}/${fileOrFolder}`;
    const folder = {};

    let file = "";

    const workingWithDirectory = statSync(current).isDirectory();

    const isDataAvailable = {
      asFile: !workingWithDirectory && !EXCLUDED_FILES.includes(fileOrFolder),
      asFolder: false,
    };

    if (workingWithDirectory) {
      Object.assign(folder, {
        label: fileOrFolder,
        type: "category",
        items: recurseOverNotesDirectory(current),
      });

      isDataAvailable.asFolder = !!folder.items.length;
    } else if (isDataAvailable.asFile) {
      const pathWithoutRoot = current.replace(`${NOTES_PATH}/`, "");
      file = pathWithoutRoot.replace(".md", "");
    }

    if (isDataAvailable.asFile || isDataAvailable.asFolder) {
      tree.push(isDataAvailable.asFile ? file : folder);
    }
  });

  return tree;
};

const sidebar = recurseOverNotesDirectory((dir = NOTES_PATH));
const sidebarData = `module.exports = { docs: ${JSON.stringify(sidebar)} }`;

writeFileSync(SIDEBAR_WRITE_PATH, sidebarData);
