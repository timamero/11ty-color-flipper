module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
      "html",
      "css",
      "js"
    ]);
  };

module.exports = {
    dir: {
        input: "src",
    }
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/css");
  };