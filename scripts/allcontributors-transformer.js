const fs = require("fs");
const del = require("del");

const rootPath = process.cwd();
const contributorJSON = `${rootPath}/content/all-contributors.json`;
const contributorORIGINAL = `${rootPath}/.all-contributorsrc`;

const main = async () => {
  if (fs.existsSync(contributorJSON)) {
    try {
      await del(contributorJSON);
    } catch (err) {
      console.error("There was an issue with deleting all-contributors.json");
    }
  }

  fs.readFile(contributorORIGINAL, "utf8", (err, out) => {
    if (err) {
      console.error(err);
      return;
    }

    fs.writeFile(contributorJSON, out, (err) => {
      if (err) return console.error(err, out);
    });
  });
};

main();
