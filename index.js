module.exports = function noSpace(string) {
    if (typeof string !== "string") throw new TypeError("String is required!");
    return string.replace(/\s/g, "");
  };