const { readdirSync, statSync, writeFileSync } = require("fs");
const { extname } = require("path");

const NOTES_PATH = "./notes";
const SIDEBAR_WRITE_PATH = "./_docusaurus/sidebars.js";
const EXCLUDED_FILES = ["README.md"];
const IMG_EXTENSIONS = [".png", ".gif", ".jpg", ".jpeg"];

const isNot = (arg) => !arg;

const recurseOverNotesDirectory = (dir = NOTES_PATH) => {
  const filesAndFolders = readdirSync(dir);

  const tree = [];

  filesAndFolders.forEach((fileOrFolder) => {
    const current = `${dir}/${fileOrFolder}`;
    const folder = {};

    let file = "";

    const workingWithDirectory = statSync(current).isDirectory();
    const anImage = IMG_EXTENSIONS.includes(extname(fileOrFolder));
    const excludedFile = EXCLUDED_FILES.includes(fileOrFolder);

    const isDataAvailable = {
      asFile:
        isNot(workingWithDirectory) && isNot(excludedFile) && isNot(anImage),
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
