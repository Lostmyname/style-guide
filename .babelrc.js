module.exports = {
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "babel-plugin-styled-components",
    ["babel-plugin-replace-imports", {
      "test": /^src\//g,
      "replacer": "lib/"
    }]
  ],
  "only": [
    "./src/assets/**/*",
    "./src/components/**/*",
    "./src/config/**/*",
    "./src/hooks/**/*",
    "./src/styles/**/*",
    "./src/utils/**/*"
  ],
  "ignore": [ "./src/**/*.test.js" ]
};
