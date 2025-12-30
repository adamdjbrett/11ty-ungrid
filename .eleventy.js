export default function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("public");

  // Add filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("slugify", str => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  });

  // Collection for blog posts
  eleventyConfig.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob("content/blog/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
