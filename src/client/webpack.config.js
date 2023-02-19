const Path = require('path');
const NodeExternals = require('webpack-node-externals');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts']
  },
  entry: {
    index: './src/index.ts'
  },
  output: {
    path: Path.resolve(__dirname),
    filename: '../../client_packages/index.js'
  },
  target: 'node',
  externals: [
    NodeExternals({
      modulesDir: '../../node_modules'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ]
  }
};
