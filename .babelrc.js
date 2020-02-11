module.exports = {
  presets: [ '@babel/preset-env', '@babel/preset-react' ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['babel-plugin-styled-components', {
      displayName: false
    }],
    [require.resolve('babel-plugin-module-resolver'), {
      alias: {
        src: '.'
      }
    }]
  ],
  "only": [
    "./src/lib/**/*",
  ],
  "ignore": [ "./src/lib/**/*.test.js" ]
};
