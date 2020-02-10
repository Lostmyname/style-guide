module.exports = {
  presets: [ '@babel/preset-env', '@babel/preset-react' ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['babel-plugin-styled-components', {
      displayName: false
    }],
    [require.resolve('babel-plugin-module-resolver'), {
      alias: {
        src: './lib'
      }
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
