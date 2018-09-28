const path = require('path');
const nodeExternals = require('webpack-node-externals');

const srcPath = subDir => path.join(__dirname, "src", subDir);

module.exports = {
  entry: './src/server.ts',

  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      constants: srcPath('constants'),
      controllers: srcPath('controllers'),
      middleware: srcPath('middleware'),
      migration: srcPath('migration'),
      models: srcPath('models'),
      subscriber: srcPath('subscriber'),
      utils: srcPath('utils'),
      src: srcPath('')
    },
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.ts?$/,
        exclude: /node_modules/
      }
    ]
  },

  externals: [nodeExternals()],

  target: 'node',

  mode: 'development'
};
