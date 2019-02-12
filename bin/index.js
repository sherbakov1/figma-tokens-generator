const fs = require("fs");

const createFile = async data => {
  const content = await data;
  const root = [":root {"];
  content.push("}");

  fs.writeFile("dist/tokens.css", root.concat(content).join("\n"), err => {
    if (err) throw err;
  });
};

module.exports = createFile;
