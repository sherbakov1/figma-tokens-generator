const { get } = require("./api");
const createFile = require("./bin");
const { recursion, flat } = require("./helpers");
const { SECRET_API_KEY, FILE_ID } = require("./secret");
const models = require("./models");

module.exports = createFile(
  (async (fileId, secrectKey) => {
    const { data } = await get(fileId, secrectKey);
    const { document } = data;

    return flat(
      document.children.map(canvas => {
        const modelName = canvas.name;
        if (!models[modelName]) return console.log(`No ${canvas.name} model`);
        return flat(recursion(canvas, models[modelName]));
      })
    );
  })(FILE_ID, SECRET_API_KEY)
);
