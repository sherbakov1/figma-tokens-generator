const helpers = {
  flat(array = []) {
    return array.flat();
  },
  recursion(object, model, separator = "-", n) {
    const name = !n ? object.name : n + separator + object.name;

    if (!object.children) {
      return new model({ ...object, name: name.toLowerCase() }).token;
    }

    return object.children.map(child =>
      helpers.recursion(child, model, separator, name)
    );
  }
};

module.exports = helpers;
